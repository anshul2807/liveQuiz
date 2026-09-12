import Session from '../models/Session.js';
import { getQuizById } from './quizSeeder.js';
import { getDbStatus } from '../config/db.js';

// In-memory active rooms store
// Key: roomCode (e.g. 'K9X2P4') -> Room Object
export const activeRooms = new Map();

// Generate unique 6-character room code (e.g. "K7M2P9")
export const generateRoomCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // Avoid confusing chars: I, 1, O, 0
  let code = '';
  do {
    code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (activeRooms.has(code));
  return code;
};

// Create a new room
export const createRoom = async (quizId, adminSocketId = null) => {
  const quiz = await getQuizById(quizId);
  if (!quiz) {
    throw new Error('Quiz not found');
  }

  const roomCode = generateRoomCode();
  const room = {
    roomCode,
    quizId: quiz._id,
    quizTitle: quiz.title,
    quiz,
    status: 'LOBBY',
    adminSocketId,
    currentQuestionIndex: -1,
    participants: new Map(), // socketId -> participant
    bannedStudentIds: new Set(),
    responses: new Map(), // questionIndex -> Map(socketId -> response)
    timerInterval: null,
    remainingTime: 0,
    questionStartTime: 0,
    createdAt: new Date(),
    dbSessionId: null,
  };

  activeRooms.set(roomCode, room);

  // Try creating DB session if Mongo is connected
  if (getDbStatus()) {
    try {
      const session = await Session.create({
        roomCode,
        quizId: quiz._id,
        quizTitle: quiz.title,
        status: 'LOBBY',
        participants: [],
        responses: [],
        startedAt: new Date(),
      });
      room.dbSessionId = session._id;
    } catch (err) {
      console.warn(`Could not save session to MongoDB for room ${roomCode}:`, err.message);
    }
  }

  return room;
};

// Get room by code
export const getRoom = (roomCode) => {
  if (!roomCode) return null;
  return activeRooms.get(roomCode.trim().toUpperCase()) || null;
};

// Add participant to room
export const addParticipant = (roomCode, socketId, { studentName, studentId }) => {
  const room = getRoom(roomCode);
  if (!room) throw new Error('Room does not exist');
  if (room.status === 'COMPLETED') throw new Error('This quiz session has already finished');

  const normalizedId = (studentId || '').trim();
  if (normalizedId && room.bannedStudentIds.has(normalizedId)) {
    throw new Error('You have been banned from this quiz session');
  }

  // Check if student with same studentId is already in room and update socketId (reconnection)
  for (const [existingSocketId, p] of room.participants.entries()) {
    if (normalizedId && p.studentId === normalizedId) {
      // Transfer to new socket
      room.participants.delete(existingSocketId);
      p.socketId = socketId;
      p.isConnected = true;
      room.participants.set(socketId, p);
      return { participant: p, isReconnect: true };
    }
  }

  const participant = {
    socketId,
    studentName: studentName.trim(),
    studentId: normalizedId,
    isBanned: false,
    score: 0,
    streak: 0,
    isConnected: true,
    joinedAt: new Date(),
  };

  room.participants.set(socketId, participant);
  return { participant, isReconnect: false };
};

// Remove or kick student
export const kickStudent = (roomCode, socketId) => {
  const room = getRoom(roomCode);
  if (!room) return null;

  const participant = room.participants.get(socketId);
  if (!participant) return null;

  participant.isBanned = true;
  if (participant.studentId) {
    room.bannedStudentIds.add(participant.studentId);
  }
  room.participants.delete(socketId);
  return participant;
};

// Format participants list for client broadcast
export const getParticipantsList = (roomCode) => {
  const room = getRoom(roomCode);
  if (!room) return [];
  return Array.from(room.participants.values()).map(p => ({
    socketId: p.socketId,
    studentName: p.studentName,
    studentId: p.studentId,
    score: p.score,
    streak: p.streak,
    isConnected: p.isConnected,
  }));
};

