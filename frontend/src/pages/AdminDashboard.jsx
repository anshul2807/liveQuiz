import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { AdminLobby } from '../components/AdminLobby.jsx';
import { AdminLiveQuiz } from '../components/AdminLiveQuiz.jsx';
import { AdminLeaderboard } from '../components/AdminLeaderboard.jsx';
import { AdminLogin } from '../components/AdminLogin.jsx';
import { Play, Sparkles, BookOpen, Layers, Clock, PlusCircle, RefreshCw, LogOut } from 'lucide-react';
import { getApiUrl } from '../services/api.js';

export const AdminDashboard = ({ onNavigate }) => {
  const {
    roomCode,
    roomState,
    role,
    joinAsAdmin,
    resetQuizState,
    isAdminAuthenticated,
    loginAdmin,
    logoutAdmin,
  } = useQuiz();

  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [loading, setLoading] = useState(true);
  const [creatingRoom, setCreatingRoom] = useState(false);
  const [roomDetails, setRoomDetails] = useState({ joinUrl: '', qrCode: '' });

  // Fetch available quizzes
  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl('/api/quizzes'));
      const data = await res.json();
      if (data.success && data.quizzes) {
        setQuizzes(data.quizzes);
        if (data.quizzes.length > 0 && !selectedQuizId) {
          setSelectedQuizId(data.quizzes[0]._id);
        }
      }
    } catch (err) {
      console.error('Failed to fetch quizzes:', err);
    } finally {
      setLoading(false);
    }
  };

  // If no room is active, load available quizzes once admin is authenticated
  useEffect(() => {
    if (!roomCode && isAdminAuthenticated) {
      fetchQuizzes();
    }
  }, [roomCode, isAdminAuthenticated]);

  if (!isAdminAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={(user) => loginAdmin(user)}
        onCancel={() => onNavigate('home')}
      />
    );
  }

  // Create live room handler
  const handleCreateRoom = async () => {
    if (!selectedQuizId) return;
    setCreatingRoom(true);

    try {
      const res = await fetch(getApiUrl('/api/sessions/create'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quizId: selectedQuizId }),
      });

      const data = await res.json();
      if (data.success) {
        setRoomDetails({
          joinUrl: data.joinUrl,
          qrCode: data.qrCode,
        });
        // Connect admin socket to this room
        joinAsAdmin(data.roomCode);
      } else {
        alert(data.message || 'Failed to create room');
      }
    } catch (err) {
      console.error('Error creating room:', err);
      alert('Error creating quiz room. Ensure backend server is running.');
    } finally {
      setCreatingRoom(false);
    }
  };

  // 2. If currently in a room, render active game states
  if (roomCode && role === 'admin') {
    if (roomState === 'LOBBY') {
      return (
        <AdminLobby
          qrCodeUrl={roomDetails.qrCode}
          joinUrl={roomDetails.joinUrl}
        />
      );
    }

    if (roomState === 'QUESTION_ACTIVE' || roomState === 'QUESTION_RESULT') {
      return <AdminLiveQuiz />;
    }

    if (roomState === 'FINISHED') {
      return (
        <AdminLeaderboard
          onHostNewQuiz={() => {
            resetQuizState();
            setRoomDetails({ joinUrl: '', qrCode: '' });
          }}
        />
      );
    }
  }

  // 3. Pre-Game: Quiz Selection & Launcher Screen
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Host Console (Authenticated)
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Launch Live Quiz Session
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Select a C++ question bank set or create a custom quiz to host.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('builder')}
            className="px-4 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold flex items-center gap-2 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
          >
            <PlusCircle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Question Bank</span>
          </button>
          
          <button
            onClick={fetchQuizzes}
            title="Refresh quizzes"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={logoutAdmin}
            title="Log Out Admin"
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-slate-200 dark:border-slate-700 shadow-xs transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>

      {loading ? (
        <div className="min-h-[300px] flex flex-col items-center justify-center text-slate-400">
          <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-sm">Loading quiz question banks...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quiz Cards List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Available Question Sets ({quizzes.length})
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizzes.map((quiz) => {
                const isSelected = selectedQuizId === quiz._id;
                const isDemo = quiz._id === 'demo_quick_quiz';

                return (
                  <div
                    key={quiz._id}
                    onClick={() => setSelectedQuizId(quiz._id)}
                    className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-xl shadow-purple-500/10 ring-2 ring-purple-500/20'
                        : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                          isDemo 
                            ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40' 
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {quiz.difficulty || 'medium'}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                          {quiz.questions?.length || 0} Questions
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                        {quiz.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {quiz.description || 'Comprehensive C++ concepts and code analysis.'}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                      <span className={isSelected ? 'text-purple-600 dark:text-purple-400 font-bold' : 'text-slate-500 dark:text-slate-400'}>
                        {isSelected ? 'Selected' : 'Click to select'}
                      </span>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Launch Action Panel (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-xl backdrop-blur sticky top-24 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              Session Summary
            </h3>

            {selectedQuizId && (
              (() => {
                const selected = quizzes.find(q => q._id === selectedQuizId);
                if (!selected) return null;

                return (
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-xl p-4 border border-slate-200 dark:border-slate-700/70 space-y-2">
                      <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                        Selected Quiz
                      </div>
                      <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                        {selected.title}
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                          <span>{selected.questions?.length || 0} Qs</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                          <span>15s-30s / Q</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Launching will generate a 6-character room PIN and live QR code for instant student onboarding.
                    </div>
                  </div>
                );
              })()
            )}

            <button
              onClick={handleCreateRoom}
              disabled={creatingRoom || !selectedQuizId}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-base shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
            >
              {creatingRoom ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Generating Room & QR...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-white" />
                  <span>Create Room & Launch</span>
                </>
              )}
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
