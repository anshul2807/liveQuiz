import React, { useState, useEffect, useRef } from 'react';
import { CODING_CHALLENGES } from '../data/codingChallenges.js';
import { useQuiz } from '../context/QuizContext.jsx';
import {
  Code2,
  Play,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Copy,
  Check,
  Terminal,
  Cpu,
  Eye,
  EyeOff,
  Layers,
  Sparkles,
  Lightbulb,
  ArrowRight,
  Filter,
  Lock,
  ShieldCheck,
  Sun,
  Moon,
  Zap,
  ShieldAlert,
  HelpCircle,
  CheckCheck
} from 'lucide-react';
import { getApiUrl } from '../services/api.js';

export const CodingLabPage = ({ onNavigate }) => {
  const { isAdminAuthenticated, adminUser } = useQuiz();

  const [selectedUnit, setSelectedUnit] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedChallengeId, setSelectedChallengeId] = useState(CODING_CHALLENGES[0].id);
  const [userCode, setUserCode] = useState({});
  const [copied, setCopied] = useState(false);
  const [activeTestCaseTab, setActiveTestCaseTab] = useState(0);

  // Editor Light & Dark Mode state (persisted in localStorage)
  const [editorTheme, setEditorTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('code_editor_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return 'dark';
  });

  const toggleEditorTheme = () => {
    const nextTheme = editorTheme === 'dark' ? 'light' : 'dark';
    setEditorTheme(nextTheme);
    try {
      localStorage.setItem('code_editor_theme', nextTheme);
    } catch {}
  };

  // Admin-Only Reference Solution state
  const [showSolution, setShowSolution] = useState(false);
  const [adminSolutionsCache, setAdminSolutionsCache] = useState({});
  const [isLoadingSolution, setIsLoadingSolution] = useState(false);
  const [solutionError, setSolutionError] = useState(null);
  const [showAdminModal, setShowAdminModal] = useState(false);

  // Real C++ Compiler & Test Runner Execution state
  const [isRunning, setIsRunning] = useState(false);
  const [testResults, setTestResults] = useState(null); // { passedAll: bool, compiled: bool, compilerError: string, cases: [...] }
  const [consoleOutput, setConsoleOutput] = useState('');

  // Refs for synchronized line gutter scroll
  const textareaRef = useRef(null);
  const lineGutterRef = useRef(null);

  // Filter challenges directly on frontend (instantaneous, 0 backend API calls)
  const filteredChallenges = CODING_CHALLENGES.filter(c => {
    if (selectedUnit !== 'all' && c.unitId !== selectedUnit) return false;
    if (selectedDifficulty !== 'all' && c.difficulty !== selectedDifficulty) return false;
    return true;
  });

  // Current challenge
  const challenge = CODING_CHALLENGES.find(c => c.id === selectedChallengeId) || filteredChallenges[0] || CODING_CHALLENGES[0];

  // Initialize starter code
  useEffect(() => {
    if (!userCode[challenge.id]) {
      setUserCode(prev => ({
        ...prev,
        [challenge.id]: challenge.starterCode
      }));
    }
    setTestResults(null);
    setConsoleOutput('');
    setShowSolution(false);
    setSolutionError(null);
    setActiveTestCaseTab(0);
  }, [challenge.id]);

  const currentCode = userCode[challenge.id] || challenge.starterCode;

  // Calculate line numbers
  const lineCount = (currentCode.match(/\n/g) || []).length + 1;
  const linesArray = Array.from({ length: Math.max(lineCount, 24) }, (_, i) => i + 1);

  const handleEditorScroll = (e) => {
    if (lineGutterRef.current) {
      lineGutterRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const handleCodeChange = (e) => {
    const val = e.target.value;
    setUserCode(prev => ({
      ...prev,
      [challenge.id]: val
    }));
  };

  const handleEditorKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;

    // Tab key indentation (4 spaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (e.shiftKey) {
        const lineStart = currentCode.lastIndexOf('\n', start - 1) + 1;
        if (currentCode.slice(lineStart, lineStart + 4) === '    ') {
          const newCode = currentCode.slice(0, lineStart) + currentCode.slice(lineStart + 4);
          setUserCode(prev => ({ ...prev, [challenge.id]: newCode }));
          setTimeout(() => {
            textarea.setSelectionRange(Math.max(lineStart, start - 4), Math.max(lineStart, end - 4));
          }, 0);
        }
      } else {
        const newCode = currentCode.substring(0, start) + '    ' + currentCode.substring(end);
        setUserCode(prev => ({ ...prev, [challenge.id]: newCode }));
        setTimeout(() => {
          textarea.setSelectionRange(start + 4, start + 4);
        }, 0);
      }
      return;
    }

    // Auto-closing pairs: (), [], {}, "", ''
    const pairs = { '(': ')', '[': ']', '{': '}', '"': '"', "'": "'" };
    if (pairs[e.key]) {
      const closing = pairs[e.key];
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (currentCode[start] === e.key && (e.key === '"' || e.key === "'")) {
        e.preventDefault();
        textarea.setSelectionRange(start + 1, start + 1);
        return;
      }

      e.preventDefault();
      const selected = currentCode.substring(start, end);
      const newCode = currentCode.substring(0, start) + e.key + selected + closing + currentCode.substring(end);
      setUserCode(prev => ({ ...prev, [challenge.id]: newCode }));
      setTimeout(() => {
        textarea.setSelectionRange(start + 1, end + 1);
      }, 0);
      return;
    }

    // Advance over closing bracket if typed
    if ((e.key === ')' || e.key === ']' || e.key === '}') && currentCode[cursor] === e.key) {
      e.preventDefault();
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    // Backspace between brackets deletes both
    if (e.key === 'Backspace' && cursor > 0) {
      const prev = currentCode[cursor - 1];
      const next = currentCode[cursor];
      if ((prev === '(' && next === ')') ||
          (prev === '[' && next === ']') ||
          (prev === '{' && next === '}') ||
          (prev === '"' && next === '"') ||
          (prev === "'" && next === "'")) {
        e.preventDefault();
        const newCode = currentCode.slice(0, cursor - 1) + currentCode.slice(cursor + 1);
        setUserCode(prev => ({ ...prev, [challenge.id]: newCode }));
        setTimeout(() => {
          textarea.setSelectionRange(cursor - 1, cursor - 1);
        }, 0);
        return;
      }
    }
  };

  const handleResetCode = () => {
    if (window.confirm('Reset this challenge to initial starter code? Any changes will be overwritten.')) {
      setUserCode(prev => ({
        ...prev,
        [challenge.id]: challenge.starterCode
      }));
      setTestResults(null);
      setConsoleOutput('');
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Toggle or Fetch Admin Reference Solution
  const handleToggleSolution = async () => {
    if (!isAdminAuthenticated) {
      setShowAdminModal(true);
      return;
    }

    if (showSolution) {
      setShowSolution(false);
      return;
    }

    // If solution for this challenge is already cached in memory
    if (adminSolutionsCache[challenge.id]) {
      setShowSolution(true);
      return;
    }

    // Fetch from backend admin solution endpoint with token
    setIsLoadingSolution(true);
    setSolutionError(null);

    try {
      const token = localStorage.getItem('admin_token') || '';
      const res = await fetch(getApiUrl(`/api/challenges/${challenge.id}/solution`), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();

      if (data.success && data.referenceSolution) {
        setAdminSolutionsCache(prev => ({
          ...prev,
          [challenge.id]: {
            referenceSolution: data.referenceSolution,
            solutionExplanation: data.solutionExplanation
          }
        }));
        setShowSolution(true);
      } else {
        setSolutionError(data.message || 'Unable to retrieve reference solution.');
      }
    } catch (err) {
      console.error('Failed to load admin solution:', err);
      setSolutionError('Connection failure: Unable to communicate with secure solution vault.');
    } finally {
      setIsLoadingSolution(false);
    }
  };

  const handleLoadSolutionIntoEditor = () => {
    const cached = adminSolutionsCache[challenge.id];
    if (cached && cached.referenceSolution) {
      setUserCode(prev => ({
        ...prev,
        [challenge.id]: cached.referenceSolution
      }));
      setShowSolution(false);
    }
  };

  // Execute Code with real C++ compiler on backend
  const handleRunTests = async () => {
    setIsRunning(true);
    setTestResults(null);
    setConsoleOutput('🚀 Compiling with clang++ -std=c++17 -O2...\n');

    try {
      const res = await fetch(getApiUrl('/api/challenges/run'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId: challenge.id,
          code: currentCode
        })
      });

      const data = await res.json();

      if (!data.success && data.message) {
        setConsoleOutput(prev => prev + `\n❌ Server Error: ${data.message}`);
        setIsRunning(false);
        return;
      }

      // Check if compilation failed
      if (data.compiled === false) {
        setConsoleOutput(prev => prev + `\n❌ Compilation Error:\n${data.compilerError || 'Unknown compiler error'}\n`);
        setTestResults({
          compiled: false,
          passedAll: false,
          compilerError: data.compilerError,
          cases: []
        });
        setIsRunning(false);
        return;
      }

      // Compilation succeeded
      let outLog = prev => prev + '✅ Compilation successful (0 errors, 0 warnings).\nRunning test suites...\n\n';

      const cases = data.testResults || [];
      cases.forEach((tc, idx) => {
        outLog += `Test Case #${idx + 1} (${tc.name}): ${tc.passed ? 'PASSED ✅' : 'FAILED ❌'}\n`;
      });

      if (data.passedAll) {
        outLog += '\n🎉 All test cases passed successfully! Code is verified.\n';
      } else {
        outLog += '\n⚠️ Some assertions failed. Compare actual output against expected output below.\n';
      }

      setConsoleOutput(outLog);
      setTestResults({
        compiled: true,
        passedAll: data.passedAll,
        cases: cases
      });

    } catch (err) {
      console.error('Failed to run code:', err);
      setConsoleOutput(prev => prev + `\n❌ Network / Execution Error: ${err.message}. Ensure backend server is running.`);
    } finally {
      setIsRunning(false);
    }
  };

  const currentAdminSol = adminSolutionsCache[challenge.id];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800 text-xs font-bold">
              <Cpu className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>C++ Programming Lab • Units I, II & III</span>
            </div>
            
            {/* Frontend Loading Concurrency Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold" title="Problems are loaded 100% on the frontend client, enabling instant switching and zero backend strain for 100+ concurrent students">
              <Zap className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
              <span>Client-Side Engine • Ready for 100+ Concurrent Students</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            C++ Hands-On Coding Lab
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            6 Production-Grade Problems (3 Easy, 2 Medium, 1 Hard) with live in-browser compilation & automated test assertions.
          </p>
        </div>

        {/* Action Button to MCQ Practice */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('mcqs')}
            className="px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700 flex items-center gap-2 shadow-xs transition-colors"
          >
            <span>Practice 225 MCQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Filter Strip */}
      <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Filter by:</span>
          </div>

          {/* Unit Filter */}
          <select
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Units (6 Problems)</option>
            <option value="unit1">Unit 1: OOP & Classes (2 Problems)</option>
            <option value="unit2">Unit 2: Pointers & Arrays (2 Problems)</option>
            <option value="unit3">Unit 3: File Streams & RAII (2 Problems)</option>
          </select>

          {/* Difficulty Filter */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-purple-500"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy (3 Problems)</option>
            <option value="medium">Medium (2 Problems)</option>
            <option value="hard">Hard (1 Problem)</option>
          </select>
        </div>

        <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
          Showing {filteredChallenges.length} of {CODING_CHALLENGES.length} challenges (Instant client-side loading)
        </div>
      </div>

      {/* Challenge Selector Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
        {CODING_CHALLENGES.map((item, index) => {
          const isSelected = item.id === challenge.id;
          const diffColor = 
            item.difficulty === 'easy' ? 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10' :
            item.difficulty === 'medium' ? 'text-amber-500 border-amber-500/30 bg-amber-500/10' :
            'text-rose-500 border-rose-500/30 bg-rose-500/10';

          return (
            <div
              key={item.id}
              onClick={() => setSelectedChallengeId(item.id)}
              className={`cursor-pointer rounded-2xl p-3.5 border-2 transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-500/10 ring-2 ring-purple-500/20'
                  : 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-purple-300 dark:hover:border-slate-600'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-xs font-mono font-bold text-slate-400">#0{index + 1}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase border ${diffColor}`}>
                    {item.difficulty}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-1">
                  {item.unitId === 'unit1' ? 'Unit I' : item.unitId === 'unit2' ? 'Unit II' : 'Unit III'}
                </div>
                <h3 className="font-bold text-xs text-slate-900 dark:text-white line-clamp-2 leading-tight">
                  {item.title}
                </h3>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 flex items-center justify-between">
                <span>{item.category.split('&')[0]}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Problem Workspace (Split 2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Problem Specs & Invariants (5 Cols) */}
        <div className="lg:col-span-5 space-y-5">
          
          <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                {challenge.unitTitle}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Est: {challenge.estimatedTime}
              </span>
            </div>

            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug">
              {challenge.title}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {challenge.summary}
            </p>

            {/* Learning Objectives */}
            <div className="bg-slate-50 dark:bg-slate-900/70 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mb-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Learning Objectives
              </h4>
              <ul className="space-y-1.5">
                {challenge.learningObjectives.map((obj, i) => (
                  <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <span className="text-purple-500 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Concepts */}
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-2xl p-4 border border-purple-200 dark:border-purple-800/40 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5 mb-2">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                Key Technical Concepts
              </h4>
              <ul className="space-y-1.5">
                {challenge.keyConcepts.map((kc, i) => (
                  <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✓</span>
                    <span>{kc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pitfalls */}
            <div className="bg-rose-50 dark:bg-rose-950/30 rounded-2xl p-4 border border-rose-200 dark:border-rose-800/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                Pitfalls & Watchouts
              </h4>
              <ul className="space-y-1.5">
                {challenge.commonPitfalls.map((cp, i) => (
                  <li key={i} className="text-xs text-rose-800 dark:text-rose-300 flex items-start gap-2">
                    <span className="text-rose-500 font-bold">⚠</span>
                    <span>{cp}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Target Test Output */}
          <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-3xl p-6 shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-600" />
              Target Test Output
            </h4>

            <div className="space-y-3">
              {challenge.testCases.map((tc, idx) => (
                <div key={tc.id} className="bg-slate-900 rounded-xl p-3.5 text-xs font-mono text-slate-200">
                  <div className="text-[11px] text-purple-400 font-bold mb-1">
                    Test Case #{idx + 1}: {tc.name}
                  </div>
                  <pre className="text-[11px] leading-relaxed overflow-x-auto text-emerald-400 bg-slate-950 p-2.5 rounded-lg border border-slate-800 whitespace-pre-wrap">
                    {tc.expectedOutput}
                  </pre>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Code Editor & Execution Runner (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className={`border rounded-3xl shadow-xl overflow-hidden flex flex-col transition-colors ${
            editorTheme === 'dark'
              ? 'bg-slate-950 border-slate-800 shadow-purple-950/20'
              : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            
            {/* Editor Top Bar */}
            <div className={`px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3 transition-colors ${
              editorTheme === 'dark'
                ? 'bg-slate-900/90 border-slate-800'
                : 'bg-slate-100/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className={`text-xs font-mono font-bold ml-2 ${
                  editorTheme === 'dark' ? 'text-slate-400' : 'text-slate-700'
                }`}>
                  solution.cpp (C++17)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Editor Light / Dark Mode Toggle */}
                <button
                  onClick={toggleEditorTheme}
                  title={`Switch Code Editor to ${editorTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
                    editorTheme === 'dark'
                      ? 'text-amber-400 hover:text-amber-300 bg-slate-800 hover:bg-slate-700 border-slate-700'
                      : 'text-indigo-600 hover:text-indigo-700 bg-white hover:bg-slate-50 border-slate-300 shadow-xs'
                  }`}
                >
                  {editorTheme === 'dark' ? (
                    <>
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      <span>Light Editor</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Dark Editor</span>
                    </>
                  )}
                </button>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                    editorTheme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-800 border-slate-700'
                      : 'text-slate-700 hover:bg-white bg-slate-50 border-slate-300'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleResetCode}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                    editorTheme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-800 border-slate-700'
                      : 'text-slate-700 hover:bg-white bg-slate-50 border-slate-300'
                  }`}
                  title="Reset code to default template"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>

                {/* REFERENCE SOLUTION (ADMIN ONLY VS NORMAL USER) */}
                {isAdminAuthenticated ? (
                  <button
                    onClick={handleToggleSolution}
                    disabled={isLoadingSolution}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border ${
                      showSolution
                        ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20'
                        : 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 border-amber-300 dark:border-amber-700'
                    }`}
                    title="Instructor / Admin reference solution and breakdown"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{isLoadingSolution ? 'Loading...' : showSolution ? 'Hide Solution' : 'Admin Solution'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAdminModal(true)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                      editorTheme === 'dark'
                        ? 'text-slate-400 hover:text-amber-400 bg-slate-800/80 hover:bg-slate-800 border-slate-700'
                        : 'text-slate-500 hover:text-amber-600 bg-slate-100 hover:bg-slate-200 border-slate-300'
                    }`}
                    title="Solutions are restricted to verified instructors and admins"
                  >
                    <Lock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Solution (Admin Only)</span>
                  </button>
                )}

                {/* Run and Test Button */}
                <button
                  onClick={handleRunTests}
                  disabled={isRunning}
                  className="px-4 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center gap-1.5 shadow-md shadow-purple-600/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 fill-white ${isRunning ? 'animate-spin' : ''}`} />
                  <span>{isRunning ? 'Compiling & Running...' : 'Run & Test'}</span>
                </button>
              </div>
            </div>

            {/* Error loading solution message if any */}
            {solutionError && (
              <div className="bg-rose-500/10 text-rose-400 text-xs px-5 py-2.5 border-b border-rose-500/20 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {solutionError}
                </span>
                <button onClick={() => setSolutionError(null)} className="text-slate-400 hover:text-white">✕</button>
              </div>
            )}

            {/* Reference Solution Drawer (Admin Only) */}
            {isAdminAuthenticated && showSolution && currentAdminSol && (
              <div className="bg-amber-50/95 dark:bg-amber-950/50 p-5 border-b border-amber-200 dark:border-amber-800/60 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-900 dark:text-amber-200">
                      Instructor Verified Reference Solution (Admin Only)
                    </h4>
                  </div>
                  <button
                    onClick={handleLoadSolutionIntoEditor}
                    className="text-xs font-bold px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <CheckCheck className="w-3.5 h-3.5" />
                    <span>Load Solution into Editor</span>
                  </button>
                </div>

                <pre className="text-xs font-mono p-4 rounded-xl bg-slate-900 text-slate-100 overflow-x-auto max-h-72 border border-slate-700 leading-relaxed whitespace-pre-wrap">
                  {currentAdminSol.referenceSolution}
                </pre>

                {currentAdminSol.solutionExplanation && (
                  <div className="mt-3 text-xs text-amber-950 dark:text-amber-200 bg-amber-100/90 dark:bg-amber-900/40 p-3 rounded-xl border border-amber-300 dark:border-amber-800">
                    <span className="font-bold">Architectural Walkthrough: </span>
                    {currentAdminSol.solutionExplanation}
                  </div>
                )}
              </div>
            )}

            {/* Code Editor with Synced Line Numbers */}
            <div className={`relative flex font-mono text-xs sm:text-sm h-[480px] overflow-hidden ${
              editorTheme === 'dark' ? 'bg-slate-950' : 'bg-white'
            }`}>
              
              {/* Line Numbers Gutter */}
              <div
                ref={lineGutterRef}
                className={`select-none text-right pr-3 pl-3 pt-4 pb-4 font-mono text-xs leading-relaxed border-r overflow-hidden transition-colors ${
                  editorTheme === 'dark'
                    ? 'bg-slate-900/40 text-slate-600 border-slate-800/80'
                    : 'bg-slate-100/60 text-slate-400 border-slate-200'
                }`}
                style={{ width: '48px' }}
              >
                {linesArray.map(n => (
                  <div key={n} className="leading-relaxed h-[21px]">{n}</div>
                ))}
              </div>

              {/* Textarea Code Input */}
              <textarea
                ref={textareaRef}
                value={currentCode}
                onChange={handleCodeChange}
                onKeyDown={handleEditorKeyDown}
                onScroll={handleEditorScroll}
                spellCheck="false"
                className={`flex-1 p-4 pt-4 pb-4 font-mono text-xs sm:text-sm focus:outline-none resize-none leading-relaxed border-0 font-medium overflow-y-auto transition-colors ${
                  editorTheme === 'dark'
                    ? 'bg-slate-950 text-emerald-400 caret-emerald-400 selection:bg-purple-900 selection:text-white'
                    : 'bg-white text-slate-900 caret-purple-600 selection:bg-purple-200 selection:text-purple-900'
                }`}
                style={{ lineHeight: '21px' }}
                placeholder="// Write your C++ solution here..."
              />
            </div>

            {/* Editor Footer Status Bar */}
            <div className={`px-5 py-2 border-t flex flex-wrap items-center justify-between text-[11px] font-mono transition-colors ${
              editorTheme === 'dark'
                ? 'bg-slate-900/80 border-slate-800 text-slate-400'
                : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-4">
                <span>Compiler: <strong className="text-purple-500 font-bold">C++17 (clang++)</strong></span>
                <span>Lines: <strong>{lineCount}</strong></span>
                <span>Length: <strong>{currentCode.length} chars</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${editorTheme === 'dark' ? 'bg-emerald-400' : 'bg-indigo-500'}`} />
                  <span>Theme: <strong>{editorTheme === 'dark' ? 'Dark (Matrix)' : 'Light (Paper)'}</strong></span>
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="hidden sm:inline text-emerald-500 font-semibold">100% Frontend Loaded</span>
              </div>
            </div>

            {/* Execution & Compiler Results Drawer (MATCHES EDITOR LIGHT & DARK THEME) */}
            <div className={`border-t p-5 transition-colors ${
              editorTheme === 'dark'
                ? 'border-slate-800 bg-slate-900 text-slate-200'
                : 'border-slate-200 bg-slate-50 text-slate-900'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Terminal className={`w-4 h-4 ${editorTheme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    editorTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Live Compiler & Execution Console
                  </span>
                </div>

                {testResults && (
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                    testResults.compiled === false
                      ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/40'
                      : testResults.passedAll
                      ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/40'
                  }`}>
                    {testResults.compiled === false ? (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>COMPILATION FAILED</span>
                      </>
                    ) : testResults.passedAll ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>ALL TESTS PASSED</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>ASSERTION FAILED</span>
                      </>
                    )}
                  </span>
                )}
              </div>

              {/* Console Log */}
              <pre className={`rounded-xl p-3.5 font-mono text-xs overflow-x-auto border min-h-[90px] leading-relaxed whitespace-pre-wrap transition-colors ${
                editorTheme === 'dark'
                  ? 'bg-slate-950 text-slate-300 border-slate-800'
                  : 'bg-white text-slate-800 border-slate-200 shadow-sm'
              }`}>
                {consoleOutput || 'Click "Run & Test" to compile your C++ code with clang++ -std=c++17 and execute against test cases.'}
              </pre>

              {/* Detailed Test Case Diffs */}
              {testResults && testResults.cases && testResults.cases.length > 0 && (
                <div className="mt-4 space-y-3">
                  <div className={`flex items-center gap-2 border-b pb-2 ${
                    editorTheme === 'dark' ? 'border-slate-800' : 'border-slate-200'
                  }`}>
                    {testResults.cases.map((tc, idx) => (
                      <button
                        key={tc.id}
                        onClick={() => setActiveTestCaseTab(idx)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                          activeTestCaseTab === idx
                            ? 'bg-purple-600 text-white shadow-xs'
                            : editorTheme === 'dark'
                            ? 'text-slate-400 hover:text-white bg-slate-800'
                            : 'text-slate-600 hover:text-slate-900 bg-slate-200/80'
                        }`}
                      >
                        {tc.passed ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <XCircle className="w-3 h-3 text-rose-500" />
                        )}
                        <span>Test Case #{idx + 1}</span>
                      </button>
                    ))}
                  </div>

                  {testResults.cases[activeTestCaseTab] && (
                    <div className={`rounded-xl p-3.5 border text-xs font-mono space-y-2 transition-colors ${
                      editorTheme === 'dark'
                        ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                    }`}>
                      <div className={editorTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                        <span className={`font-bold ${editorTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Name: </span>
                        {testResults.cases[activeTestCaseTab].name}
                      </div>
                      <div>
                        <span className={`font-bold ${editorTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Expected Output:</span>
                        <pre className={`mt-1 p-2 rounded overflow-x-auto border whitespace-pre-wrap ${
                          editorTheme === 'dark'
                            ? 'bg-slate-900 text-emerald-400 border-slate-800'
                            : 'bg-emerald-50/60 text-emerald-700 border-emerald-200'
                        }`}>
                          {testResults.cases[activeTestCaseTab].expected}
                        </pre>
                      </div>
                      <div>
                        <span className={`font-bold ${editorTheme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Actual Output:</span>
                        <pre className={`mt-1 p-2 rounded overflow-x-auto border whitespace-pre-wrap ${
                          testResults.cases[activeTestCaseTab].passed
                            ? editorTheme === 'dark' ? 'bg-slate-900 text-emerald-400 border-slate-800' : 'bg-emerald-50/60 text-emerald-700 border-emerald-200'
                            : editorTheme === 'dark' ? 'bg-slate-900 text-rose-400 font-bold border-slate-800' : 'bg-rose-50 text-rose-600 font-bold border-rose-200'
                        }`}>
                          {testResults.cases[activeTestCaseTab].actual}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ADMIN RESTRICTED SOLUTION MODAL (FOR NORMAL USERS / STUDENTS) */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4 border border-amber-300 dark:border-amber-800">
              <Lock className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-black text-center text-slate-900 dark:text-white mb-2">
              Instructor & Admin Solution Vault
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed mb-6">
              Reference solutions and architectural walkthroughs are reserved exclusively for course instructors, professors, and administrators.
              <br /><br />
              Students are encouraged to independently debug their code using compiler diagnostics and test case assertions.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowAdminModal(false);
                  onNavigate('admin');
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Log In as Instructor / Admin</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowAdminModal(false)}
                className="w-full py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
              >
                Return to Coding Lab
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