// Start or advance to next question
export const advanceQuestion = (roomCode, io) => {
  const room = getRoom(roomCode);
  if (!room) throw new Error('Room not found');

  // Clear any existing timer
  if (room.timerInterval) {
    clearInterval(room.timerInterval);
    room.timerInterval = null;
  }

  const nextIndex = room.currentQuestionIndex + 1;
  const questions = room.quiz.questions;

  // Check if finished all questions
  if (nextIndex >= questions.length) {
    return finishQuiz(roomCode, io);
  }

  room.currentQuestionIndex = nextIndex;
  room.status = 'QUESTION_ACTIVE';
  const currentQuestion = questions[nextIndex];
  const timeLimit = currentQuestion.timeLimit || 60;
  room.remainingTime = timeLimit;
  room.totalTime = timeLimit;
  room.questionStartTime = Date.now();

  // Initialize responses map for this question
  room.responses.set(nextIndex, new Map());

  // Broadcast state change
  io.to(roomCode).emit('room_state_change', {
    state: 'QUESTION_ACTIVE',
    currentQuestionIndex: nextIndex,
    totalQuestions: questions.length,
  });

  // Broadcast question payload to room (OMIT correctOptionIndex for students!)
  io.to(roomCode).emit('question_start', {
    questionIndex: nextIndex,
    questionText: currentQuestion.questionText,
    code: currentQuestion.code || '',
    options: currentQuestion.options,
    timeLimit: timeLimit,
    totalQuestions: questions.length,
  });

  // If admin has a distinct socket, send full data with correct answer
  if (room.adminSocketId) {
    io.to(room.adminSocketId).emit('admin_question_meta', {
      questionIndex: nextIndex,
      correctOptionIndex: currentQuestion.correctOptionIndex,
      explanation: currentQuestion.explanation,
    });
  }

  // Authoritative Server-side Timer via setInterval (1 second)
  room.timerInterval = setInterval(() => {
    room.remainingTime -= 1;

    io.to(roomCode).emit('timer_tick', {
      remainingTime: Math.max(0, room.remainingTime),
      totalTime: room.totalTime || timeLimit,
    });

    if (room.remainingTime <= 0) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
      endCurrentQuestion(roomCode, io);
    }
  }, 1000);

  return { questionIndex: nextIndex, currentQuestion };
};

// Extend active question timer (Admin feature)
export const extendTimer = (roomCode, additionalSeconds, io) => {
  const room = getRoom(roomCode);
  if (!room) return { success: false, message: 'Room not found' };
  if (room.status !== 'QUESTION_ACTIVE') {
    return { success: false, message: 'Question is not currently active' };
  }

  const seconds = Math.max(1, Number(additionalSeconds) || 10);
  room.remainingTime = (room.remainingTime || 0) + seconds;
  room.totalTime = Math.max(room.totalTime || 20, room.remainingTime);

  io.to(roomCode).emit('timer_tick', {
    remainingTime: room.remainingTime,
    totalTime: room.totalTime,
  });

  io.to(roomCode).emit('timer_extended', {
    addedSeconds: seconds,
    remainingTime: room.remainingTime,
  });

  return { success: true, remainingTime: room.remainingTime };
};

// Handle student answer submission
export const submitAnswer = (roomCode, socketId, { questionIndex, selectedOptionIndex }, io) => {
  const room = getRoom(roomCode);
  if (!room) throw new Error('Room not found');
  if (room.status !== 'QUESTION_ACTIVE') throw new Error('Question is not currently active');
  if (room.currentQuestionIndex !== questionIndex) throw new Error('Question index mismatch');

  const participant = room.participants.get(socketId);
  if (!participant) throw new Error('Participant not found in room');
  if (participant.isBanned) throw new Error('Participant is banned');

  const questionResponses = room.responses.get(questionIndex);
  if (!questionResponses) throw new Error('Question responses not initialized');

  // Lock answer - prevent multiple submissions
  if (questionResponses.has(socketId)) {
    return { alreadySubmitted: true };
  }

  const currentQuestion = room.quiz.questions[questionIndex];
  const responseTimeMs = Date.now() - room.questionStartTime;
  const isCorrect = Number(selectedOptionIndex) === currentQuestion.correctOptionIndex;

  // Kahoot Scoring Formula:
  // Base 1000 points scaled by response time fraction if correct, 0 if incorrect
  let pointsEarned = 0;
  if (isCorrect) {
    const maxTimeMs = (currentQuestion.timeLimit || 20) * 1000;
    const timeRatio = Math.min(1, Math.max(0, responseTimeMs / maxTimeMs));
    // Min 500 points for correct answer up to 1000 for instantaneous answer
    pointsEarned = Math.round(1000 * (1 - (timeRatio / 2)));
    participant.score += pointsEarned;
    participant.streak += 1;
  } else {
    participant.streak = 0;
  }

  const responseRecord = {
    participantId: socketId,
    studentName: participant.studentName,
    studentId: participant.studentId,
    selectedOption: Number(selectedOptionIndex),
    isCorrect,
    responseTimeMs,
    pointsEarned,
  };

  questionResponses.set(socketId, responseRecord);

  // Notify the submitting student immediately that their answer was locked
  io.to(socketId).emit('answer_locked', {
    selectedOptionIndex: Number(selectedOptionIndex),
    responseTimeMs,
  });

  // Broadcast submission count to admin
  const totalActiveParticipants = room.participants.size;
  const totalAnswersSubmitted = questionResponses.size;

  io.to(roomCode).emit('submission_progress', {
    submitted: totalAnswersSubmitted,
    total: totalActiveParticipants,
  });

  // If ALL active participants have submitted, end question early!
  if (totalActiveParticipants > 0 && totalAnswersSubmitted >= totalActiveParticipants) {
    if (room.timerInterval) {
      clearInterval(room.timerInterval);
      room.timerInterval = null;
    }
    // Small micro-delay (300ms) to ensure socket events settle before showing results
    setTimeout(() => {
      endCurrentQuestion(roomCode, io);
    }, 300);
  }

  return { success: true, pointsEarned, isCorrect };
};

