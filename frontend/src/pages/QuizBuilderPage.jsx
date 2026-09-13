import React, { useState } from 'react';
import { useQuiz } from '../context/QuizContext.jsx';
import { AdminLogin } from '../components/AdminLogin.jsx';
import { SYLLABUS_UNITS, QUIZ_QUESTIONS } from '../data/quizData.js';
import { Plus, Trash2, CheckCircle2, Code, HelpCircle, Save, Filter, Search } from 'lucide-react';
import { getApiUrl } from '../services/api.js';

const OPTION_LABELS = ['A', 'B', 'C', 'D'];
const OPTION_COLORS = ['#e21b3c', '#1368ce', '#d89e00', '#26890c'];

export const QuizBuilderPage = ({ onNavigate }) => {
  const { isAdminAuthenticated, loginAdmin } = useQuiz();
  const [activeTab, setActiveTab] = useState('bank'); // 'bank' | 'create'
  
  // Question Bank Explorer state
  const [selectedUnit, setSelectedUnit] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Custom Quiz Creator state
  const [customTitle, setCustomTitle] = useState('');
  const [customDescription, setCustomDescription] = useState('');
  const [customDifficulty, setCustomDifficulty] = useState('medium');
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
            Browse 150 C++ MCQs or compose custom quizzes with timers & code snippets.
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
            Question Bank (150 MCQs)
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
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <select
                value={selectedUnit}
                onChange={(e) => setSelectedUnit(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-sm rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500"
              >
                <option value="all">All Syllabus Units</option>
                <option value="unit1">Unit 1: Concepts & Basics (75 Qs)</option>
                <option value="unit2">Unit 2: Pointers & Strings (75 Qs)</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search C++ code, concepts..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-sm text-slate-800 dark:text-slate-200 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold px-1">
            Showing {filteredQuestions.length} of {QUIZ_QUESTIONS.length} Questions
          </div>

          {/* Questions Grid */}
          <div className="space-y-4">
            {filteredQuestions.map((q, idx) => (
              <div
                key={q.id || idx}
                className="bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm hover:border-purple-300 dark:hover:border-slate-600 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/50">
                    {q.unitId.toUpperCase()} • Set {q.setId} • #{idx + 1}
                  </span>
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
                      <span className="font-semibold">C++ Snippet</span>
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
                        <span>
                          <strong className="mr-1.5 text-slate-400 dark:text-slate-500">[{OPTION_LABELS[optIdx]}]</strong>
                          {opt}
                        </span>
                        {isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 flex-shrink-0 ml-2" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                {q.explanation && (
                  <div className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl border border-slate-200 dark:border-slate-800/80 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Explanation:</strong> {q.explanation}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      )}

      {/* TAB 2: CREATE CUSTOM QUIZ */}
      {activeTab === 'create' && (
        <form onSubmit={handleSaveQuiz} className="space-y-8">
          
          {/* Metadata Card */}
          <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 transition-colors">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Quiz Details</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                Description (Optional)
              </label>
              <textarea
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
                placeholder="Brief summary of syllabus topics covered in this quiz..."
                rows={2}
                className="w-full px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:border-purple-500 text-slate-900 dark:text-white text-sm focus:outline-none"
              />
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
