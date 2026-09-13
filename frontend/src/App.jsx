import React, { useState, useEffect } from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { Navbar } from './components/Navbar.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AdminDashboard } from './pages/AdminDashboard.jsx';
import { StudentJoinPage } from './pages/StudentJoinPage.jsx';
import { QuizBuilderPage } from './pages/QuizBuilderPage.jsx';
import { CodingLabPage } from './pages/CodingLabPage.jsx';
import { MCQPracticePage } from './pages/MCQPracticePage.jsx';
import { IDEPage } from './pages/IDEPage.jsx';
import { AlertCircle, Clock } from 'lucide-react';

// Route parsing helpers supporting both root ("/") and GitHub Pages subpath ("/liveQuiz/")
const getNormalizedPath = (pathname) => {
  if (!pathname) return '/';
  return pathname.replace(/^\/liveQuiz(\/|$)/, '/');
};

const getViewFromPath = (pathname) => {
  const path = getNormalizedPath(pathname);
  if (path.startsWith('/join')) return 'join';
  if (path === '/admin') return 'admin';
  if (path === '/quiz-builder' || path === '/builder') return 'builder';
  if (path === '/coding-lab' || path === '/challenges' || path === '/labs' || path === '/lab') return 'lab';
  if (path === '/mcqs' || path === '/practice' || path === '/mcq') return 'mcqs';
  if (path === '/ide' || path === '/compiler') return 'ide';
  return 'home';
};

const getPinFromPath = (pathname) => {
  const path = getNormalizedPath(pathname);
  if (path.startsWith('/join/')) {
    return path.replace('/join/', '').trim().toUpperCase();
  }
  return '';
};

// Inner App with context access
const AppContent = () => {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window === 'undefined') return 'home';
    return getViewFromPath(window.location.pathname);
  });
  const [targetRoomCode, setTargetRoomCode] = useState(() => {
    if (typeof window === 'undefined') return '';
    return getPinFromPath(window.location.pathname);
  });

  const { errorMessage, infoMessage, isAdminAuthenticated } = useQuiz();

  // Synchronize view with URL pathname on load and popstate
  useEffect(() => {
    const handleUrlRouting = () => {
      const path = window.location.pathname;
      setCurrentView(getViewFromPath(path));
      const pin = getPinFromPath(path);
      if (pin) setTargetRoomCode(pin);
    };

    handleUrlRouting();
    window.addEventListener('popstate', handleUrlRouting);
    return () => window.removeEventListener('popstate', handleUrlRouting);
  }, []);

  const handleNavigate = (view, pin = '') => {
    setCurrentView(view);
    if (pin) setTargetRoomCode(pin);

    // Maintain GitHub Pages basePath if currently on /liveQuiz
    const hasLiveQuizPrefix = typeof window !== 'undefined' && window.location.pathname.startsWith('/liveQuiz');
    const basePrefix = hasLiveQuizPrefix ? '/liveQuiz' : '';

    // Update browser URL history
    let newPath = '/';
    if (view === 'admin') newPath = '/admin';
    else if (view === 'builder') newPath = '/quiz-builder';
    else if (view === 'lab') newPath = '/coding-lab';
    else if (view === 'mcqs') newPath = '/mcqs';
    else if (view === 'ide') newPath = '/ide';
    else if (view === 'join') newPath = pin ? `/join/${pin}` : '/join';

    window.history.pushState({}, '', `${basePrefix}${newPath}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Global Toast / Notification: Timer Extended Alert */}
      {infoMessage && (
        <div className="bg-purple-600 text-white text-sm font-bold px-4 py-2.5 flex items-center justify-center gap-2 shadow-lg sticky top-16 z-50 animate-bounce">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{infoMessage}</span>
        </div>
      )}

      {/* Global Error Banner */}
      {errorMessage && (
        <div className="bg-rose-600 text-white text-sm font-semibold px-4 py-2.5 flex items-center justify-center gap-2 shadow-lg sticky top-16 z-50">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* View Router */}
      <main className="flex-1">
        {currentView === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentView === 'admin' && <AdminDashboard onNavigate={handleNavigate} />}
        {currentView === 'join' && <StudentJoinPage initialRoomCode={targetRoomCode} />}
        {currentView === 'builder' && <QuizBuilderPage onNavigate={handleNavigate} />}
        {currentView === 'lab' && <CodingLabPage onNavigate={handleNavigate} />}
        {currentView === 'mcqs' && <MCQPracticePage onNavigate={handleNavigate} />}
        {currentView === 'ide' && <IDEPage onNavigate={handleNavigate} />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <p>LiveQuiz Engine • Real-Time Interactive Arena • Powered by Node.js, Socket.io, React & MongoDB Atlas</p>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <AppContent />
      </QuizProvider>
    </ThemeProvider>
  );
}
