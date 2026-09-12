import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { Zap, Smartphone, Play, ShieldCheck, BarChart3, Code, Users, ArrowRight, Lock } from 'lucide-react';

export const HomePage = ({ onNavigate }) => {
  const { isAdminAuthenticated } = useQuiz();
  const [pinInput, setPinInput] = useState('');

  const handleJoinByPin = (e) => {
    e.preventDefault();
    if (pinInput.trim()) {
      onNavigate('join', pinInput.trim().toUpperCase());
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16">
      
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 text-xs sm:text-sm font-bold mb-6 shadow-xs">
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          LiveQuiz • Real-Time Interactive Arena
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500">
            LiveQuiz
          </span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Real-time synchronized countdowns, live instant scoring, and interactive C++ coding challenges.
        </p>
      </div>

      {/* STUDENT JOIN CARD (PRIMARY FOCUS FOR REGULAR USERS) */}
      <div className="max-w-md mx-auto mb-16">
        <div className="bg-white dark:bg-slate-800/90 border-2 border-purple-400 dark:border-purple-500/50 rounded-3xl p-8 shadow-2xl backdrop-blur transition-colors">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-3 shadow-inner">
              <Smartphone className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Enter Game PIN</h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              Have a 6-digit room code from your host? Enter below to join!
            </p>
          </div>

          <form onSubmit={handleJoinByPin} className="space-y-4">
            <input
              type="text"
              value={pinInput}
              onChange={(e) => setPinInput(e.target.value.toUpperCase())}
              placeholder="ENTER 6-DIGIT PIN"
              maxLength={6}
              autoFocus
              className="w-full px-4 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 focus:border-purple-500 text-amber-600 dark:text-amber-400 font-mono text-center text-2xl font-black tracking-widest focus:outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
            />
            <button
              type="submit"
              disabled={!pinInput.trim()}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>Enter Arena</span>
            </button>
          </form>
        </div>
      </div>

      {/* ADMIN SHORTCUT (ONLY VISIBLE IF ADMIN IS LOGGED IN) */}
      {isAdminAuthenticated && (
        <div className="max-w-md mx-auto mb-16 p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Admin Session Active</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Manage rooms and question banks</div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('admin')}
            className="px-3.5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-purple-500 transition-colors"
          >
            <span>Host Console</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Feature Highlights Section */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-12">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
          Student Arena Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Anti-Cheat Timer</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Synchronized authoritative timer countdowns run on the server to ensure fair competition.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">Real-Time Scoring</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Faster correct answers earn speed multiplier bonus points with instant feedback.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 shadow-sm transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">C++ Code Challenges</h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Analyze output predictions, memory hazard pitfalls, pointer arithmetic, and OOP designs.
            </p>
          </div>

        </div>
      </div>

      {/* Discrete Admin Link at bottom */}
      <div className="mt-12 text-center">
        <button
          onClick={() => onNavigate('admin')}
          className="text-xs text-slate-400 hover:text-purple-600 dark:text-slate-500 dark:hover:text-purple-400 inline-flex items-center gap-1 transition-colors"
        >
          <Lock className="w-3 h-3" />
          <span>Instructors & Hosts: Access Admin Portal</span>
        </button>
      </div>

    </div>
  );
};
