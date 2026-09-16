import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { Zap, Smartphone, Play, ShieldCheck, BarChart3, Code, Users, ArrowRight, Lock, Code2, Sparkles, Cpu, BookOpen, Terminal } from 'lucide-react';

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
          Real-time synchronized countdowns, live instant scoring, and interactive C & C++ coding challenges across OOPs and DSA.
        </p>
      </div>

      {/* ACTION CARDS: 1. LIVE QUIZ | 2. PRACTICE MCQS | 3. CODING LAB | 4. C/C++ IDE */}
      <div className="max-w-7xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* CARD 1: LIVE GAME PIN ARENA */}
        <div className="bg-white dark:bg-slate-800/90 border-2 border-purple-400 dark:border-purple-500/50 rounded-3xl p-5 shadow-xl backdrop-blur transition-colors flex flex-col justify-between">
          <div>
            <div className="text-center mb-4">
              <div className="w-11 h-11 rounded-2xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                Live Kahoot Arena
              </span>
              <h2 className="text-base font-black text-slate-900 dark:text-white mt-1.5">Enter Game PIN</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                Join your instructor's arena with live sync & podium.
              </p>
            </div>

            <form onSubmit={handleJoinByPin} className="space-y-3">
              <input
                type="text"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value.toUpperCase())}
                placeholder="6-DIGIT PIN"
                maxLength={6}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 focus:border-purple-500 text-amber-600 dark:text-amber-400 font-mono text-center text-base font-black tracking-widest focus:outline-none transition-all placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!pinInput.trim()}
                className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Enter Arena</span>
              </button>
            </form>
          </div>
        </div>

        {/* CARD 2: PRACTICE MCQS CENTER */}
        <div className="bg-white dark:bg-slate-800/90 border-2 border-blue-400 dark:border-blue-500/50 rounded-3xl p-5 shadow-xl backdrop-blur transition-colors flex flex-col justify-between">
          <div>
            <div className="text-center mb-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-2 shadow-inner">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                2 Subjects • 270 MCQs
              </span>
              <h2 className="text-base font-black text-slate-900 dark:text-white mt-1.5">Practice MCQs</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                270 Questions across OOPs in CPP & DSA with answers & mock tests.
              </p>
            </div>

            <div className="space-y-1 mb-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>OOPs in CPP</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">135 Qs (45/Unit)</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>DSA</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">135 Qs (45/Unit)</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span>Programming</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">C & C++ Options</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('mcqs')}
            className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Practice 270 MCQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* CARD 3: C/C++ GUIDED CODING LAB */}
        <div className="bg-white dark:bg-slate-800/90 border-2 border-emerald-400 dark:border-emerald-500/50 rounded-3xl p-5 shadow-xl backdrop-blur transition-colors flex flex-col justify-between">
          <div>
            <div className="text-center mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                36 Curriculum Labs
              </span>
              <h2 className="text-base font-black text-slate-900 dark:text-white mt-1.5">Coding Lab</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                36 Problems (6 per unit) with dual C & C++ compilers and test runner.
              </p>
            </div>

            <div className="space-y-1 mb-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>OOPs in CPP</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">18 Problems</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>DSA</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">18 Problems</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span>Compiler Engine</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">clang & clang++</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('lab')}
            className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Open 36 Labs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* CARD 4: STANDALONE C / C++ WEB IDE */}
        <div className="bg-white dark:bg-slate-800/90 border-2 border-amber-400 dark:border-amber-500/50 rounded-3xl p-5 shadow-xl backdrop-blur transition-colors flex flex-col justify-between">
          <div>
            <div className="text-center mb-4">
              <div className="w-11 h-11 rounded-2xl bg-amber-100 dark:bg-amber-600/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                C & C++ Playground
              </span>
              <h2 className="text-base font-black text-slate-900 dark:text-white mt-1.5">C & C++ Web IDE</h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">
                Custom stdin, virtual files, and file stream outputs.
              </p>
            </div>

            <div className="space-y-1 mb-4 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>Languages</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">C17 & C++17</span>
              </div>
              <div className="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/60">
                <span>File Streams</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">fstream / fopen</span>
              </div>
              <div className="flex items-center justify-between py-0.5">
                <span>Input / Output</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">Custom Stdin</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('ide')}
            className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-extrabold text-xs shadow-lg shadow-amber-500/25 flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Launch Web IDE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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

          <div 
            onClick={() => onNavigate('lab')}
            className="cursor-pointer bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 hover:border-purple-400 dark:hover:border-purple-500 rounded-2xl p-6 shadow-sm transition-all hover:scale-[1.02] group"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
              <span>C & C++ Code Challenges</span>
              <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              36 production labs covering OOPs, classes, pointers, streams, sorting, linked lists, and stacks.
            </p>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
              <span>Open 36 Challenges & 270 MCQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
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
