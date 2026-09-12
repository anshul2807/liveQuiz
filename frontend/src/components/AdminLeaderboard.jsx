import React, { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import confetti from 'canvas-confetti';
import { Trophy, Medal, Award, RotateCcw, Sparkles } from 'lucide-react';

export const AdminLeaderboard = ({ onHostNewQuiz }) => {
  const { leaderboard, quizTitle, resetQuizState } = useQuiz();

  useEffect(() => {
    // Trigger celebration confetti
    const duration = 3.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e21b3c', '#1368ce', '#d89e00', '#26890c', '#8b5cf6'],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e21b3c', '#1368ce', '#d89e00', '#26890c', '#ec4899'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const first = leaderboard[0];
  const second = leaderboard[1];
  const third = leaderboard[2];
  const remaining = leaderboard.slice(3);

  const handleRestart = () => {
    resetQuizState();
    if (onHostNewQuiz) onHostNewQuiz();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 text-sm font-bold mb-3">
          <Sparkles className="w-4 h-4" />
          Quiz Completed!
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Championship Podium
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 text-base">
          {quizTitle || 'Final Standings and Hall of Fame'}
        </p>
      </div>

      {/* Podium Visualization */}
      <div className="flex items-end justify-center gap-3 sm:gap-6 mb-12 pt-10">
        
        {/* 2nd Place */}
        {second ? (
          <div className="flex flex-col items-center w-28 sm:w-40 order-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-200 dark:bg-slate-300 text-slate-900 flex flex-col items-center justify-center font-black shadow-xl mb-3 border-2 border-slate-300 dark:border-white">
              <Medal className="w-7 h-7 sm:w-9 sm:h-9 text-slate-700" />
              <span className="text-xs uppercase tracking-wider font-extrabold">2nd</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate max-w-full text-center">
              {second.studentName}
            </div>
            <div className="text-xs sm:text-sm font-mono text-purple-600 dark:text-slate-300 mb-2 font-bold">
              {second.score} pts
            </div>
            <div className="w-full h-32 sm:h-44 bg-gradient-to-t from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700 rounded-t-2xl border-t-4 border-slate-400 dark:border-slate-300 flex items-center justify-center text-3xl font-black text-slate-600 dark:text-slate-400 shadow-xl">
              2
            </div>
          </div>
        ) : null}

        {/* 1st Place (Center, Tallest) */}
        {first ? (
          <div className="flex flex-col items-center w-32 sm:w-48 order-2">
            <div className="relative mb-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 text-slate-950 flex flex-col items-center justify-center font-black shadow-2xl shadow-amber-500/40 border-4 border-yellow-100 animate-bounce-short">
                <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-slate-950" />
                <span className="text-xs uppercase tracking-widest font-black -mt-1">1st</span>
              </div>
            </div>
            <div className="font-black text-base sm:text-lg text-amber-600 dark:text-amber-300 truncate max-w-full text-center">
              {first.studentName}
            </div>
            <div className="text-sm sm:text-base font-mono text-purple-700 dark:text-amber-200 mb-2 font-bold">
              {first.score} pts
            </div>
            <div className="w-full h-44 sm:h-60 bg-gradient-to-t from-amber-200 to-amber-400 dark:from-amber-950/80 dark:to-amber-600/60 rounded-t-3xl border-t-4 border-amber-500 dark:border-amber-400 flex items-center justify-center text-4xl sm:text-5xl font-black text-amber-800 dark:text-amber-300 shadow-2xl">
              1
            </div>
          </div>
        ) : null}

        {/* 3rd Place */}
        {third ? (
          <div className="flex flex-col items-center w-28 sm:w-40 order-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-700 text-amber-100 flex flex-col items-center justify-center font-black shadow-xl mb-3 border-2 border-amber-600">
              <Award className="w-7 h-7 sm:w-9 sm:h-9 text-amber-200" />
              <span className="text-xs uppercase tracking-wider font-extrabold">3rd</span>
            </div>
            <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate max-w-full text-center">
              {third.studentName}
            </div>
            <div className="text-xs sm:text-sm font-mono text-purple-600 dark:text-slate-300 mb-2 font-bold">
              {third.score} pts
            </div>
            <div className="w-full h-24 sm:h-32 bg-gradient-to-t from-amber-100 to-amber-200 dark:from-slate-800 dark:to-amber-950/60 rounded-t-2xl border-t-4 border-amber-600 dark:border-amber-700 flex items-center justify-center text-2xl font-black text-amber-700 dark:text-amber-600 shadow-xl">
              3
            </div>
          </div>
        ) : null}

      </div>

      {/* Full Leaderboard Table */}
      {remaining.length > 0 && (
        <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 mb-8 shadow-xl transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Complete Rankings</h3>
          <div className="space-y-2">
            {remaining.map((p) => (
              <div
                key={p.socketId || p.rank}
                className="bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 flex items-center justify-between transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-xs flex items-center justify-center">
                    {p.rank}
                  </span>
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white text-sm">{p.studentName}</span>
                    {p.studentId && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-2 font-mono">({p.studentId})</span>
                    )}
                  </div>
                </div>
                <div className="font-mono font-black text-purple-600 dark:text-purple-400 text-sm">
                  {p.score} <span className="text-xs text-slate-500 dark:text-slate-400 font-normal">pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-center">
        <button
          onClick={handleRestart}
          className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-base shadow-xl shadow-purple-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          <span>Host Another Quiz</span>
        </button>
      </div>

    </div>
  );
};
