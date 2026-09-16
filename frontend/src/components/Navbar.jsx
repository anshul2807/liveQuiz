import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { 
  Zap, Users, PlusCircle, LogIn, LogOut, Sun, Moon, Lock, ShieldCheck, 
  Code2, BookOpen, Terminal, Menu, X 
} from 'lucide-react';

export const Navbar = ({ currentView, onNavigate }) => {
  const { isConnected, roomCode, role, isAdminAuthenticated, adminUser, logoutAdmin } = useQuiz();
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHomeClick = () => {
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate('home');
  };

  const handleNav = (view) => {
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate(view);
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

        {/* Desktop Nav actions */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-3">
          
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
            onClick={() => handleNav('join')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
              currentView === 'join' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Join Quiz</span>
          </button>

          {/* Practice MCQs - Accessible to everyone */}
          <button
            onClick={() => handleNav('mcqs')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
              currentView === 'mcqs' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Practice MCQs</span>
          </button>

          {/* Coding Lab - Accessible to everyone */}
          <button
            onClick={() => handleNav('lab')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
              currentView === 'lab' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Coding Lab</span>
          </button>

          {/* C/C++ Web IDE - Accessible to everyone */}
          <button
            onClick={() => handleNav('ide')}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
              currentView === 'ide' 
                ? 'bg-purple-600 text-white shadow-xs' 
                : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>C/C++ IDE</span>
          </button>

          {/* ADMIN ONLY NAVIGATION ITEMS */}
          {isAdminAuthenticated ? (
            <>
              <button
                onClick={() => handleNav('admin')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'admin' 
                    ? 'bg-purple-600 text-white shadow-xs' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Host Console</span>
              </button>

              <button
                onClick={() => handleNav('builder')}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center space-x-1.5 transition-colors ${
                  currentView === 'builder' 
                    ? 'bg-purple-600 text-white shadow-xs' 
                    : 'text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                <span>Question Bank</span>
              </button>

              {/* Admin Profile & Logout */}
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-200 dark:border-slate-800">
                <span className="hidden lg:inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-bold border border-purple-300 dark:border-purple-800">
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
              onClick={() => handleNav('admin')}
              title="Admin Login (Hosts only)"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center space-x-1 text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin</span>
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
                <span className="hidden xl:inline">Online</span>
              </span>
            ) : (
              <span className="flex items-center space-x-1.5 text-xs text-rose-600 dark:text-rose-400 font-medium bg-rose-50 dark:bg-rose-950/40 px-2 py-1 rounded-full border border-rose-200 dark:border-rose-800/40">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span className="hidden xl:inline">Offline</span>
              </span>
            )}
          </div>
        </nav>

        {/* Mobile Top Controls (Theme Toggle + Status Dot + Hamburger Button) */}
        <div className="flex md:hidden items-center space-x-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700/80"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Connection Status Dot */}
          <div 
            title={isConnected ? 'Connected' : 'Offline'}
            className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-rose-500'}`}
          />

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Open mobile menu"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-2 shadow-2xl transition-all animate-fadeIn">
          {/* Active Room Chip if any */}
          {roomCode && (
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 mb-2">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Live Room PIN:</span>
              <span className="font-mono font-black text-amber-600 dark:text-amber-400 text-sm tracking-wider">{roomCode}</span>
            </div>
          )}

          <button
            onClick={() => handleNav('join')}
            className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
              currentView === 'join'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4 text-purple-500" />
            <span>Join Live Quiz</span>
          </button>

          <button
            onClick={() => handleNav('mcqs')}
            className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
              currentView === 'mcqs'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-blue-500" />
            <span>Practice 270 MCQs</span>
          </button>

          <button
            onClick={() => handleNav('lab')}
            className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
              currentView === 'lab'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span>Coding Lab (36 Problems)</span>
          </button>

          <button
            onClick={() => handleNav('ide')}
            className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
              currentView === 'ide'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Terminal className="w-4 h-4 text-amber-500" />
            <span>C/C++ Web IDE</span>
          </button>

          <div className="pt-2 mt-2 border-t border-slate-200 dark:border-slate-800">
            {isAdminAuthenticated ? (
              <div className="space-y-1.5">
                <button
                  onClick={() => handleNav('admin')}
                  className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
                    currentView === 'admin'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Host Console (Live Quiz)</span>
                </button>

                <button
                  onClick={() => handleNav('builder')}
                  className={`w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 transition-colors ${
                    currentView === 'builder'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <PlusCircle className="w-4 h-4 text-indigo-400" />
                  <span>Question Bank</span>
                </button>

                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs mt-2">
                  <span className="flex items-center gap-1.5 font-bold text-purple-600 dark:text-purple-400">
                    <ShieldCheck className="w-4 h-4" />
                    Admin: {adminUser?.username || 'Host'}
                  </span>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logoutAdmin();
                    }}
                    className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1 hover:underline"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => handleNav('admin')}
                className="w-full px-3 py-2.5 rounded-xl text-sm font-bold flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Lock className="w-4 h-4 text-slate-400" />
                <span>Admin Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
