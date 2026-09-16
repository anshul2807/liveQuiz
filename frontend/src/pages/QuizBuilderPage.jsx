import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { AdminLogin } from '../components/AdminLogin.jsx';
import { SYLLABUS_UNITS, QUIZ_QUESTIONS, SUBJECTS } from '../data/quizData.js';
import { Plus, Trash2, CheckCircle2, Code, HelpCircle, Save, Filter, Search, Layers, Cpu } from 'lucide-react';
import { getApiUrl } from '../services/api.js';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];
const OPTION_COLORS = ['#e21b3c', '#1368ce', '#d89e00', '#26890c'];

export const QuizBuilderPage = ({ onNavigate }) => {
  const { isAdminAuthenticated, loginAdmin } = useQuiz();
  const [activeTab, setActiveTab] = useState('bank'); // 'bank' | 'create'
  
  // Question Bank Explorer state
  const [selectedSubject, setSelectedSubject] = useState('all'); // 'all' | 'oops' | 'dsa'
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Custom Quiz Creator state
  const [customTitle, setCustomTitle] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [customDifficulty, setCustomDifficulty] = useState('medium');
  const [customSubjectId, setCustomSubjectId] = useState('oops');
  const [customLanguage, setCustomLanguage] = useState('cpp');
  const [customQuestions, setCustomQuestions] = useState([
    {
      questionText: '',
      code: '',
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      timeLimit: 60,
      explanation: '',
    },
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // 1. GATEKEEP: STRICT ADMIN AUTHENTICATION REQUIRED FOR QUESTION/SOLUTION BANK
  if (!isAdminAuthenticated) {
    return (
      <AdminLogin
        onLoginSuccess={(user) => loginAdmin(user)}
        onCancel={() => onNavigate('home')}
      />
    );
  }

  // Filter bank questions
  const filteredQuestions = QUIZ_QUESTIONS.filter((q) => {
    if (selectedSubject !== 'all' && q.subjectId !== selectedSubject) return false;
    if (selectedUnit !== 'all' && q.unitId !== selectedUnit) return false;
    if (searchQuery.trim()) {
      const matchText = (q.question + (q.code || '') + (q.explanation || '')).toLowerCase();
      return matchText.includes(searchQuery.toLowerCase());
    }
    return true;
  });

  // Custom Question Form Handlers
  const handleAddQuestion = () => {
    setCustomQuestions([
      ...customQuestions,
      {
        questionText: '',
        code: '',
        options: ['', '', '', ''],
        correctOptionIndex: 0,
        timeLimit: 60,
        explanation: '',
      },
    ]);
  };

  const handleRemoveQuestion = (idx) => {
    if (customQuestions.length <= 1) return;
    setCustomQuestions(customQuestions.filter((_, i) => i !== idx));
  };

  const handleUpdateQuestion = (idx, field, value) => {
    const updated = [...customQuestions];
    updated[idx][field] = value;
    setCustomQuestions(updated);
  };

  const handleUpdateOption = (qIdx, optIdx, value) => {
    const updated = [...customQuestions];
    updated[qIdx].options[optIdx] = value;
    setCustomQuestions(updated);
  };

  const handleSaveQuiz = async (e) => {
    e.preventDefault();
    if (!customTitle.trim()) {
      alert('Please enter a Quiz Title');
      return;
    }

    for (let i = 0; i < customQuestions.length; i++) {
      const q = customQuestions[i];
      if (!q.questionText.trim()) {
        alert(`Question #${i + 1} text is empty`);
        return;
      }
      for (let j = 0; j < 4; j++) {
        if (!q.options[j].trim()) {
          alert(`Question #${i + 1} Option ${OPTION_LABELS[j]} is empty`);
          return;
        }
      }
    }

    setIsSaving(true);
    try {
      const res = await fetch(getApiUrl('/api/quizzes'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: customTitle.trim(),
          description: customDescription.trim(),
          difficulty: customDifficulty,
          subjectId: customSubjectId,
          language: customLanguage,
          questions: customQuestions,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSaveSuccess(true);
        setTimeout(() => {
          setSaveSuccess(false);
          onNavigate('admin');
        }, 1500);
      } else {
        alert(data.message || 'Error saving quiz');
      }
    } catch (err) {
      console.error('Error saving quiz:', err);
      alert('Failed to connect to backend server');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
      
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Question Bank & Quiz Studio
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
            Browse 270 MCQs across OOPs in CPP & DSA or compose custom live sessions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('bank')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'bank'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Question Bank (270 MCQs)
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'create'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Create Custom Quiz
          </button>
        </div>
      </div>

      {/* TAB 1: QUESTION BANK EXPLORER */}
      {activeTab === 'bank' && (
        <div className="space-y-6">
          
          {/* Filter Bar */}
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm transition-colors">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              
              {/* Subject Filter */}
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedUnit('all');
                }}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500 font-semibold"
              >
                <option value="all">All Subjects (270 Qs)</option>
                <option value="oops">OOPs in CPP (135 Qs)</option>
                <option value="dsa">DSA (135 Qs)</option>
              </select>

              {/* Unit Filter */}
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500"
              >
                {selectedSubject === 'oops' ? (
                  <>
                    <option value="all">All Units (135 Qs)</option>
                    <option value="unit1">Unit 1: Concepts & Basics (45 Qs)</option>
                    <option value="unit2">Unit 2: Classes, Pointers & Objects (45 Qs)</option>
                    <option value="unit3">Unit 3: File Streams & Polymorphism (45 Qs)</option>
                  </>
                ) : selectedSubject === 'dsa' ? (
                  <>
                    <option value="all">All Units (135 Qs)</option>
                    <option value="unit1">Unit 1: Arrays, Searching & Sorting (45 Qs)</option>
                    <option value="unit2">Unit 2: Linked Lists & Two-Way Lists (45 Qs)</option>
                    <option value="unit3">Unit 3: Stacks, Notation & Queues (45 Qs)</option>
                  </>
                ) : (
                  <>
                    <option value="all">All Syllabus Units (270 Qs)</option>
                    <option value="unit1">Unit 1 (90 Qs)</option>
                    <option value="unit2">Unit 2 (90 Qs)</option>
                    <option value="unit3">Unit 3 (90 Qs)</option>
                  </>
                )}
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search question, code, explanation..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-sm text-slate-800 dark:text-slate-200 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold px-1">
            Showing {filteredQuestions.length} of {QUIZ_QUESTIONS.length} Questions
          </div>

          {/* Questions Grid */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => {
              const isDSA = q.subjectId === 'dsa';
              return (
                <div
                  key={q.id || idx}
                  className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm hover:border-purple-300 dark:hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isDSA
                          ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50'
                          : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/50'
                      }`}>
                        {isDSA ? 'DSA' : 'OOPs'} • {q.unitId.toUpperCase()} • Set {q.setId || '1'} • #{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 uppercase">
                        {q.language || 'C++'}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase">
                      {q.difficulty}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg mb-3">
                    {q.question}
                  </h3>

                  {/* Code Snippet Box (Light/Dark Mode) */}
                  {q.code && (
                    <div className="mb-4 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-950">
                      <div className="bg-slate-200/80 dark:bg-slate-900 px-3 py-1 text-xs text-slate-600 dark:text-slate-400 font-mono border-b border-slate-300 dark:border-slate-800 flex items-center gap-1.5">
                        <Code className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                        <span className="font-semibold">{q.language === 'c' ? 'C Code Snippet' : 'C++ Code Snippet'}</span>
                      </div>
                      <pre className="p-3.5 text-xs sm:text-sm font-mono text-indigo-950 dark:text-emerald-300 overflow-x-auto whitespace-pre bg-white/60 dark:bg-transparent">
                        <code>{q.code}</code>
                      </pre>
                    </div>
                  )}

                  {/* 4 Choices */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {q.options.map((opt, optIdx) => {
                      const isCorrect = optIdx === q.correctAnswer;
                      return (
                        <div
                          key={optIdx}
                          className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between border transition-colors ${
                            isCorrect
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200'
                              : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <span
                              className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold shrink-0"
                              style={{ backgroundColor: OPTION_COLORS[optIdx] }}
                            >
                              {OPTION_LABELS[optIdx]}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isCorrect && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation */}
                  {q.explanation && (
                    <div className="mt-3 p-3 rounded-xl bg-purple-50/80 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/40 text-xs sm:text-sm text-purple-900 dark:text-purple-200 flex items-start space-x-2">
                      <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Explanation: </span>
                        <span>{q.explanation}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 2: CREATE CUSTOM QUIZ */}
      {activeTab === 'create' && (
        <form onSubmit={handleSaveQuiz} className="space-y-8">
          
          {/* Quiz Metadata */}
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quiz Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Quiz Title
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. Midterm C++ Pointers Drill"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Subject
                </label>
                <select
                  value={customSubjectId}
                  onChange={(e) => setCustomSubjectId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none"
                >
                  <option value="oops">OOPs in CPP</option>
                  <option value="dsa">DSA</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Language
                </label>
                <select
                  value={customLanguage}
                  onChange={(e) => setCustomLanguage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none"
                >
                  <option value="cpp">C++</option>
                  <option value="c">C</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Difficulty
                </label>
                <select
                  value={customDifficulty}
                  onChange={(e) => setCustomDifficulty(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  placeholder="Brief summary of syllabus topics covered in this quiz..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Question Builder List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Questions ({customQuestions.length})
              </h2>
              <button
                type="button"
                onClick={handleAddQuestion}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold flex items-center gap-1.5 shadow-lg shadow-purple-600/20"
              >
                <Plus className="w-4 h-4" />
                <span>Add Question</span>
              </button>
            </div>

            {customQuestions.map((q, qIdx) => (
              <div
                key={qIdx}
                className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-xl space-y-4 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/80">
                  <span className="font-black text-purple-600 dark:text-purple-400 text-base">
                    Question #{qIdx + 1}
                  </span>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-xs text-slate-600 dark:text-slate-300">
                      <span>Timer:</span>
                      <select
                        value={q.timeLimit}
                        onChange={(e) => handleUpdateQuestion(qIdx, 'timeLimit', Number(e.target.value))}
                        className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg px-2 py-1 text-xs focus:outline-none"
                      >
                        <option value={10}>10s</option>
                        <option value={15}>15s</option>
                        <option value={20}>20s</option>
                        <option value={30}>30s</option>
                        <option value={60}>60s</option>
                      </select>
                    </div>

                    {customQuestions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveQuestion(qIdx)}
                        className="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 transition-colors"
                        title="Delete question"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Question Text
                  </label>
                  <input
                    type="text"
                    value={q.questionText}
                    onChange={(e) => handleUpdateQuestion(qIdx, 'questionText', e.target.value)}
                    placeholder="e.g. What is the output of the following pointer arithmetic expression?"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm font-semibold focus:outline-none"
                  />
                </div>

                {/* Code Snippet Box (Editor Mode with Dark & Light Support) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                    <span>C++ Code Snippet (Optional - Formatted in Dark & Light Mode)</span>
                  </label>
                  <textarea
                    value={q.code}
                    onChange={(e) => handleUpdateQuestion(qIdx, 'code', e.target.value)}
                    placeholder={`#include <iostream>\nusing namespace std;\n\nint main() {\n  int x = 10;\n  cout << x;\n  return 0;\n}`}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 font-mono text-xs text-indigo-950 dark:text-emerald-300 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* 4 Choices */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                    4 Choices (Click circle to select Correct Answer)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {OPTION_LABELS.map((label, optIdx) => {
                      const isSelected = q.correctOptionIndex === optIdx;
                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-xl border-2 flex items-center space-x-3 transition-all ${
                            isSelected
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500'
                              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`correct_${qIdx}`}
                            checked={isSelected}
                            onChange={() => handleUpdateQuestion(qIdx, 'correctOptionIndex', optIdx)}
                            className="w-4 h-4 text-emerald-500 accent-emerald-500 cursor-pointer"
                          />
                          <span className="font-bold text-xs" style={{ color: OPTION_COLORS[optIdx] }}>
                            {label}
                          </span>
                          <input
                            type="text"
                            value={q.options[optIdx]}
                            onChange={(e) => handleUpdateOption(qIdx, optIdx, e.target.value)}
                            placeholder={`Choice ${label}`}
                            required
                            className="w-full bg-transparent text-slate-900 dark:text-white text-sm font-semibold focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Explanation */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Explanation (Revealed during results)
                  </label>
                  <input
                    type="text"
                    value={q.explanation}
                    onChange={(e) => handleUpdateQuestion(qIdx, 'explanation', e.target.value)}
                    placeholder="Explain why the chosen option is correct..."
                    className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-xs focus:outline-none"
                  />
                </div>

              </div>
            ))}

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-base shadow-xl shadow-emerald-600/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              >
                <Save className="w-5 h-5" />
                <span>{isSaving ? 'Saving Quiz...' : saveSuccess ? 'Saved! Redirecting...' : 'Save & Publish Quiz'}</span>
              </button>
            </div>

          </div>

        </form>
      )}

    </div>
  );
};
