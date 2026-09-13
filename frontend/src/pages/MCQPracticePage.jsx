import React, { useState, useEffect } from 'react';
import { SYLLABUS_UNITS, QUIZ_QUESTIONS } from '../data/quizData.js';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Award,
  Layers,
  Check,
  Play,
  Flame,
  ArrowRight
} from 'lucide-react';

export const MCQPracticePage = ({ onNavigate }) => {
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedSet, setSelectedSet] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modes: 'practice' (instant explanation) | 'exam' (timed mock test)
  const [examMode, setExamMode] = useState(false);
  
  // Active Question State
  const [currentIdx, setCurrentIdx] = useState(0);
  const [practiceAnswers, setPracticeAnswers] = useState({}); // { [qId]: optionIndex }
  
  // Exam Mode State
  const [examQuestions, setExamQuestions] = useState([]);
  const [examAnswers, setExamAnswers] = useState({}); // { [qId]: optionIndex }
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(null);

  // Available sets based on selected unit
  const currentUnitObj = SYLLABUS_UNITS.find(u => u.id === selectedUnit);
  const availableSets = currentUnitObj ? currentUnitObj.sets : SYLLABUS_UNITS.flatMap(u => u.sets);

  // Filter questions for practice
  const filteredQuestions = QUIZ_QUESTIONS.filter(q => {
    if (selectedUnit !== 'all' && q.unitId !== selectedUnit) return false;
    if (selectedSet !== 'all' && q.setId !== selectedSet) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (searchQuery.trim()) {
      const matchText = (q.question + (q.code || '') + (q.explanation || '')).toLowerCase();
      if (!matchText.includes(searchQuery.toLowerCase())) return false;
    }
    return true;
  });

  const activeQuestion = examMode 
    ? (examQuestions[currentIdx] || null)
    : (filteredQuestions[currentIdx] || filteredQuestions[0] || null);

  // Reset index when filters change
  useEffect(() => {
    setCurrentIdx(0);
  }, [selectedUnit, selectedSet, selectedDifficulty, searchQuery]);

  // Exam Countdown Timer
  useEffect(() => {
    if (!examMode || isExamSubmitted) return;
    if (timeLeft <= 0) {
      handleSubmitExam();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [examMode, isExamSubmitted, timeLeft]);

  // Start Exam Mode
  const handleStartExam = () => {
    // Pick 15 random questions from filtered or all
    const sourcePool = filteredQuestions.length >= 5 ? filteredQuestions : QUIZ_QUESTIONS;
    const shuffled = [...sourcePool].sort(() => Math.random() - 0.5).slice(0, 15);
    setExamQuestions(shuffled);
    setExamAnswers({});
    setCurrentIdx(0);
    setTimeLeft(15 * 60);
    setIsExamSubmitted(false);
    setExamScore(null);
    setExamMode(true);
  };

  const handleExitExam = () => {
    if (isExamSubmitted || window.confirm('Exit exam mode? Your current progress will be lost.')) {
      setExamMode(false);
      setIsExamSubmitted(false);
      setExamQuestions([]);
      setCurrentIdx(0);
    }
  };

  const handleSubmitExam = () => {
    let score = 0;
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correctAnswer) {
        score += 1;
      }
    });
    setExamScore(score);
    setIsExamSubmitted(true);
  };

  // Practice mode answer select
  const handlePracticeSelect = (optIdx) => {
    if (!activeQuestion) return;
    if (practiceAnswers[activeQuestion.id] !== undefined) return; // already answered
    setPracticeAnswers(prev => ({
      ...prev,
      [activeQuestion.id]: optIdx
    }));
  };

  // Exam mode answer select
  const handleExamSelect = (optIdx) => {
    if (!activeQuestion || isExamSubmitted) return;
    setExamAnswers(prev => ({
      ...prev,
      [activeQuestion.id]: optIdx
    }));
  };

  // Format time MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Option labels
  const OPTION_LABELS = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Comprehensive C++ MCQ Bank • 225 Questions (Units I, II & III)
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {examMode ? 'Mock Exam Arena' : 'C++ MCQ Practice Center'}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {examMode 
              ? 'Timed 15-question examination simulation with scoring and detailed performance review.'
              : 'Master C++ core concepts, pointer semantics, stream operations, and RAII with detailed explanations.'}
          </p>
        </div>

        {/* Mode Selector / Controls */}
        <div className="flex items-center gap-3">
          {!examMode ? (
            <button
              onClick={handleStartExam}
              className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
            >
              <Clock className="w-4 h-4" />
              <span>Start 15-Min Timed Exam</span>
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300 font-mono text-sm font-bold flex items-center gap-2">
                <Clock className="w-4 h-4 animate-pulse" />
                <span>{formatTime(timeLeft)}</span>
              </div>

              {!isExamSubmitted ? (
                <button
                  onClick={handleSubmitExam}
                  className="px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition-all shadow-md"
                >
                  Submit Exam
                </button>
              ) : null}

              <button
                onClick={handleExitExam}
                className="px-3.5 py-2 rounded-2xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Exit Exam
              </button>
            </div>
          )}
        </div>
      </div>

      {/* FILTER BAR (PRACTICE MODE ONLY) */}
      {!examMode && (
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-5 mb-8 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* Unit Selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Select Syllabus Unit
              </label>
              <select
                value={selectedUnit}
                onChange={(e) => {
                  setSelectedUnit(e.target.value);
                  setSelectedSet('all');
                }}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Units (225 Questions)</option>
                {SYLLABUS_UNITS.map(u => (
                  <option key={u.id} value={u.id}>{u.title.split(':')[0]}: {u.title.split(':')[1]}</option>
                ))}
              </select>
            </div>

            {/* Set Selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Question Set
              </label>
              <select
                value={selectedSet}
                onChange={(e) => setSelectedSet(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Sets ({availableSets.length} Sets)</option>
                {availableSets.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Difficulty
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Difficulties</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Search Questions / Code
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by keyword..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:border-blue-500 placeholder:text-slate-400"
                />
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-700/60">
            <span>Showing <strong className="text-slate-800 dark:text-slate-200">{filteredQuestions.length}</strong> matching questions</span>
            <span>Answered: <strong className="text-blue-600 dark:text-blue-400">{Object.keys(practiceAnswers).length}</strong></span>
          </div>
        </div>
      )}

      {/* EXAM SCORECARD MODAL / BANNER */}
      {examMode && isExamSubmitted && (
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border-2 border-blue-500 rounded-3xl p-6 sm:p-8 mb-8 shadow-2xl animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300 shadow-inner">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                  Exam Completed
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Score: {examScore} / {examQuestions.length} ({Math.round((examScore / examQuestions.length) * 100)}%)
                </h2>
                <p className="text-xs text-blue-200 mt-1">
                  Review your answers and detailed explanations below.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartExam}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold flex items-center gap-2 transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake New Exam</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MAIN QUESTION WORKSPACE */}
      {activeQuestion ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Question Card (8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-xl">
            
            {/* Top Badge Strip */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                Question {currentIdx + 1} of {examMode ? examQuestions.length : filteredQuestions.length}
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {activeQuestion.unitId}
                </span>
                <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase ${
                  activeQuestion.difficulty === 'easy' ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' :
                  activeQuestion.difficulty === 'medium' ? 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300' :
                  'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                }`}>
                  {activeQuestion.difficulty}
                </span>
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug">
              {activeQuestion.question}
            </h3>

            {/* Code Snippet if present */}
            {activeQuestion.code && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-inner">
                <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>C++ Code Reference</span>
                  <span>g++ 17</span>
                </div>
                <pre className="p-4 text-xs sm:text-sm font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                  {activeQuestion.code}
                </pre>
              </div>
            )}

            {/* Options List */}
            <div className="space-y-3 mb-6">
              {activeQuestion.options.map((opt, optIdx) => {
                const isExam = examMode;
                const userChoice = isExam ? examAnswers[activeQuestion.id] : practiceAnswers[activeQuestion.id];
                const isRevealed = !isExam ? (userChoice !== undefined) : isExamSubmitted;
                const isSelected = userChoice === optIdx;
                const isCorrect = optIdx === activeQuestion.correctAnswer;

                let cardStyle = 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 text-slate-800 dark:text-slate-200';

                if (isExam && !isExamSubmitted) {
                  if (isSelected) {
                    cardStyle = 'bg-blue-50 dark:bg-blue-950/60 border-blue-500 text-blue-900 dark:text-blue-100 ring-2 ring-blue-500/30 font-bold';
                  }
                } else if (isRevealed) {
                  if (isCorrect) {
                    cardStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/30 font-bold';
                  } else if (isSelected && !isCorrect) {
                    cardStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/30';
                  } else {
                    cardStyle = 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => isExam ? handleExamSelect(optIdx) : handlePracticeSelect(optIdx)}
                    disabled={isExam ? isExamSubmitted : (practiceAnswers[activeQuestion.id] !== undefined)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${cardStyle}`}
                  >
                    <span className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black text-xs flex items-center justify-center flex-shrink-0">
                      {OPTION_LABELS[optIdx]}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed flex-1 pt-0.5">
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Explanation Box */}
            {(!examMode && practiceAnswers[activeQuestion.id] !== undefined) || (examMode && isExamSubmitted) ? (
              <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-5 mb-6 animate-fadeIn">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 dark:text-blue-200">
                    Technical Explanation
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeQuestion.explanation}
                </p>
              </div>
            ) : null}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                disabled={currentIdx === 0}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                {currentIdx + 1} of {examMode ? examQuestions.length : filteredQuestions.length}
              </span>

              <button
                onClick={() => setCurrentIdx(prev => Math.min((examMode ? examQuestions.length : filteredQuestions.length) - 1, prev + 1))}
                disabled={currentIdx === (examMode ? examQuestions.length : filteredQuestions.length) - 1}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold disabled:opacity-40 flex items-center gap-1.5 transition-colors shadow-md shadow-blue-600/20"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Question Palette (4 Cols) */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-xl sticky top-24">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Question Palette</span>
            </h4>

            <div className="grid grid-cols-5 gap-2 max-h-80 overflow-y-auto pr-1">
              {(examMode ? examQuestions : filteredQuestions).map((q, idx) => {
                const isCur = idx === currentIdx;
                const userAns = examMode ? examAnswers[q.id] : practiceAnswers[q.id];
                const isAnswered = userAns !== undefined;
                const isCorrect = userAns === q.correctAnswer;

                let btnStyle = 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';

                if (isCur) {
                  btnStyle = 'bg-blue-600 text-white font-bold ring-2 ring-blue-500/40';
                } else if (!examMode && isAnswered) {
                  btnStyle = isCorrect
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-400'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-400';
                } else if (examMode) {
                  if (isExamSubmitted) {
                    btnStyle = isCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-400'
                      : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border-rose-400';
                  } else if (isAnswered) {
                    btnStyle = 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-400';
                  }
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-xl border text-xs font-mono font-bold transition-all ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Quick Summary Info */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center justify-between">
                <span>Unit I: Concepts & OOP</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">75 MCQs</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Unit II: Pointers & Arrays</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">75 MCQs</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Unit III: Streams, Ctor & RAII</span>
                <span className="font-bold text-slate-700 dark:text-slate-300">75 MCQs</span>
              </div>
            </div>

          </div>

        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-200 dark:border-slate-700/70 p-8">
          <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">No questions match your filter criteria</h3>
          <p className="text-xs text-slate-500 mt-1">Try resetting the Unit, Set, or Search filters above.</p>
        </div>
      )}

    </div>
  );
};
