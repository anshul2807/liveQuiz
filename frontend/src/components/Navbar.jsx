import React from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { Zap, Users, PlusCircle, LogIn, LogOut, Sun, Moon, Lock, ShieldCheck } from 'lucide-react';

export const Navbar = ({ currentView, onNavigate }) => {
  const { isConnected, roomCode, role, isAdminAuthenticated, adminUser, logoutAdmin } = useQuiz();
  const { theme, toggleTheme, isDark } = useTheme();

  const handleHomeClick = () => {
    if (onNavigate) onNavigate('home');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={handleHomeClick}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white flex items-center">
              Live<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Quiz</span>
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 block -mt-1 font-medium">Interactive Arena</span>
          </div>
        </div>

        {/* Room badge if active */}
        {roomCode && (
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">PIN:</span>
            <span className="text-sm font-mono font-bold text-amber-600 dark:text-amber-400 tracking-widest">{roomCode}</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-medium">
              {role === 'admin' ? 'Host' : 'Player'}
            </span>
          </div>
        )}

        {/* Nav actions */}
        <nav className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700/80"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Join PIN - Accessible to everyone */}
          <button
            onClick={() => onNavigate('join')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
              currentView === 'join' 
                ? 'bg-purple-600 text-white' 
                : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Join Quiz</span>
          </button>

          {/* ADMIN ONLY NAVIGATION ITEMS */}
          {isAdminAuthenticated ? (
            <>
              <button
                onClick={() => onNavigate('admin')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'admin' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Host Console</span>
              </button>

              <button
                onClick={() => onNavigate('builder')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'builder' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Question Bank</span>
              </button>

              {/* Admin Profile & Logout */}
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <span className="hidden md:inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold border border-purple-300 dark:border-purple-800">
                  <ShieldCheck className="w-3 h-3" />
                  Admin
                </span>
                <button
                  onClick={logoutAdmin}
                  title="Log out from admin"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </>
          ) : (
            /* NON-ADMIN: Only show discrete Admin Login button */
            <button
              onClick={() => onNavigate('admin')}
              title="Admin Login (Hosts only)"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </button>
          )}

          {/* Connection status indicator */}
          <div 
            title={isConnected ? 'Connected to live server' : 'Disconnected / Connecting...'}
            className="flex items-center pl-2 border-l border-slate-200 dark:border-slate-800"
          >
            {isConnected ? (
              <span className="flex items-center space-x-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/40 px-2 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/40">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="hidden lg:inline">Online</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1.5 text-xs text-rose-600 dark:text-rose-400 font-medium bg-rose-50 dark:bg-rose-950/40 px-2 py-1 rounded-full border border-rose-200 dark:border-rose-800/40">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span className="hidden lg:inline">Offline</span>
              </span>
            )}
          </div>
        </nav>

      </div>
    </header>
  );
};
