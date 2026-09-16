import {
  getRoom,
  addParticipant,
  kickStudent,
  getParticipantsList,
  advanceQuestion,
  submitAnswer,
  extendTimer,
  endCurrentQuestion,
  finishQuiz,
} from '../services/roomManager.js';

export const registerQuizSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    // Keep track of room and role for this socket
    let currentRoomCode = null;
    let userRole = null; // 'admin' | 'student'

    // 1. Join Room Event
    socket.on('join_room', ({ roomCode, studentName, studentId, role }) => {
      try {
        if (!roomCode) {
          return socket.emit('error_message', { message: 'Room code is required' });
        }

        const normalizedRoomCode = roomCode.trim().toUpperCase();
        const room = getRoom(normalizedRoomCode);

        if (!room) {
          return socket.emit('error_message', { message: `Room ${normalizedRoomCode} not found` });
        }

        currentRoomCode = normalizedRoomCode;
        socket.join(normalizedRoomCode);

        if (role === 'admin') {
          userRole = 'admin';
          room.adminSocketId = socket.id;

          socket.emit('joined_success', {
            role: 'admin',
            roomCode: normalizedRoomCode,
            quizTitle: room.quizTitle,
            state: room.status,
            currentQuestionIndex: room.currentQuestionIndex,
            totalQuestions: room.quiz.questions.length,
            participants: getParticipantsList(normalizedRoomCode),
          });

          // If quiz is already active, send current question state
          if (room.status === 'QUESTION_ACTIVE' && room.currentQuestionIndex >= 0) {
            const currentQ = room.quiz.questions[room.currentQuestionIndex];
            socket.emit('question_start', {
              questionIndex: room.currentQuestionIndex,
              questionText: currentQ.questionText,
              code: currentQ.code || '',
              options: currentQ.options,
              timeLimit: currentQ.timeLimit,
              totalQuestions: room.quiz.questions.length,
            });
            socket.emit('admin_question_meta', {
              questionIndex: room.currentQuestionIndex,
              correctOptionIndex: currentQ.correctOptionIndex,
              explanation: currentQ.explanation,
            });
            socket.emit('timer_tick', {
              remainingTime: room.remainingTime,
              totalTime: currentQ.timeLimit,
            });
          }
          return;
        }

        // Student Join Flow
        userRole = 'student';
        if (!studentName || !studentName.trim()) {
          return socket.emit('error_message', { message: 'Student Name is required' });
        }

        const { participant, isReconnect } = addParticipant(
          normalizedRoomCode,
          socket.id,
          { studentName, studentId }
        );

        socket.emit('joined_success', {
          role: 'student',
          roomCode: normalizedRoomCode,
          studentName: participant.studentName,
          studentId: participant.studentId,
          state: room.status,
          score: participant.score,
          streak: participant.streak,
          currentQuestionIndex: room.currentQuestionIndex,
          totalQuestions: room.quiz.questions.length,
        });

        // Broadcast updated participants list to everyone in room (Admin sees new badge instantly)
        io.to(normalizedRoomCode).emit('participant_list_updated', {
          participants: getParticipantsList(normalizedRoomCode),
        });

        // If joined mid-question, send active question without correct answer
        if (room.status === 'QUESTION_ACTIVE' && room.currentQuestionIndex >= 0) {
          const currentQ = room.quiz.questions[room.currentQuestionIndex];
          socket.emit('question_start', {
            questionIndex: room.currentQuestionIndex,
            questionText: currentQ.questionText,
            code: currentQ.code || '',
            options: currentQ.options,
            timeLimit: currentQ.timeLimit,
            totalQuestions: room.quiz.questions.length,
          });
          socket.emit('timer_tick', {
            remainingTime: room.remainingTime,
            totalTime: currentQ.timeLimit,
          });
        }
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 2. Admin Starts Quiz
    socket.on('admin_start_quiz', ({ roomCode }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        advanceQuestion(code, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 3. Admin Next Question
    socket.on('admin_next_question', ({ roomCode }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        advanceQuestion(code, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 3.1. Admin Extend Timer
    socket.on('admin_extend_timer', ({ roomCode, seconds }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        extendTimer(code, seconds, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 3.2. Admin Concludes Active Question Immediately (revealing answers and responses)
    socket.on('admin_conclude_question', ({ roomCode }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        endCurrentQuestion(code, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 3.3. Admin Ends Entire Quiz Early (showing final podium and rankings)
    socket.on('admin_finish_quiz', ({ roomCode }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        finishQuiz(code, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 4. Student Submits Answer
    socket.on('submit_answer', ({ roomCode, questionIndex, selectedOptionIndex }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        submitAnswer(code, socket.id, { questionIndex, selectedOptionIndex }, io);
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 5. Admin Moderation: Kick / Ban Student
    socket.on('admin_kick_student', ({ roomCode, socketId, reason }) => {
      try {
        const code = (roomCode || currentRoomCode)?.trim().toUpperCase();
        const kickedParticipant = kickStudent(code, socketId);

        if (kickedParticipant) {
          // Notify the kicked student
          io.to(socketId).emit('student_kicked', {
            reason: reason || 'You have been removed from this session by the host.',
          });

          // Disconnect that socket from room
          const targetSocket = io.sockets.sockets.get(socketId);
          if (targetSocket) {
            targetSocket.leave(code);
          }

          // Broadcast updated participant roster
          io.to(code).emit('participant_list_updated', {
            participants: getParticipantsList(code),
          });
        }
      } catch (err) {
        socket.emit('error_message', { message: err.message });
      }
    });

    // 6. Handle Disconnection
    socket.on('disconnect', () => {
      if (currentRoomCode) {
        const room = getRoom(currentRoomCode);
        if (room && userRole === 'student') {
          const participant = room.participants.get(socket.id);
          if (participant) {
            if (room.status === 'LOBBY') {
              // In lobby, clean up disconnected participants
              room.participants.delete(socket.id);
            } else {
              // During quiz, mark disconnected so scores aren't erased
              participant.isConnected = false;
            }
            io.to(currentRoomCode).emit('participant_list_updated', {
              participants: getParticipantsList(currentRoomCode),
            });
          }
        }
      }
    });
  });
};
