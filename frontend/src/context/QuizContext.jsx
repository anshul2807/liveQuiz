import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getSocket } from '../services/socket.js';

const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [role, setRole] = useState(null); // 'admin' | 'student'
  const [roomCode, setRoomCode] = useState('');
  const [roomState, setRoomState] = useState('LOBBY'); // 'LOBBY' | 'QUESTION_ACTIVE' | 'QUESTION_RESULT' | 'FINISHED'
  const [quizTitle, setQuizTitle] = useState('');
  const [participants, setParticipants] = useState([]);
  
  // Current active question
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [adminMeta, setAdminMeta] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [totalTime, setTotalTime] = useState(60);
  const [submissionProgress, setSubmissionProgress] = useState({ submitted: 0, total: 0 });
  
  // Student specific state
  const [studentInfo, setStudentInfo] = useState({ name: '', id: '', score: 0, streak: 0, rank: 1 });
  const [myAnswer, setMyAnswer] = useState(null);
  const [studentResult, setStudentResult] = useState(null);
  const [kickedReason, setKickedReason] = useState(null);

  // Result & Completed state
  const [questionStats, setQuestionStats] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [infoMessage, setInfoMessage] = useState(null);

  // Admin authentication state
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return Boolean(localStorage.getItem('admin_token'));
    } catch {
      return false;
    }
  });
  const [adminUser, setAdminUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('admin_user') || 'null');
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const s = getSocket();
    setSocket(s);

    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);

    const onJoinedSuccess = (data) => {
      console.log('✅ Joined successfully:', data);
      setRole(data.role);
      setRoomCode(data.roomCode);
      if (data.quizTitle) setQuizTitle(data.quizTitle);
      if (data.state) setRoomState(data.state);
      if (data.participants) setParticipants(data.participants);
      if (data.role === 'student') {
        setStudentInfo(prev => ({
          ...prev,
          name: data.studentName,
          id: data.studentId,
          score: data.score || 0,
          streak: data.streak || 0,
        }));
      }
    };

    const onRoomStateChange = ({ state, currentQuestionIndex }) => {
      console.log('🔄 Room state changed to:', state);
      setRoomState(state);
      if (state === 'QUESTION_ACTIVE') {
        setMyAnswer(null);
        setStudentResult(null);
        setQuestionStats(null);
      }
    };

    const onParticipantListUpdated = ({ participants: list }) => {
      setParticipants(list || []);
      // Update our own student score/streak if in list
      if (s.id) {
        const me = (list || []).find(p => p.socketId === s.id);
        if (me) {
          setStudentInfo(prev => ({
            ...prev,
            score: me.score,
            streak: me.streak,
          }));
        }
      }
    };

    const onQuestionStart = (data) => {
      console.log('🎯 Question started:', data);
      setCurrentQuestion(data);
      setTotalTime(data.timeLimit || 60);
      setRemainingTime(data.timeLimit || 60);
      setRoomState('QUESTION_ACTIVE');
      setMyAnswer(null);
      setStudentResult(null);
      setQuestionStats(null);
      setSubmissionProgress({ submitted: 0, total: participants.length || 0 });
    };

    const onAdminQuestionMeta = (data) => {
      setAdminMeta(data);
    };

    const onTimerTick = ({ remainingTime: rem, totalTime: tot }) => {
      setRemainingTime(rem);
      if (tot) setTotalTime(tot);
    };

    const onSubmissionProgress = (progress) => {
      setSubmissionProgress(progress);
    };

    const onAnswerLocked = (answerData) => {
      setMyAnswer(answerData);
    };

    const onQuestionEnded = ({ stats, questionIndex, totalQuestions }) => {
      console.log('📊 Question ended stats:', stats);
      setQuestionStats(stats);
      setRoomState('QUESTION_RESULT');
    };

    const onStudentQuestionResult = (result) => {
      console.log('🏆 Student result:', result);
      setStudentResult(result);
      setStudentInfo(prev => ({
        ...prev,
        score: result.totalScore,
        streak: result.streak,
        rank: result.rank,
      }));
    };

    const onStudentKicked = ({ reason }) => {
      setKickedReason(reason || 'You have been removed from the session');
    };

    const onQuizCompleted = ({ leaderboard: lb, quizTitle: title }) => {
      setLeaderboard(lb || []);
      if (title) setQuizTitle(title);
      setRoomState('FINISHED');
    };

    const onErrorMessage = ({ message }) => {
      setErrorMessage(message);
      setTimeout(() => setErrorMessage(null), 5000);
    };

    const onTimerExtended = ({ addedSeconds, remainingTime }) => {
      setInfoMessage(`⏱️ Host added +${addedSeconds}s to the timer!`);
      setTimeout(() => setInfoMessage(null), 3500);
    };

    s.on('connect', onConnect);
    s.on('disconnect', onDisconnect);
    s.on('joined_success', onJoinedSuccess);
    s.on('room_state_change', onRoomStateChange);
    s.on('participant_list_updated', onParticipantListUpdated);
    s.on('question_start', onQuestionStart);
    s.on('admin_question_meta', onAdminQuestionMeta);
    s.on('timer_tick', onTimerTick);
    s.on('timer_extended', onTimerExtended);
    s.on('submission_progress', onSubmissionProgress);
    s.on('answer_locked', onAnswerLocked);
    s.on('question_ended', onQuestionEnded);
    s.on('student_question_result', onStudentQuestionResult);
    s.on('student_kicked', onStudentKicked);
    s.on('quiz_completed', onQuizCompleted);
    s.on('error_message', onErrorMessage);

    return () => {
      s.off('connect', onConnect);
      s.off('disconnect', onDisconnect);
      s.off('joined_success', onJoinedSuccess);
      s.off('room_state_change', onRoomStateChange);
      s.off('participant_list_updated', onParticipantListUpdated);
      s.off('question_start', onQuestionStart);
      s.off('admin_question_meta', onAdminQuestionMeta);
      s.off('timer_tick', onTimerTick);
      s.off('timer_extended', onTimerExtended);
      s.off('submission_progress', onSubmissionProgress);
      s.off('answer_locked', onAnswerLocked);
      s.off('question_ended', onQuestionEnded);
      s.off('student_question_result', onStudentQuestionResult);
      s.off('student_kicked', onStudentKicked);
      s.off('quiz_completed', onQuizCompleted);
      s.off('error_message', onErrorMessage);
    };
  }, []);

  const joinAsAdmin = useCallback((targetRoomCode) => {
    const s = getSocket();
    setRole('admin');
    setRoomCode(targetRoomCode);
    s.emit('join_room', { roomCode: targetRoomCode, role: 'admin' });
  }, []);

  const joinAsStudent = useCallback((targetRoomCode, studentName, studentId) => {
    const s = getSocket();
    setRole('student');
    setRoomCode(targetRoomCode);
    setStudentInfo(prev => ({ ...prev, name: studentName, id: studentId }));
    s.emit('join_room', {
      roomCode: targetRoomCode,
      studentName,
      studentId,
      role: 'student',
    });
  }, []);

  const startQuiz = useCallback((targetRoomCode) => {
    const s = getSocket();
    s.emit('admin_start_quiz', { roomCode: targetRoomCode || roomCode });
  }, [roomCode]);

  const nextQuestion = useCallback((targetRoomCode) => {
    const s = getSocket();
    s.emit('admin_next_question', { roomCode: targetRoomCode || roomCode });
  }, [roomCode]);

  const submitMyAnswer = useCallback((selectedOptionIndex) => {
    if (!currentQuestion) return;
    const s = getSocket();
    s.emit('submit_answer', {
      roomCode,
      questionIndex: currentQuestion.questionIndex,
      selectedOptionIndex,
    });
  }, [roomCode, currentQuestion]);

  const kickStudent = useCallback((targetSocketId, reason) => {
    const s = getSocket();
    s.emit('admin_kick_student', {
      roomCode,
      socketId: targetSocketId,
      reason,
    });
  }, [roomCode]);

  const extendTimer = useCallback((seconds = 10) => {
    const s = getSocket();
    s.emit('admin_extend_timer', { roomCode, seconds });
  }, [roomCode]);

  const resetQuizState = useCallback(() => {
    setRole(null);
    setRoomCode('');
    setRoomState('LOBBY');
    setQuizTitle('');
    setParticipants([]);
    setCurrentQuestion(null);
    setAdminMeta(null);
    setRemainingTime(0);
    setQuestionStats(null);
    setLeaderboard([]);
    setMyAnswer(null);
    setStudentResult(null);
    setKickedReason(null);
    setErrorMessage(null);
    setInfoMessage(null);
  }, []);

  const loginAdmin = useCallback((userData) => {
    setIsAdminAuthenticated(true);
    setAdminUser(userData);
  }, []);

  const logoutAdmin = useCallback(() => {
    try {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
    } catch {
      // ignore
    }
    setIsAdminAuthenticated(false);
    setAdminUser(null);
    resetQuizState();
  }, [resetQuizState]);

  const value = {
    socket,
    isConnected,
    role,
    roomCode,
    roomState,
    quizTitle,
    participants,
    currentQuestion,
    adminMeta,
    remainingTime,
    totalTime,
    submissionProgress,
    studentInfo,
    myAnswer,
    studentResult,
    questionStats,
    leaderboard,
    kickedReason,
    errorMessage,
    infoMessage,
    isAdminAuthenticated,
    adminUser,
    loginAdmin,
    logoutAdmin,
    extendTimer,
    joinAsAdmin,
    joinAsStudent,
    startQuiz,
    nextQuestion,
    submitMyAnswer,
    kickStudent,
    resetQuizState,
    setErrorMessage,
    setInfoMessage,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
