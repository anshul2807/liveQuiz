import React, { useState, useEffect, useMemo } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { AdminLobby } from '../components/AdminLobby.jsx';
import { AdminLiveQuiz } from '../components/AdminLiveQuiz.jsx';
import { AdminLeaderboard } from '../components/AdminLeaderboard.jsx';
import { AdminLogin } from '../components/AdminLogin.jsx';
import { 
  Play, Sparkles, BookOpen, Layers, Clock, PlusCircle, RefreshCw, LogOut, 
  Search, Check, Filter, Award, Code2, Zap, ArrowRight, CheckCircle2, ShieldCheck
} from 'lucide-react';
import { getApiUrl } from '../services/api.js';
import { SYLLABUS_UNITS, QUIZ_QUESTIONS } from '../data/quizData.js';

export const generateClientPresetQuizzes = () => {
  const list = [];

  for (const unit of SYLLABUS_UNITS) {
    const isDSA = unit.subjectId === 'dsa';
    const subjectPrefix = isDSA ? '[DSA] ' : '[OOPs] ';
    const unitLabel = unit.title.split(':')[0].trim();
    const unitTopic = unit.title.split(':')[1]?.trim() || '';
    const unitNum = unit.id.includes('1') ? 1 : unit.id.includes('2') ? 2 : 3;

    // 1. Individual Section Quizzes (15 questions each)
    for (const set of unit.sets) {
      const setQuestions = QUIZ_QUESTIONS.filter(
        q => q.unitId === unit.id && q.setId === set.id
      ).map(q => ({
        questionText: q.question,
        code: q.code || '',
        options: q.options,
        correctOptionIndex: q.correctAnswer,
        timeLimit: 60,
        explanation: q.explanation || '',
        subjectId: q.subjectId || unit.subjectId,
        language: q.language || 'both',
      }));

      list.push({
        _id: `${unit.id}_${set.id}`,
        title: `${subjectPrefix}${unitLabel} - ${set.title}`,
        description: `${unitTopic || unit.description} (${set.difficulty.toUpperCase()} • ${setQuestions.length} Questions)`,
        adminId: 'admin-system',
        subjectId: unit.subjectId,
        unitId: unit.id,
        unitNumber: unitNum,
        unitLabel,
        unitTopic,
        setId: set.id,
        sectionTitle: set.title,
        difficulty: set.difficulty,
        questions: setQuestions,
        createdAt: new Date(),
      });
    }

    // 2. Full Unit Comprehensive Master Exam (45 questions)
    const unitQuestions = QUIZ_QUESTIONS.filter(
      q => q.unitId === unit.id
    ).map(q => ({
      questionText: q.question,
      code: q.code || '',
      options: q.options,
      correctOptionIndex: q.correctAnswer,
      timeLimit: 60,
      explanation: q.explanation || '',
      subjectId: q.subjectId || unit.subjectId,
      language: q.language || 'both',
    }));

    if (unitQuestions.length > 0) {
      list.push({
        _id: `${unit.id}_full`,
        title: `🏆 ${subjectPrefix}${unitLabel} - Complete Unit Exam (All 3 Sections)`,
        description: `Comprehensive 45-question test covering Easy, Medium & Hard sections of ${unitLabel}: ${unitTopic}`,
        adminId: 'admin-system',
        subjectId: unit.subjectId,
        unitId: unit.id,
        unitNumber: unitNum,
        unitLabel,
        unitTopic,
        setId: 'full',
        sectionTitle: 'Complete Unit Exam (45 Qs)',
        difficulty: 'mixed',
        questions: unitQuestions,
        createdAt: new Date(),
      });
    }
  }

  // 3. Quick 5-Question Demo Quizzes for fast live testing
  const dsaDemoQuestions = QUIZ_QUESTIONS.filter(q => q.subjectId === 'dsa').slice(0, 5).map(q => ({
    questionText: q.question,
    code: q.code || '',
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    timeLimit: 60,
    explanation: q.explanation || '',
    subjectId: 'dsa',
    language: q.language || 'both',
  }));

  const oopsDemoQuestions = QUIZ_QUESTIONS.filter(q => q.subjectId === 'oops').slice(0, 5).map(q => ({
    questionText: q.question,
    code: q.code || '',
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    timeLimit: 60,
    explanation: q.explanation || '',
    subjectId: 'oops',
    language: q.language || 'both',
  }));

  list.unshift({
    _id: 'demo_dsa_quiz',
    title: '⚡ [DSA] Quick 5-Question Demo Quiz',
    description: '1-minute timer per question — perfect for live testing DSA concepts',
    adminId: 'admin-system',
    subjectId: 'dsa',
    unitId: 'dsa_unit1',
    unitNumber: 1,
    unitLabel: 'Demo',
    unitTopic: 'Quick Live Simulation',
    setId: 'demo_dsa',
    sectionTitle: 'Quick Demo (5 Qs)',
    difficulty: 'easy',
    questions: dsaDemoQuestions,
    createdAt: new Date(),
  });

  list.unshift({
    _id: 'demo_quick_quiz',
    title: '⚡ [OOPs] Quick 5-Question C++ Demo Quiz',
    description: '1-minute timer per question — perfect for live testing and demonstrations',
    adminId: 'admin-system',
    subjectId: 'oops',
    unitId: 'unit1',
    unitNumber: 1,
    unitLabel: 'Demo',
    unitTopic: 'Quick Live Simulation',
    setId: 'demo',
    sectionTitle: 'Quick Demo (5 Qs)',
    difficulty: 'easy',
    questions: oopsDemoQuestions,
    createdAt: new Date(),
  });

  return list;
};

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

  // ALL HOOKS MUST BE DECLARED UNCONDITIONALLY AT THE TOP
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState('');
  const [loading, setLoading] = useState(true);
  const [creatingRoom, setCreatingRoom] = useState(false);
  const [roomDetails, setRoomDetails] = useState({ joinUrl: '', qrCode: '' });
  
  // Interactive Filters
  const [selectedSubject, setSelectedSubject] = useState('dsa'); // 'all' | 'oops' | 'dsa' (default to 'dsa')
  const [selectedUnit, setSelectedUnit] = useState('all'); // 'all' | 'unit1' | 'unit2' | 'unit3' | 'demo'
  const [selectedSection, setSelectedSection] = useState('all'); // 'all' | 'easy' | 'medium' | 'hard' | 'full'
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch available quizzes with client preset fallback & DSA quiz guarantee
  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const res = await fetch(getApiUrl('/api/quizzes'));
      const data = await res.json();
      const clientPresets = generateClientPresetQuizzes();

      if (data.success && data.quizzes && data.quizzes.length > 0) {
        // Merge missing preset quizzes with server quizzes
        const existingTitles = new Set(data.quizzes.map(q => q.title));
        const missingPresets = clientPresets.filter(p => !existingTitles.has(p.title));
        const merged = [...data.quizzes, ...missingPresets];
        setQuizzes(merged);
        if (!selectedQuizId && merged.length > 0) setSelectedQuizId(merged[0]._id);
      } else {
        setQuizzes(clientPresets);
        if (!selectedQuizId && clientPresets.length > 0) setSelectedQuizId(clientPresets[0]._id);
      }
    } catch (err) {
      console.warn('Failed to fetch quizzes from server, using local presets:', err);
      const presets = generateClientPresetQuizzes();
      setQuizzes(presets);
      if (!selectedQuizId && presets.length > 0) setSelectedQuizId(presets[0]._id);
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

  // Dynamic filter logic
  const filteredQuizzes = useMemo(() => {
    return quizzes.filter((q) => {
      // 1. Subject Filter
      if (selectedSubject !== 'all' && q.subjectId !== selectedSubject) return false;

      // 2. Unit Filter
      if (selectedUnit !== 'all') {
        if (selectedUnit === 'demo') {
          if (!String(q._id).startsWith('demo_')) return false;
        } else {
          const qUnit = String(q.unitId || '');
          if (selectedUnit === 'unit1' && !qUnit.endsWith('unit1')) return false;
          if (selectedUnit === 'unit2' && !qUnit.endsWith('unit2')) return false;
          if (selectedUnit === 'unit3' && !qUnit.endsWith('unit3')) return false;
        }
      }

      // 3. Section / Format Filter
      if (selectedSection !== 'all') {
        if (selectedSection === 'full') {
          if (q.setId !== 'full') return false;
        } else if (selectedSection === 'easy') {
          if (q.difficulty !== 'easy' || q.setId === 'full') return false;
        } else if (selectedSection === 'medium') {
          if (q.difficulty !== 'medium' || q.setId === 'full') return false;
        } else if (selectedSection === 'hard') {
          if (q.difficulty !== 'hard' || q.setId === 'full') return false;
        }
      }

      // 4. Search Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const match = (
          (q.title || '') + ' ' + 
          (q.description || '') + ' ' + 
          (q.unitTopic || '') + ' ' + 
          (q.sectionTitle || '')
        ).toLowerCase();
        if (!match.includes(query)) return false;
      }

      return true;
    });
  }, [quizzes, selectedSubject, selectedUnit, selectedSection, searchQuery]);

  // If currently selected quiz is no longer in filtered list, auto-select first matching
  useEffect(() => {
    if (filteredQuizzes.length > 0 && !filteredQuizzes.some(q => q._id === selectedQuizId)) {
      setSelectedQuizId(filteredQuizzes[0]._id);
    }
  }, [filteredQuizzes, selectedQuizId]);

  // Gatekeeper: Admin authentication
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
      const selectedQuiz = quizzes.find(q => q._id === selectedQuizId);
      const res = await fetch(getApiUrl('/api/sessions/create'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          quizId: selectedQuizId,
          quizData: selectedQuiz
        }),
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

  // If currently in a room, render active game states
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

  // Unit filter labels based on currently selected subject
  const unitOptions = [
    { id: 'all', label: 'All Units' },
    { 
      id: 'unit1', 
      label: selectedSubject === 'dsa' 
        ? 'Unit I: Arrays & Sorting' 
        : selectedSubject === 'oops' 
        ? 'Unit I: Basics & Overloading' 
        : 'Unit I' 
    },
    { 
      id: 'unit2', 
      label: selectedSubject === 'dsa' 
        ? 'Unit II: Linked Lists' 
        : selectedSubject === 'oops' 
        ? 'Unit II: Pointers & Strings' 
        : 'Unit II' 
    },
    { 
      id: 'unit3', 
      label: selectedSubject === 'dsa' 
        ? 'Unit III: Stacks & Queues' 
        : selectedSubject === 'oops' 
        ? 'Unit III: Files & Constructors' 
        : 'Unit III' 
    },
    { id: 'demo', label: '⚡ Demo Quizzes' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Host Console (Authenticated)
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Launch Live Quiz Session
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Host live multiplayer quizzes with real-time countdown, synchronized displays, and instant podium leaderboard.
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
          <p className="text-sm">Loading curriculum question banks & live quizzes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quiz Cards & Filters (8 Cols) */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* 1. Subject Selector Tabs */}
            <div className="bg-white dark:bg-slate-800/80 p-2 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-wrap items-center gap-2 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 hidden sm:inline">
                Subject:
              </span>
              <button
                onClick={() => { setSelectedSubject('dsa'); setSelectedUnit('all'); }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedSubject === 'dsa'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                DSA ({quizzes.filter(q => q.subjectId === 'dsa').length})
              </button>
              <button
                onClick={() => { setSelectedSubject('oops'); setSelectedUnit('all'); }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedSubject === 'oops'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                OOPs in CPP ({quizzes.filter(q => q.subjectId === 'oops').length})
              </button>
              <button
                onClick={() => { setSelectedSubject('all'); setSelectedUnit('all'); }}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedSubject === 'all'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                    : 'bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                }`}
              >
                All Subjects ({quizzes.length})
              </button>
            </div>

            {/* 2. Unit Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1.5 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Unit:
              </span>
              {unitOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedUnit(opt.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedUnit === opt.id
                      ? selectedSubject === 'dsa'
                        ? 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                        : 'bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* 3. Section / Type Pills & Search Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
                <button
                  onClick={() => setSelectedSection('all')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedSection === 'all'
                      ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  All Formats
                </button>
                <button
                  onClick={() => setSelectedSection('easy')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedSection === 'easy'
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Easy (Sec 1)
                </button>
                <button
                  onClick={() => setSelectedSection('medium')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedSection === 'medium'
                      ? 'bg-amber-600 text-white'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Medium (Sec 2)
                </button>
                <button
                  onClick={() => setSelectedSection('hard')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedSection === 'hard'
                      ? 'bg-rose-600 text-white'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  Hard (Sec 3)
                </button>
                <button
                  onClick={() => setSelectedSection('full')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedSection === 'full'
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  🏆 Complete Unit (45 Qs)
                </button>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-56 sm:ml-auto">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search quizzes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Quiz Cards Grid */}
            {filteredQuizzes.length === 0 ? (
              <div className="p-12 text-center bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700">
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3 opacity-60" />
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No quizzes match your filters</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting the Unit or Format filter to view quizzes.</p>
                <button
                  onClick={() => { setSelectedUnit('all'); setSelectedSection('all'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredQuizzes.map((quiz) => {
                  const isSelected = selectedQuizId === quiz._id;
                  const isDemo = String(quiz._id).startsWith('demo_');
                  const isFull = quiz.setId === 'full';
                  const isDSA = quiz.subjectId === 'dsa';

                  return (
                    <div
                      key={quiz._id}
                      onClick={() => setSelectedQuizId(quiz._id)}
                      className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between relative ${
                        isSelected
                          ? isDSA
                            ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20'
                            : 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-500 shadow-xl shadow-purple-500/10 ring-2 ring-purple-500/20'
                          : 'bg-white dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div>
                        {/* Top Badges Row */}
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <div className="flex flex-wrap items-center gap-1.5">
                            {/* Subject Badge */}
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider border ${
                              isDSA
                                ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                                : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                            }`}>
                              {isDSA ? 'DSA' : 'OOPs'}
                            </span>

                            {/* Unit Badge */}
                            {quiz.unitLabel && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                {quiz.unitLabel}
                              </span>
                            )}

                            {/* Section / Difficulty Badge */}
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                              isFull
                                ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800'
                                : isDemo 
                                ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/40' 
                                : quiz.difficulty === 'easy'
                                ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                : quiz.difficulty === 'hard'
                                ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                                : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                            }`}>
                              {isFull ? '🏆 Complete Unit' : isDemo ? '⚡ Demo' : quiz.difficulty || 'medium'}
                            </span>
                          </div>

                          {/* Question Count Pill */}
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 font-bold whitespace-nowrap">
                            {quiz.questions?.length || 0} Qs
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-1">
                          {quiz.title}
                        </h3>

                        {/* Topic / Description */}
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                          {quiz.description || quiz.unitTopic || 'Comprehensive syllabus quiz and live coding questions.'}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                          <Clock className="w-3.5 h-3.5" />
                          <span>60s/Q • ~{Math.round((quiz.questions?.length || 15) * 1.2)}m</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <span className={isSelected ? 'text-purple-600 dark:text-purple-400 font-bold' : 'text-slate-400'}>
                            {isSelected ? 'Selected' : 'Select'}
                          </span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-purple-600 border-purple-600 text-white'
                              : 'border-slate-300 dark:border-slate-600'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
                const isDSA = selected.subjectId === 'dsa';
                const totalQ = selected.questions?.length || 0;

                return (
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/70 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                          Active Selection
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider border ${
                          isDSA
                            ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                            : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        }`}>
                          {isDSA ? 'DSA Curriculum' : 'OOPs in C++'}
                        </span>
                      </div>

                      <div className="font-extrabold text-slate-900 dark:text-white text-sm leading-snug">
                        {selected.title}
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          <span className="font-semibold">{totalQ} Questions</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span>60s Timer / Q</span>
                        </div>
                      </div>

                      {selected.unitTopic && (
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                          <strong>Topic:</strong> {selected.unitTopic}
                        </div>
                      )}
                    </div>

                    <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/60 text-xs text-purple-900 dark:text-purple-200 leading-relaxed">
                      ⚡ <strong>Live Game Mechanics:</strong> Server synchronizes timers across all student devices. Real-time response distribution chart and podium rankings are computed automatically.
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
