import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { Clock, CheckCircle2, XCircle, Trophy, Flame, Sparkles, UserX, Code, Check } from 'lucide-react';

const OPTION_COLORS = ['#e21b3c', '#1368ce', '#d89e00', '#26890c']; // Red, Blue, Yellow, Green
const OPTION_LABELS = ['A', 'B', 'C', 'D'];
const OPTION_SYMBOLS = ['▲', '◆', '●', '■'];

export const StudentView = ({ initialRoomCode }) => {
  const {
    roomCode,
    roomState,
    studentInfo,
    currentQuestion,
    remainingTime,
    totalTime,
    myAnswer,
    studentResult,
    kickedReason,
    joinAsStudent,
    submitMyAnswer,
  } = useQuiz();

  const [inputCode, setInputCode] = useState(initialRoomCode || '');
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [isSubmittingJoin, setIsSubmittingJoin] = useState(false);

  // If kicked by admin
  if (kickedReason) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="bg-rose-50 dark:bg-rose-950/60 border-2 border-rose-400 dark:border-rose-600/80 rounded-3xl p-8 shadow-2xl backdrop-blur transition-colors">
          <div className="w-16 h-16 rounded-full bg-rose-200 dark:bg-rose-600/30 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4">
            <UserX className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-rose-900 dark:text-white mb-2">Session Ended</h2>
          <p className="text-rose-700 dark:text-rose-200 text-sm mb-6">{kickedReason}</p>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  // If not joined yet, show Join Form
  if (!roomCode || !studentInfo.name) {
    const handleJoin = (e) => {
      e.preventDefault();
      if (!inputCode.trim() || !studentName.trim()) return;
      setIsSubmittingJoin(true);
      joinAsStudent(inputCode.trim().toUpperCase(), studentName.trim(), studentId.trim());
      setTimeout(() => setIsSubmittingJoin(false), 2000);
    };

    return (
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-colors">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-600/30">
              <Sparkles className="w-8 h-8" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Join Live Quiz</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Enter Game PIN & your details to compete</p>
          </div>

          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Game PIN
              </label>
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value.toUpperCase())}
                placeholder="e.g. K9X2P4"
                maxLength={6}
                required
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border-2 border-purple-500/40 focus:border-purple-500 text-amber-600 dark:text-amber-400 font-mono text-center text-2xl font-black tracking-widest focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Nickname / Full Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Alex Turing"
                maxLength={24}
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white font-semibold text-base focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Student ID (Optional)
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="e.g. CS-2024-042"
                maxLength={20}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white font-semibold text-base focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmittingJoin || !inputCode.trim() || !studentName.trim()}
              className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-black text-lg shadow-xl shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {isSubmittingJoin ? 'Connecting...' : "I'm Ready! Enter Game"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 1. LOBBY PHASE
  if (roomState === 'LOBBY') {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-2xl backdrop-blur-xl transition-colors">
          {/* Animated Pulsing Ring */}
          <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-600/40">
              <span className="text-3xl font-black text-white">
                {studentInfo.name.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-1">
            You're in, {studentInfo.name}!
          </h2>
          <p className="text-purple-600 dark:text-purple-300 font-semibold text-sm mb-6 animate-pulse">
            Waiting for the host to start the quiz...
          </p>

          <div className="bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-4 border border-slate-200 dark:border-slate-700 text-left space-y-2">
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Game PIN:</span>
              <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">{roomCode}</span>
            </div>
            {studentInfo.id && (
              <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Student ID:</span>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-200">{studentInfo.id}</span>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-400 dark:text-slate-500 mt-6">
            Get ready! Default question timer is 1 minute.
          </p>
        </div>
      </div>
    );
  }

  // 2. QUESTION RESULT PHASE
  if (roomState === 'QUESTION_RESULT') {
    const isCorrect = studentResult?.isCorrect;
    const isTimedOut = studentResult?.resultStatus === 'TIMED_OUT';

    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="space-y-6">
          
          {/* Feedback Banner */}
          <div
            className={`rounded-3xl p-8 text-center shadow-2xl border-2 transition-all ${
              isCorrect
                ? 'bg-emerald-600 text-white border-emerald-400 shadow-emerald-900/30'
                : isTimedOut
                ? 'bg-amber-600 text-white border-amber-400 shadow-amber-900/30'
                : 'bg-rose-600 text-white border-rose-400 shadow-rose-900/30'
            }`}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-black/20 shadow-inner">
              {isCorrect ? (
                <CheckCircle2 className="w-12 h-12 text-white animate-bounce-short" />
              ) : isTimedOut ? (
                <Clock className="w-12 h-12 text-white" />
              ) : (
                <XCircle className="w-12 h-12 text-white" />
              )}
            </div>

            <h2 className="text-3xl font-black tracking-tight mb-2">
              {isCorrect ? 'Correct!' : isTimedOut ? "Time's Up!" : 'Incorrect!'}
            </h2>

            {isCorrect && studentResult?.pointsEarned ? (
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 font-black text-xl text-white font-mono shadow">
                +{studentResult.pointsEarned} pts
              </div>
            ) : (
              <div className="text-sm font-semibold opacity-90">
                {isTimedOut ? 'Did not submit in time' : 'Better luck on the next one'}
              </div>
            )}
          </div>

          {/* Player Score & Rank Card */}
          <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex items-center justify-between shadow-xl transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Total Score</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                  {studentInfo.score} <span className="text-xs text-slate-500 font-normal">pts</span>
                </div>
              </div>
            </div>

            {studentInfo.streak > 1 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-600/40 text-amber-700 dark:text-amber-400 font-black text-sm">
                <Flame className="w-4 h-4 fill-amber-500" />
                <span>{studentInfo.streak} Streak</span>
              </div>
            )}
          </div>

          {/* Explanation if available */}
          {studentResult?.explanation && (
            <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 text-left transition-colors">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                Answer Explanation
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {studentResult.explanation}
              </p>
            </div>
          )}

          <p className="text-center text-xs text-slate-500 dark:text-slate-400">
            Waiting for the host to proceed to next question...
          </p>

        </div>
      </div>
    );
  }

  // 3. FINISHED PHASE
  if (roomState === 'FINISHED') {
    return (
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 shadow-2xl transition-colors">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-500/30">
            <Trophy className="w-10 h-10" />
          </div>

          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-1">Quiz Completed!</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Great effort, {studentInfo.name}!</p>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 mb-6 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                Final Score
              </span>
              <span className="text-4xl font-mono font-black text-purple-600 dark:text-amber-400">
                {studentInfo.score} <span className="text-base text-slate-500 font-normal">pts</span>
              </span>
            </div>
            {studentResult?.rank && (
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block">
                  Your Room Rank
                </span>
                <span className="text-2xl font-black text-purple-600 dark:text-purple-300">
                  #{studentResult.rank}
                </span>
              </div>
            )}
          </div>

          <p className="text-xs text-slate-400">
            Check the host screen for the podium celebration!
          </p>
        </div>
      </div>
    );
  }

  // 4. QUESTION ACTIVE PHASE
  const progressPercent = Math.max(0, Math.min(100, (remainingTime / (totalTime || 60)) * 100));

  return (
    <div className="max-w-2xl mx-auto px-4 py-4 sm:py-6 flex flex-col min-h-[calc(100vh-80px)] justify-between">
      
      {/* Top Bar: Question Index & Synchronized Timer */}
      <div>
        <div className="flex items-center justify-between bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl px-4 py-3 mb-3 backdrop-blur shadow transition-colors">
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-bold text-xs uppercase tracking-wider border border-purple-200 dark:border-purple-700/50">
            Question {currentQuestion ? currentQuestion.questionIndex + 1 : 1} of {currentQuestion?.totalQuestions || 10}
          </span>

          {/* Synchronized Server Timer Badge */}
          <div className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-xl border transition-colors ${
            remainingTime <= 10 
              ? 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-600 text-rose-700 dark:text-rose-300 animate-pulse'
              : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
          }`}>
            <Clock className={`w-4 h-4 ${remainingTime <= 10 ? 'text-rose-500' : 'text-purple-600 dark:text-purple-400'}`} />
            <span className="text-xl font-mono font-black">{remainingTime}s</span>
          </div>
        </div>

        {/* Server-Authoritative Timer Progress Bar */}
        <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden mb-4 border border-slate-300 dark:border-slate-700/60 shadow-inner">
          <div
            className={`h-full transition-all duration-1000 ease-linear rounded-full ${
              remainingTime <= 10
                ? 'bg-gradient-to-r from-rose-500 to-amber-500'
                : 'bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Question Text & C++ Code Viewer on Student Screen */}
        {currentQuestion && (
          <div className="bg-white dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 rounded-3xl p-5 sm:p-6 mb-4 shadow-xl transition-colors">
            <h3 className="font-black text-slate-900 dark:text-white text-lg sm:text-xl leading-snug tracking-tight">
              {currentQuestion.questionText}
            </h3>

            {/* C++ Code Snippet Box (Visible to Student with Dark & Light Mode) */}
            {currentQuestion.code && (
              <div className="mt-4 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 shadow-inner text-left">
                <div className="bg-slate-200/90 dark:bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <Code className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold">
                      {currentQuestion.language === 'c' ? 'C Code Snippet' : currentQuestion.language === 'cpp' ? 'C++ Code Snippet' : 'Code Snippet (C/C++)'}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono font-bold">
                    {currentQuestion.language === 'c' ? 'C17' : currentQuestion.language === 'cpp' ? 'C++20' : 'C / C++'}
                  </span>
                </div>
                <pre className="p-3.5 sm:p-5 text-xs sm:text-sm font-mono text-indigo-950 dark:text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed bg-white/60 dark:bg-transparent max-h-40 sm:max-h-60">
                  <code>{currentQuestion.code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Answer Locked Overlay / Indicator */}
      {myAnswer !== null ? (
        <div className="my-auto bg-white dark:bg-slate-800/95 border-2 border-purple-500/60 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur transition-all">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-purple-100 dark:bg-purple-600/30 text-purple-600 dark:text-purple-300 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce-short" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-1">Answer Locked In!</h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium mb-4">
            You picked option <strong className="text-purple-600 dark:text-purple-400 text-sm sm:text-base">{OPTION_LABELS[myAnswer.selectedOptionIndex]} ({OPTION_SYMBOLS[myAnswer.selectedOptionIndex]})</strong>
          </p>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-purple-700 dark:text-purple-300 text-xs font-bold animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            <span>Waiting for all submissions & timer...</span>
          </div>
        </div>
      ) : (
        /* 4 Highly Polished Kahoot Option Touch Targets (A, B, C, D) */
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 my-2">
          {OPTION_LABELS.map((label, idx) => (
            <button
              key={idx}
              onClick={() => submitMyAnswer(idx)}
              className="group relative rounded-2xl p-3.5 sm:p-5 flex items-center space-x-3.5 sm:space-x-4 shadow-xl border-2 border-white/20 hover:border-white/60 focus:border-white focus:outline-none transition-all transform active:scale-[0.98] hover:scale-[1.01] overflow-hidden text-left"
              style={{ backgroundColor: OPTION_COLORS[idx] }}
            >
              {/* Option Icon Symbol Circle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/25 flex items-center justify-center text-white text-xl sm:text-2xl font-black flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                {OPTION_SYMBOLS[idx]}
              </div>

              {/* Option Label and Text */}
              <div className="flex-1 min-w-0">
                <div className="text-white/80 text-[10px] sm:text-[11px] font-black uppercase tracking-wider mb-0.5">
                  Option {label}
                </div>
                <div className="text-white font-black text-sm sm:text-lg leading-snug line-clamp-2">
                  {currentQuestion?.options ? currentQuestion.options[idx] : `Option ${label}`}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Bottom Player Info Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur rounded-2xl border border-slate-200 dark:border-slate-700/60 mt-2 text-xs">
        <span className="text-slate-600 dark:text-slate-400 font-medium">
          Player: <strong className="text-slate-900 dark:text-white font-bold">{studentInfo.name}</strong>
        </span>
        <span className="text-slate-600 dark:text-slate-400 font-medium">
          Score: <strong className="font-mono text-purple-600 dark:text-purple-400 font-black text-sm">{studentInfo.score}</strong> pts
        </span>
      </div>

    </div>
  );
};