// End current question and compile results
export const endCurrentQuestion = (roomCode, io) => {
  const room = getRoom(roomCode);
  if (!room || room.status !== 'QUESTION_ACTIVE') return;

  if (room.timerInterval) {
    clearInterval(room.timerInterval);
    room.timerInterval = null;
  }

  room.status = 'QUESTION_RESULT';
  const qIndex = room.currentQuestionIndex;
  const currentQuestion = room.quiz.questions[qIndex];
  const questionResponses = room.responses.get(qIndex) || new Map();

  // Aggregate choice distribution [A, B, C, D]
  const counts = [0, 0, 0, 0];
  for (const resp of questionResponses.values()) {
    if (resp.selectedOption >= 0 && resp.selectedOption <= 3) {
      counts[resp.selectedOption] += 1;
    }
  }

  const totalAnswered = questionResponses.size;
  const totalParticipants = room.participants.size;

  const stats = {
    counts, // e.g. [12, 45, 3, 2]
    totalAnswered,
    totalParticipants,
    correctIndex: currentQuestion.correctOptionIndex,
    explanation: currentQuestion.explanation,
    questionText: currentQuestion.questionText,
    options: currentQuestion.options,
  };

  // Broadcast question_ended event with aggregate stats
  io.to(roomCode).emit('question_ended', {
    stats,
    questionIndex: qIndex,
    totalQuestions: room.quiz.questions.length,
  });

  // Also broadcast room_state_change
  io.to(roomCode).emit('room_state_change', {
    state: 'QUESTION_RESULT',
    currentQuestionIndex: qIndex,
  });

  // Calculate current rankings
  const rankedParticipants = Array.from(room.participants.values())
    .sort((a, b) => b.score - a.score);

  // Send personalized results to each participant
  for (const [socketId, participant] of room.participants.entries()) {
    const studentResponse = questionResponses.get(socketId);
    const rank = rankedParticipants.findIndex(p => p.socketId === socketId) + 1;

    let resultStatus = 'TIMED_OUT';
    let pointsEarned = 0;
    let selectedOption = null;

    if (studentResponse) {
      resultStatus = studentResponse.isCorrect ? 'CORRECT' : 'INCORRECT';
      pointsEarned = studentResponse.pointsEarned;
      selectedOption = studentResponse.selectedOption;
    }

    io.to(socketId).emit('student_question_result', {
      resultStatus,
      isCorrect: resultStatus === 'CORRECT',
      pointsEarned,
      totalScore: participant.score,
      streak: participant.streak,
      rank,
      selectedOption,
      correctOptionIndex: currentQuestion.correctOptionIndex,
      explanation: currentQuestion.explanation,
    });
  }

  // Update participant list with updated scores
  io.to(roomCode).emit('participant_list_updated', {
    participants: getParticipantsList(roomCode),
  });

  // Update database session if available
  if (getDbStatus() && room.dbSessionId) {
    try {
      Session.findByIdAndUpdate(room.dbSessionId, {
        status: 'IN_PROGRESS',
        participants: Array.from(room.participants.values()),
        $push: {
          responses: {
            $each: Array.from(questionResponses.values()).map(r => ({
              questionIndex: qIndex,
              participantId: r.participantId,
              studentName: r.studentName,
              selectedOption: r.selectedOption,
              isCorrect: r.isCorrect,
              responseTimeMs: r.responseTimeMs,
              pointsEarned: r.pointsEarned,
            })),
          },
        },
      }).catch(err => console.warn('Async session update error:', err.message));
    } catch (err) {
      console.warn('Session DB update failed:', err.message);
    }
  }
};

// Finish entire quiz
export const finishQuiz = (roomCode, io) => {
  const room = getRoom(roomCode);
  if (!room) return;

  if (room.timerInterval) {
    clearInterval(room.timerInterval);
    room.timerInterval = null;
  }

  room.status = 'COMPLETED';

  // Build sorted leaderboard
  const leaderboard = Array.from(room.participants.values())
    .sort((a, b) => b.score - a.score)
    .map((p, idx) => ({
      rank: idx + 1,
      studentName: p.studentName,
      studentId: p.studentId,
      score: p.score,
      streak: p.streak,
      socketId: p.socketId,
    }));

  io.to(roomCode).emit('quiz_completed', {
    leaderboard,
    quizTitle: room.quizTitle,
    totalQuestions: room.quiz.questions.length,
  });

  io.to(roomCode).emit('room_state_change', {
    state: 'FINISHED',
  });

  // Final database update
  if (getDbStatus() && room.dbSessionId) {
    Session.findByIdAndUpdate(room.dbSessionId, {
      status: 'COMPLETED',
      endedAt: new Date(),
      participants: Array.from(room.participants.values()),
    }).catch(err => console.warn('Async final session save error:', err.message));
  }

  return { leaderboard };
};
