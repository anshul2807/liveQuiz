import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import { 
  Clock, Plus, CheckCircle2, XCircle, ArrowRight, Trophy, Sparkles, 
  HelpCircle, Code, Square, AlertTriangle, X 
} from 'lucide-react';

const OPTION_COLORS = ['#e21b3c', '#1368ce', '#d89e00', '#26890c']; // Red, Blue, Yellow, Green
const OPTION_LABELS = ['A', 'B', 'C', 'D'];
const OPTION_SYMBOLS = ['▲', '◆', '●', '■'];

export const AdminLiveQuiz = () => {
  const {
    roomCode,
    roomState,
    currentQuestion,
    adminMeta,
    remainingTime,
    totalTime,
    submissionProgress,
    questionStats,
    participants,
    nextQuestion,
    extendTimer,
    concludeQuestion,
    finishQuizEarly,
  } = useQuiz();
  const { isDark } = useTheme();
  const [extendingTime, setExtendingTime] = useState(null);
  const [showEndModal, setShowEndModal] = useState(false);

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px] text-slate-400">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-lg font-medium">Synchronizing question with server...</p>
      </div>
    );
  }

  const isResultPhase = roomState === 'QUESTION_RESULT';
  const progressPercent = Math.max(0, Math.min(100, (remainingTime / (totalTime || 60)) * 100));
  const answeredPercent = submissionProgress.total > 0
    ? Math.round((submissionProgress.submitted / submissionProgress.total) * 100)
    : 0;

  // Prepare chart data for Recharts
  const chartData = questionStats ? [
    { name: 'A', label: 'Option A', count: questionStats.counts[0] || 0, color: OPTION_COLORS[0] },
    { name: 'B', label: 'Option B', count: questionStats.counts[1] || 0, color: OPTION_COLORS[1] },
    { name: 'C', label: 'Option C', count: questionStats.counts[2] || 0, color: OPTION_COLORS[2] },
    { name: 'D', label: 'Option D', count: questionStats.counts[3] || 0, color: OPTION_COLORS[3] },
  ] : [];

  const correctIndex = isResultPhase && questionStats 
    ? questionStats.correctIndex 
    : adminMeta?.correctOptionIndex;

  const topStudents = [...participants]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  const handleExtend = (seconds) => {
    setExtendingTime(seconds);
    extendTimer(seconds);
    setTimeout(() => setExtendingTime(null), 1000);
  };

  const handleConfirmEndQuiz = () => {
    setShowEndModal(false);
    finishQuizEarly(roomCode);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 sm:px-6 sm:py-4 mb-6 backdrop-blur shadow-lg transition-colors">
        <div className="flex items-center justify-between sm:justify-start space-x-3">
          <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/80 text-purple-700 dark:text-purple-300 font-bold text-xs uppercase tracking-wider border border-purple-300 dark:border-purple-600/40">
            Question {currentQuestion.questionIndex + 1} of {currentQuestion.totalQuestions}
          </span>
          <span className="text-slate-300 dark:text-slate-600 text-sm hidden sm:inline">|</span>
          <span className="text-slate-600 dark:text-slate-300 font-semibold text-xs sm:text-sm">PIN: <strong className="font-mono text-purple-600 dark:text-purple-400">{roomCode}</strong></span>
        </div>

        {/* Real-Time Answer Counter + Synchronized Timer + TIMER EXTEND BUTTONS + CONCLUDE + END QUIZ */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2.5 sm:gap-3">
          
          {/* Submissions counter */}
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Submissions</div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                {submissionProgress.submitted} <span className="text-slate-400 dark:text-slate-500 font-normal text-xs">/ {submissionProgress.total}</span>
              </div>
            </div>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-purple-600 dark:text-purple-400">
              {answeredPercent}%
            </div>
          </div>

          {/* Synchronized Server Timer Badge */}
          <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl border transition-colors ${
            remainingTime <= 5 && !isResultPhase
              ? 'bg-rose-100 dark:bg-rose-950/80 border-rose-300 dark:border-rose-600 text-rose-700 dark:text-rose-300 animate-pulse'
              : 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
          }`}>
            <Clock className={`w-3.5 h-3.5 ${remainingTime <= 5 && !isResultPhase ? 'text-rose-500' : 'text-purple-500 dark:text-purple-400'}`} />
            <span className="text-lg sm:text-xl font-mono font-black">{remainingTime}s</span>
          </div>

          {/* TIMER EXTEND BUTTONS (ADMIN FEATURE) */}
          {!isResultPhase && (
            <div className="flex items-center space-x-1 bg-purple-50 dark:bg-slate-900/90 p-1 rounded-xl border border-purple-200 dark:border-purple-800/60 shadow-xs">
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-purple-600 dark:text-purple-400 px-0.5 hidden xs:inline">
                +Timer:
              </span>
              {[10, 20].map((sec) => (
                <button
                  key={sec}
                  onClick={() => handleExtend(sec)}
                  disabled={extendingTime !== null}
                  title={`Add +${sec}s to countdown timer`}
                  className="px-1.5 py-1 rounded-lg bg-white dark:bg-purple-950/80 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-purple-700 dark:text-purple-300 text-xs font-black border border-purple-200 dark:border-purple-700/60 transition-all flex items-center gap-0.5"
                >
                  <Plus className="w-2.5 h-2.5" />
                  <span>{sec}s</span>
                </button>
              ))}
            </div>
          )}

          {/* CONCLUDE QUESTION BUTTON (ADMIN FEATURE) */}
          {!isResultPhase && (
            <button
              onClick={() => concludeQuestion(roomCode)}
              title="Conclude active question immediately and reveal answers"
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
            >
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Conclude</span>
            </button>
          )}

          {/* END QUIZ BUTTON (ADMIN FEATURE) */}
          <button
            onClick={() => setShowEndModal(true)}
            title="End entire quiz early and reveal final podium"
            className="px-2.5 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/80 text-rose-600 dark:text-rose-300 border border-rose-200 dark:border-rose-800/80 text-xs font-extrabold flex items-center gap-1 transition-all hover:scale-105 active:scale-95"
          >
            <Square className="w-3 h-3 fill-rose-500 text-rose-500" />
            <span className="hidden sm:inline">End Quiz</span>
          </button>

        </div>
      </div>

      {/* Authoritative Timer Bar */}
      {!isResultPhase && (
        <div className="w-full bg-slate-200 dark:bg-slate-800/80 h-3 rounded-full overflow-hidden mb-6 border border-slate-300 dark:border-slate-700/60 shadow-inner">
          <div
            className={`h-full transition-all duration-1000 ease-linear rounded-full ${
              remainingTime <= 5
                ? 'bg-gradient-to-r from-rose-500 to-amber-500'
                : 'bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      {/* Question Card & C++ Code Snippet Box (DARK/LIGHT ADAPTED) */}
      <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 mb-6 shadow-xl transition-colors">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
          {currentQuestion.questionText}
        </h2>

        {/* Code Snippet Box with Dark & Light Mode Styling */}
        {currentQuestion.code && (
          <div className="mt-4 mb-2 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-950 shadow-inner">
            <div className="bg-slate-200/80 dark:bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-300 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <div className="flex items-center space-x-2">
                <Code className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                <span className="font-semibold">
                  {currentQuestion.language === 'c' ? 'C Source Code' : currentQuestion.language === 'cpp' ? 'C++ Source Code' : 'Source Code (C/C++)'}
                </span>
              </div>
              <span className="text-slate-500">
                {currentQuestion.language === 'c' ? 'C17' : currentQuestion.language === 'cpp' ? 'C++20' : 'C / C++'}
              </span>
            </div>
            <pre className="p-4 sm:p-5 text-sm sm:text-base font-mono text-indigo-950 dark:text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed bg-white/60 dark:bg-transparent">
              <code>{currentQuestion.code}</code>
            </pre>
          </div>
        )}
      </div>

      {/* RESULT PHASE VIEW: Recharts Live Response Aggregation & Explanation */}
      {isResultPhase && questionStats ? (
        <div className="space-y-6 mb-8">
          
          {/* Grid: Response Distribution Chart + Top 5 Leaderboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Recharts Bar Chart (7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-xl flex flex-col transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    Live Response Distribution
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Total answered: {questionStats.totalAnswered} students</p>
                </div>
              </div>

              {/* Recharts Container */}
              <div className="h-64 w-full mt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis dataKey="name" stroke={isDark ? '#94a3b8' : '#64748b'} tick={{ fill: isDark ? '#e2e8f0' : '#334155', fontWeight: 'bold' }} />
                    <YAxis stroke={isDark ? '#94a3b8' : '#64748b'} allowDecimals={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? '#0f172a' : '#ffffff',
                        borderColor: isDark ? '#334155' : '#cbd5e1',
                        borderRadius: '12px',
                        color: isDark ? '#f8fafc' : '#0f172a',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                      }}
                      formatter={(val) => [`${val} responses`, 'Votes']}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={OPTION_COLORS[index]}
                          stroke={index === correctIndex ? '#ffffff' : 'none'}
                          strokeWidth={index === correctIndex ? 3 : 0}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Options breakdown below chart */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/60">
                {chartData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-xl text-center border transition-colors ${
                      idx === correctIndex
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold'
                        : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center justify-center gap-1">
                      <span>{item.name}</span>
                      {idx === correctIndex && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />}
                    </div>
                    <div className="text-lg font-black">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Top 5 Leaderboard (5 cols) */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-xl flex flex-col transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Current Standings</h3>
              </div>

              <div className="space-y-2.5 flex-1">
                {topStudents.length === 0 ? (
                  <p className="text-sm text-slate-400 text-center py-8">No responses scored yet</p>
                ) : (
                  topStudents.map((p, idx) => (
                    <div
                      key={p.socketId || idx}
                      className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center space-x-3 truncate">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black ${
                          idx === 0 ? 'bg-amber-400 text-slate-900' :
                          idx === 1 ? 'bg-slate-300 text-slate-900' :
                          idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400'
                        }`}>
                          {idx + 1}
                        </span>
                        <div className="truncate">
                          <div className="font-bold text-sm text-slate-900 dark:text-white truncate">{p.studentName}</div>
                          {p.streak > 1 && (
                            <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold">🔥 {p.streak} streak</div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-black text-purple-600 dark:text-purple-400">{p.score}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">pts</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>

          {/* Explanation Callout Card */}
          {questionStats.explanation && (
            <div className="bg-gradient-to-r from-indigo-50 dark:from-indigo-950/80 via-white dark:via-slate-900 to-purple-50 dark:to-purple-950/80 border-2 border-indigo-200 dark:border-indigo-500/50 rounded-3xl p-6 shadow-xl transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-indigo-800 dark:text-indigo-200 uppercase tracking-wider mb-1">
                    Concept & Explanation
                  </h4>
                  <p className="text-slate-800 dark:text-slate-200 text-base leading-relaxed">
                    {questionStats.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Advance Navigation & End Quiz Triggers */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={() => setShowEndModal(true)}
              className="px-4 py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900/80 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all hover:scale-102 active:scale-98"
            >
              <Square className="w-4 h-4 fill-rose-600 text-rose-600 dark:fill-rose-400 dark:text-rose-400" />
              <span>End Quiz Early</span>
            </button>

            <button
              onClick={() => nextQuestion(roomCode)}
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-sm sm:text-lg shadow-2xl shadow-purple-600/40 flex items-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all ml-auto"
            >
              <span>
                {currentQuestion.questionIndex + 1 >= currentQuestion.totalQuestions
                  ? 'View Final Podium & Leaderboard'
                  : 'Next Question'}
              </span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      ) : null}

      {/* 4 Kahoot High-Contrast Option Blocks (Clickable by Admin during Active phase to immediately conclude) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {currentQuestion.options.map((optionText, idx) => {
          const isCorrect = isResultPhase && idx === correctIndex;

          return (
            <div
              key={idx}
              onClick={() => {
                if (!isResultPhase) {
                  concludeQuestion(roomCode);
                }
              }}
              title={!isResultPhase ? "Click to conclude active question immediately" : undefined}
              className={`relative rounded-2xl p-4 sm:p-6 flex items-center space-x-3.5 sm:space-x-4 shadow-xl border-2 transition-all ${
                isResultPhase
                  ? isCorrect
                    ? 'border-emerald-400 ring-4 ring-emerald-500/40 brightness-110'
                    : 'border-transparent opacity-40 grayscale-[40%]'
                  : 'cursor-pointer border-white/20 hover:border-white hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] group'
              }`}
              style={{ backgroundColor: OPTION_COLORS[idx] }}
            >
              {/* Option Icon Symbol */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/25 flex items-center justify-center text-white text-xl sm:text-2xl font-black flex-shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                {OPTION_SYMBOLS[idx]}
              </div>

              {/* Option Text & Label */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <div className="text-white/80 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    Option {OPTION_LABELS[idx]}
                  </div>
                  {!isResultPhase && (
                    <span className="text-[10px] bg-black/30 text-white/90 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 border border-white/20 shadow-xs">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      <span className="hidden xs:inline">Conclude</span>
                    </span>
                  )}
                </div>
                <div className="text-white font-bold text-base sm:text-xl leading-snug">
                  {optionText}
                </div>
              </div>

              {/* Correctness Checkmark on Result Phase */}
              {isResultPhase && (
                <div className="flex-shrink-0">
                  {isCorrect ? (
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 text-rose-300 flex items-center justify-center">
                      <XCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Confirmation Modal for Ending Quiz */}
      {showEndModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 max-w-md w-full shadow-2xl animate-fadeIn">
            <div className="w-14 h-14 rounded-2xl bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto mb-4 shadow-inner">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-slate-900 dark:text-white text-center mb-2">
              End Live Quiz Session?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 text-center mb-6 leading-relaxed">
              Are you sure you want to end this live quiz now? All remaining questions will be closed and the final podium standings will be calculated and displayed immediately.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowEndModal(false)}
                className="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                Keep Playing
              </button>
              <button
                onClick={handleConfirmEndQuiz}
                className="py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-lg shadow-rose-600/30 transition-all hover:scale-102 active:scale-98"
              >
                Yes, End Quiz
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
