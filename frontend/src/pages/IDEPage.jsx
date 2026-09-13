import React, { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Play,
  Terminal,
  Plus,
  Upload,
  FileText,
  Trash2,
  Download,
  Copy,
  Check,
  RotateCcw,
  Sun,
  Moon,
  Zap,
  FolderOpen,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileCode,
  Layers,
  Sparkles,
  HelpCircle,
  Clock,
  Eye,
  CheckCheck
} from 'lucide-react';
import { getApiUrl } from '../services/api.js';

const C_BOILERPLATE = `#include <stdio.h>
#include <stdlib.h>

int main() {
    printf("⚡ Welcome to the LiveQuiz C IDE!\\n");
    printf("Compiled with clang (C17).\\n\\n");

    // Optional: read from custom stdin
    char name[64];
    printf("Enter your name: ");
    if (scanf("%63s", name) == 1) {
        printf("Hello, %s!\\n", name);
    } else {
        printf("No input received. (Tip: Enter text in the 'Standard Input (Stdin)' tab below)\\n");
    }

    return 0;
}`;

const C_FILE_STREAM_DEMO = `#include <stdio.h>
#include <stdlib.h>

int main() {
    // 1. Write to a file using standard I/O (FILE*)
    FILE *fp = fopen("output.txt", "w");
    if (!fp) {
        perror("Failed to open output.txt for writing");
        return 1;
    }
    fprintf(fp, "Report generated from C program\\n");
    fprintf(fp, "Line 1: System initialized.\\n");
    fprintf(fp, "Line 2: Data processed successfully.\\n");
    fclose(fp);
    printf("✅ Successfully wrote to output.txt! Check the 'Output Files' tab below.\\n");

    // 2. Read from an auxiliary file (create 'input.txt' using '+ New File')
    FILE *in = fopen("input.txt", "r");
    if (in) {
        char line[256];
        printf("\\n--- Reading from input.txt ---\\n");
        while (fgets(line, sizeof(line), in)) {
            printf("%s", line);
        }
        fclose(in);
    } else {
        printf("\\n(Tip: Click '+ New File' in the Virtual Files panel, create 'input.txt', and run again)\\n");
    }

    return 0;
}`;

const CPP_BOILERPLATE = `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::cout << "⚡ Welcome to the LiveQuiz C++ IDE!\\n";
    std::cout << "Compiled with Apple clang++ (C++17).\\n\\n";

    // Optional: read from custom stdin
    std::string name;
    std::cout << "Enter your name: ";
    if (std::cin >> name) {
        std::cout << "Hello, " << name << "! Welcome to the C++ playground.\\n";
    } else {
        std::cout << "No input provided. (Tip: Type in the 'Standard Input (Stdin)' tab below)\\n";
    }

    return 0;
}`;

const CPP_FILE_STREAM_DEMO = `#include <iostream>
#include <fstream>
#include <string>
#include <vector>

int main() {
    std::cout << "--- C++ File Stream Demonstration ---\\n";

    // 1. Write to an output file using std::ofstream
    std::ofstream outFile("results.txt");
    if (!outFile) {
        std::cerr << "Error creating results.txt\\n";
        return 1;
    }
    outFile << "=== C++ File Stream Output ===\\n";
    outFile << "Timestamp: 2026-09-13\\n";
    outFile << "Status: Verified\\n";
    outFile << "Scores: 95, 88, 92, 100\\n";
    outFile.close();

    std::cout << "✅ Successfully created 'results.txt'! Check the 'Output Files' tab below.\\n";

    // 2. Read from an input file (e.g. create 'data.txt' via '+ New File')
    std::ifstream inFile("data.txt");
    if (inFile) {
        std::cout << "\\n--- Reading data.txt ---\\n";
        std::string line;
        while (std::getline(inFile, line)) {
            std::cout << line << "\\n";
        }
        inFile.close();
    } else {
        std::cout << "\\n(Tip: Click '+ New File' or 'Upload File', add 'data.txt', and rerun!)\\n";
    }

    return 0;
}`;

// Autocompletion Dictionaries
const C_AUTOCOMPLETE = [
  { label: '#include <stdio.h>', insert: '#include <stdio.h>\n', type: 'directive' },
  { label: '#include <stdlib.h>', insert: '#include <stdlib.h>\n', type: 'directive' },
  { label: '#include <string.h>', insert: '#include <string.h>\n', type: 'directive' },
  { label: '#include <math.h>', insert: '#include <math.h>\n', type: 'directive' },
  { label: 'printf', insert: 'printf("%s\\n", );', type: 'function' },
  { label: 'scanf', insert: 'scanf("%d", &);', type: 'function' },
  { label: 'fopen', insert: 'FILE *fp = fopen("output.txt", "w");', type: 'function' },
  { label: 'fclose', insert: 'fclose(fp);', type: 'function' },
  { label: 'fprintf', insert: 'fprintf(fp, "%s\\n", );', type: 'function' },
  { label: 'fscanf', insert: 'fscanf(fp, "%d", &);', type: 'function' },
  { label: 'fgets', insert: 'fgets(buffer, sizeof(buffer), fp);', type: 'function' },
  { label: 'malloc', insert: '(int*)malloc(n * sizeof(int));', type: 'function' },
  { label: 'free', insert: 'free(ptr);\nptr = NULL;', type: 'function' },
  { label: 'for', insert: 'for (int i = 0; i < n; i++) {\n    \n}', type: 'snippet' },
  { label: 'while', insert: 'while (condition) {\n    \n}', type: 'snippet' },
  { label: 'if', insert: 'if (condition) {\n    \n}', type: 'snippet' },
  { label: 'struct', insert: 'struct Record {\n    int id;\n    char name[32];\n};', type: 'snippet' },
  { label: 'return 0;', insert: 'return 0;', type: 'statement' },
  { label: 'int', insert: 'int ', type: 'keyword' },
  { label: 'void', insert: 'void ', type: 'keyword' },
  { label: 'char', insert: 'char ', type: 'keyword' },
  { label: 'double', insert: 'double ', type: 'keyword' }
];

const CPP_AUTOCOMPLETE = [
  { label: '#include <iostream>', insert: '#include <iostream>\n', type: 'directive' },
  { label: '#include <vector>', insert: '#include <vector>\n', type: 'directive' },
  { label: '#include <string>', insert: '#include <string>\n', type: 'directive' },
  { label: '#include <fstream>', insert: '#include <fstream>\n', type: 'directive' },
  { label: '#include <iomanip>', insert: '#include <iomanip>\n', type: 'directive' },
  { label: '#include <algorithm>', insert: '#include <algorithm>\n', type: 'directive' },
  { label: 'std::cout', insert: 'std::cout <<  << "\\n";', type: 'function' },
  { label: 'std::cin', insert: 'std::cin >> ;', type: 'function' },
  { label: 'std::endl', insert: 'std::endl;', type: 'keyword' },
  { label: 'std::vector', insert: 'std::vector<int> vec;', type: 'type' },
  { label: 'std::string', insert: 'std::string str;', type: 'type' },
  { label: 'std::ifstream', insert: 'std::ifstream in("filename.txt");\nif (!in) {\n    std::cerr << "Cannot open file\\n";\n}\n', type: 'snippet' },
  { label: 'std::ofstream', insert: 'std::ofstream out("output.txt");\nif (!out) {\n    std::cerr << "Cannot open file\\n";\n}\nout << "data" << "\\n";\nout.close();\n', type: 'snippet' },
  { label: 'std::fstream', insert: 'std::fstream file("db.dat", std::ios::in | std::ios::out | std::ios::binary);', type: 'snippet' },
  { label: 'class', insert: 'class MyClass {\nprivate:\n    int id;\npublic:\n    MyClass(int id) : id(id) {}\n    ~MyClass() {}\n};', type: 'snippet' },
  { label: 'struct', insert: 'struct Record {\n    int id;\n    char name[32];\n    double score;\n};', type: 'snippet' },
  { label: 'for (range)', insert: 'for (const auto& item : items) {\n    \n}', type: 'snippet' },
  { label: 'for (index)', insert: 'for (size_t i = 0; i < n; ++i) {\n    \n}', type: 'snippet' },
  { label: 'while', insert: 'while (condition) {\n    \n}', type: 'snippet' },
  { label: 'if', insert: 'if (condition) {\n    \n}', type: 'snippet' },
  { label: 'nullptr', insert: 'nullptr', type: 'keyword' },
  { label: 'return 0;', insert: 'return 0;', type: 'statement' },
  { label: 'using namespace std;', insert: 'using namespace std;\n', type: 'directive' }
];

export const IDEPage = ({ onNavigate }) => {
  const [language, setLanguage] = useState('cpp'); // 'c' | 'cpp'
  const [code, setCode] = useState(CPP_BOILERPLATE);
  const [stdinInput, setStdinInput] = useState('');
  const [activeConsoleTab, setActiveConsoleTab] = useState('terminal'); // 'terminal' | 'stdin' | 'outputFiles'
  const [copied, setCopied] = useState(false);

  // Autocompletion State
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [activePrefix, setActivePrefix] = useState('');

  // Virtual Filesystem: Array of { id, name, content, isBinary, base64, sizeBytes }
  const [virtualFiles, setVirtualFiles] = useState([
    {
      id: 'vf-1',
      name: 'input.txt',
      content: 'Sample data line 1\nSample data line 2\n42 100 256',
      isBinary: false,
      sizeBytes: 45
    }
  ]);

  // Selected file modal
  const [activeFileId, setActiveFileId] = useState(null);
  const [showNewFileModal, setShowNewFileModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileContent, setNewFileContent] = useState('');

  // Execution State
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [outputFiles, setOutputFiles] = useState([]);

  // Editor Theme (Light vs Dark) - Drives BOTH Editor AND Output
  const [editorTheme, setEditorTheme] = useState(() => {
    try {
      return localStorage.getItem('ide_editor_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  const toggleEditorTheme = () => {
    const next = editorTheme === 'dark' ? 'light' : 'dark';
    setEditorTheme(next);
    try {
      localStorage.setItem('ide_editor_theme', next);
    } catch {}
  };

  // Refs
  const textareaRef = useRef(null);
  const lineGutterRef = useRef(null);
  const fileUploadInputRef = useRef(null);

  const handleEditorScroll = (e) => {
    if (lineGutterRef.current) {
      lineGutterRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const lineCount = (code.match(/\n/g) || []).length + 1;
  const linesArray = Array.from({ length: Math.max(lineCount, 26) }, (_, i) => i + 1);

  // Apply Autocompletion Suggestion
  const applySuggestion = (suggestion) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;
    const textBefore = code.slice(0, cursor);
    const textAfter = code.slice(cursor);

    // Replace current active prefix
    const prefixLen = activePrefix.length;
    const newTextBefore = textBefore.slice(0, textBefore.length - prefixLen);
    const insertVal = suggestion.insert;

    const newCode = newTextBefore + insertVal + textAfter;
    setCode(newCode);
    setSuggestions([]);

    // Reposition cursor
    setTimeout(() => {
      textarea.focus();
      const newCursor = newTextBefore.length + insertVal.length;
      textarea.setSelectionRange(newCursor, newCursor);
    }, 10);
  };

  // Keyboard Handler with Tab Indent, Auto-closing Brackets, and Autocomplete Navigation
  const handleEditorKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;

    // 1. If autocomplete popup is active, navigate or accept
    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => (prev + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === 'Enter' || e.key === 'Tab') {
        e.preventDefault();
        applySuggestion(suggestions[selectedSuggestionIndex]);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setSuggestions([]);
        return;
      }
    }

    // 2. Tab key indentation (4 spaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      if (e.shiftKey) {
        // Shift+Tab: Unindent 4 spaces
        const lineStart = code.lastIndexOf('\n', start - 1) + 1;
        if (code.slice(lineStart, lineStart + 4) === '    ') {
          const newCode = code.slice(0, lineStart) + code.slice(lineStart + 4);
          setCode(newCode);
          setTimeout(() => {
            textarea.setSelectionRange(Math.max(lineStart, start - 4), Math.max(lineStart, end - 4));
          }, 0);
        }
      } else {
        // Tab: Insert 4 spaces
        const newCode = code.substring(0, start) + '    ' + code.substring(end);
        setCode(newCode);
        setTimeout(() => {
          textarea.setSelectionRange(start + 4, start + 4);
        }, 0);
      }
      return;
    }

    // 3. Auto-closing pairs: (), [], {}, "", ''
    const pairs = {
      '(': ')',
      '[': ']',
      '{': '}',
      '"': '"',
      "'": "'"
    };

    if (pairs[e.key]) {
      const closing = pairs[e.key];
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      // Special case: if user types closing bracket when next char is already closing, just advance
      if (code[start] === e.key && (e.key === '"' || e.key === "'")) {
        e.preventDefault();
        textarea.setSelectionRange(start + 1, start + 1);
        return;
      }

      e.preventDefault();
      const selected = code.substring(start, end);
      const newCode = code.substring(0, start) + e.key + selected + closing + code.substring(end);
      setCode(newCode);

      setTimeout(() => {
        textarea.setSelectionRange(start + 1, end + 1);
      }, 0);
      return;
    }

    // Advance over closing bracket if typed
    if ((e.key === ')' || e.key === ']' || e.key === '}') && code[cursor] === e.key) {
      e.preventDefault();
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    // 4. Backspace between brackets deletes both
    if (e.key === 'Backspace' && cursor > 0) {
      const prev = code[cursor - 1];
      const next = code[cursor];
      if ((prev === '(' && next === ')') ||
          (prev === '[' && next === ']') ||
          (prev === '{' && next === '}') ||
          (prev === '"' && next === '"') ||
          (prev === "'" && next === "'")) {
        e.preventDefault();
        const newCode = code.slice(0, cursor - 1) + code.slice(cursor + 1);
        setCode(newCode);
        setTimeout(() => {
          textarea.setSelectionRange(cursor - 1, cursor - 1);
        }, 0);
        return;
      }
    }
  };

  // Trigger Autocompletion when typing words
  const handleCodeChange = (e) => {
    const val = e.target.value;
    setCode(val);

    const cursor = e.target.selectionStart;
    const textBefore = val.slice(0, cursor);

    // Look for current word prefix
    const match = textBefore.match(/([a-zA-Z_#:][a-zA-Z0-9_#:]*)$/);
    if (match) {
      const prefix = match[1];
      setActivePrefix(prefix);

      if (prefix.length >= 2) {
        const pool = language === 'c' ? C_AUTOCOMPLETE : CPP_AUTOCOMPLETE;
        const filtered = pool.filter(item =>
          item.label.toLowerCase().startsWith(prefix.toLowerCase()) ||
          item.insert.toLowerCase().startsWith(prefix.toLowerCase())
        ).slice(0, 6);

        if (filtered.length > 0) {
          setSuggestions(filtered);
          setSelectedSuggestionIndex(0);
          return;
        }
      }
    }

    setSuggestions([]);
    setActivePrefix('');
  };

  // Switch Language
  const handleLanguageChange = (newLang) => {
    if (newLang === language) return;
    const isSwitchingToC = newLang === 'c';
    const msg = `Switch to ${isSwitchingToC ? 'C (C17)' : 'C++ (C++17)'}? Your current code in the editor will be replaced with a clean starter template.`;
    if (code.trim() && !window.confirm(msg)) {
      return;
    }
    setLanguage(newLang);
    setCode(isSwitchingToC ? C_BOILERPLATE : CPP_BOILERPLATE);
    setExecutionResult(null);
    setConsoleOutput('');
    setOutputFiles([]);
    setSuggestions([]);
  };

  // Load Templates
  const handleLoadTemplate = (type) => {
    if (language === 'c') {
      setCode(type === 'stream' ? C_FILE_STREAM_DEMO : C_BOILERPLATE);
    } else {
      setCode(type === 'stream' ? CPP_FILE_STREAM_DEMO : CPP_BOILERPLATE);
    }
  };

  // Copy Code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset Code
  const handleResetCode = () => {
    if (window.confirm('Reset code to default template?')) {
      setCode(language === 'c' ? C_BOILERPLATE : CPP_BOILERPLATE);
      setExecutionResult(null);
      setConsoleOutput('');
    }
  };

  // Add New File to Virtual Filesystem
  const handleCreateFile = (e) => {
    e.preventDefault();
    if (!newFileName.trim()) return;

    let cleanName = newFileName.trim();
    if (virtualFiles.some(f => f.name.toLowerCase() === cleanName.toLowerCase())) {
      alert(`A file named "${cleanName}" already exists.`);
      return;
    }

    const newFile = {
      id: `vf-${Date.now()}`,
      name: cleanName,
      content: newFileContent,
      isBinary: false,
      sizeBytes: new Blob([newFileContent]).size
    };

    setVirtualFiles(prev => [...prev, newFile]);
    setNewFileName('');
    setNewFileContent('');
    setShowNewFileModal(false);
  };

  // Remove Virtual File
  const handleDeleteFile = (id, name) => {
    if (window.confirm(`Delete virtual file "${name}"?`)) {
      setVirtualFiles(prev => prev.filter(f => f.id !== id));
      if (activeFileId === id) setActiveFileId(null);
    }
  };

  // Handle Local File Upload
  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      const isText = file.type.startsWith('text/') || 
                     file.name.endsWith('.txt') || 
                     file.name.endsWith('.csv') || 
                     file.name.endsWith('.json') || 
                     file.name.endsWith('.dat') || 
                     file.name.endsWith('.c') || 
                     file.name.endsWith('.cpp') || 
                     file.name.endsWith('.h');

      if (isText) {
        reader.onload = (event) => {
          const text = event.target.result;
          setVirtualFiles(prev => [
            ...prev.filter(f => f.name !== file.name),
            {
              id: `vf-${Date.now()}-${Math.random()}`,
              name: file.name,
              content: text,
              isBinary: false,
              sizeBytes: file.size
            }
          ]);
        };
        reader.readAsText(file);
      } else {
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          const base64 = dataUrl.split(',')[1];
          setVirtualFiles(prev => [
            ...prev.filter(f => f.name !== file.name),
            {
              id: `vf-${Date.now()}-${Math.random()}`,
              name: file.name,
              content: null,
              base64: base64,
              isBinary: true,
              sizeBytes: file.size
            }
          ]);
        };
        reader.readAsDataURL(file);
      }
    });

    if (fileUploadInputRef.current) fileUploadInputRef.current.value = '';
  };

  // Download Generated File
  const handleDownloadFile = (file) => {
    let url;
    if (file.isBinary && file.base64) {
      url = `data:application/octet-stream;base64,${file.base64}`;
    } else {
      const blob = new Blob([file.content || ''], { type: 'text/plain' });
      url = URL.createObjectURL(blob);
    }
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Execute Code
  const handleRunCode = async () => {
    setIsRunning(true);
    setExecutionResult(null);
    setOutputFiles([]);
    setActiveConsoleTab('terminal');
    setConsoleOutput(`🚀 Compiling ${language === 'c' ? 'C17 (clang)' : 'C++17 (clang++)'}...\n`);

    try {
      const payloadFiles = virtualFiles.map(f => ({
        name: f.name,
        content: f.content,
        isBinary: f.isBinary,
        base64: f.base64
      }));

      const res = await fetch(getApiUrl('/api/ide/run'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language,
          code,
          stdin: stdinInput,
          files: payloadFiles
        })
      });

      const data = await res.json();

      if (!data.success && data.message) {
        setConsoleOutput(prev => prev + `\n❌ Server Error: ${data.message}`);
        setIsRunning(false);
        return;
      }

      if (data.compiled === false) {
        setConsoleOutput(prev => prev + `\n❌ Compilation Error:\n${data.compilerError || 'Unknown compile error'}\n`);
        setExecutionResult({
          compiled: false,
          exitCode: 1,
          timeMs: data.executionTimeMs || 0
        });
        setIsRunning(false);
        return;
      }

      let log = `✅ Compilation successful (0 errors).\nExecuting binary with sandbox environment...\n`;
      if (data.stdout) {
        log += `\n[Program Output / Stdout]:\n${data.stdout}\n`;
      } else if (!data.stderr) {
        log += `\n[Program completed with no stdout output].\n`;
      }

      if (data.stderr) {
        log += `\n[Stderr / Diagnostics]:\n${data.stderr}\n`;
      }

      log += `\n---------------------------------------\n`;
      log += `⏱ Execution Time: ${data.executionTimeMs}ms | Exit Code: ${data.exitCode} ${data.exitCode === 0 ? '(Success)' : '(Error)'}\n`;

      if (data.outputFiles && data.outputFiles.length > 0) {
        log += `📁 ${data.outputFiles.length} file(s) created/modified during execution! Check 'Output Files' tab.\n`;
        setOutputFiles(data.outputFiles);
      }

      setConsoleOutput(log);
      setExecutionResult({
        compiled: true,
        exitCode: data.exitCode,
        timeMs: data.executionTimeMs,
        outputFilesCount: data.outputFiles ? data.outputFiles.length : 0
      });

    } catch (err) {
      setConsoleOutput(prev => prev + `\n❌ Network Error: ${err.message}. Ensure the backend server is running.`);
    } finally {
      setIsRunning(false);
    }
  };

  // Keyboard shortcut Ctrl+Enter or Cmd+Enter to Run
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (!isRunning) handleRunCode();
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [code, language, stdinInput, virtualFiles, isRunning]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Full-Featured C & C++ Web IDE</span>
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Apple clang 17 • Native Sandbox
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Standalone C & C++ IDE
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            Compile C and C++ programs with custom stdin, virtual file creation/upload, and file stream (<code className="text-purple-600 dark:text-purple-400">fstream</code> / <code className="text-purple-600 dark:text-purple-400">FILE*</code>) outputs.
          </p>
        </div>

        {/* Global Action Bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => handleLanguageChange('c')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                language === 'c'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              C (C17)
            </button>
            <button
              onClick={() => handleLanguageChange('cpp')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                language === 'cpp'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              C++ (C++17)
            </button>
          </div>

          {/* Editor & Output Theme Switcher */}
          <button
            onClick={toggleEditorTheme}
            className={`px-3 py-1.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
              editorTheme === 'dark'
                ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700'
                : 'bg-white text-indigo-600 border-slate-300 hover:bg-slate-50 shadow-xs'
            }`}
            title={`Switch Editor and Output to ${editorTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {editorTheme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          {/* Run Button */}
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-5 py-2 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold text-xs shadow-lg shadow-purple-600/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
            title="Run Code (Ctrl + Enter / Cmd + Enter)"
          >
            <Play className={`w-4 h-4 fill-white ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run Code (⌘+↵)'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Files Panel (4 Cols) + Right Editor & Console (8 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Virtual Filesystem & Quick Templates (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Virtual File Manager Card */}
          <div className={`border rounded-3xl p-5 shadow-sm transition-colors ${
            editorTheme === 'dark'
              ? 'bg-slate-800/90 border-slate-700/80'
              : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                  Virtual Filesystem
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold">
                {virtualFiles.length} file(s)
              </span>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
              Files created or uploaded here are written into the sandbox execution folder so your C/C++ code can open them via relative paths (<code className="text-purple-600">fstream</code>, <code className="text-purple-600">fopen</code>).
            </p>

            {/* File List */}
            <div className="space-y-2 mb-4 max-h-52 overflow-y-auto pr-1">
              {virtualFiles.map(file => (
                <div
                  key={file.id}
                  className={`flex items-center justify-between p-2.5 rounded-2xl border transition-colors group ${
                    editorTheme === 'dark'
                      ? 'bg-slate-900/60 border-slate-700/60 hover:border-purple-500'
                      : 'bg-slate-50 border-slate-200 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200 truncate">
                        {file.name}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {file.sizeBytes || 0} bytes • {file.isBinary ? 'Binary' : 'Text'}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button
                      onClick={() => setActiveFileId(file.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      title="View / Edit Content"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDeleteFile(file.id, file.name)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete File"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}

              {virtualFiles.length === 0 && (
                <div className="text-center py-6 border-2 border-dashed border-slate-200 dark:border-slate-700/80 rounded-2xl">
                  <FileText className="w-6 h-6 text-slate-300 mx-auto mb-1" />
                  <div className="text-xs text-slate-500">No auxiliary files attached.</div>
                  <div className="text-[10px] text-slate-400">Click below to create or upload files.</div>
                </div>
              )}
            </div>

            {/* Actions: + New File & Upload File */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setShowNewFileModal(true)}
                className="py-2 px-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New File</span>
              </button>

              <button
                onClick={() => fileUploadInputRef.current?.click()}
                className="py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload File</span>
              </button>

              <input
                ref={fileUploadInputRef}
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Quick Starter Templates Card */}
          <div className={`border rounded-3xl p-5 shadow-sm transition-colors ${
            editorTheme === 'dark'
              ? 'bg-slate-800/90 border-slate-700/80'
              : 'bg-white border-slate-200 shadow-slate-200/50'
          }`}>
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Quick Code Templates</span>
            </h3>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => handleLoadTemplate('boilerplate')}
                className={`w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between ${
                  editorTheme === 'dark'
                    ? 'bg-slate-900/40 hover:bg-purple-950/30 border-slate-700/60'
                    : 'bg-slate-50 hover:bg-purple-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {language === 'c' ? 'Standard C17 Program' : 'Standard C++17 Program'}
                  </div>
                  <div className="text-[10px] text-slate-400">Basic I/O & main() harness</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => handleLoadTemplate('stream')}
                className={`w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between ${
                  editorTheme === 'dark'
                    ? 'bg-slate-900/40 hover:bg-purple-950/30 border-slate-700/60'
                    : 'bg-slate-50 hover:bg-purple-50 border-slate-200'
                }`}
              >
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {language === 'c' ? 'C File Stream Demo (fopen)' : 'C++ File Stream Demo (fstream)'}
                  </div>
                  <div className="text-[10px] text-slate-400">Read & write files on disk</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Code Editor & Output Consoles (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* Code Editor Container */}
          <div className={`relative border rounded-3xl shadow-xl overflow-hidden flex flex-col transition-colors ${
            editorTheme === 'dark'
              ? 'bg-slate-950 border-slate-800 shadow-purple-950/20'
              : 'bg-white border-slate-200 shadow-slate-200/60'
          }`}>
            
            {/* Editor Toolbar */}
            <div className={`px-5 py-3 border-b flex flex-wrap items-center justify-between gap-3 transition-colors ${
              editorTheme === 'dark' ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className={`text-xs font-mono font-bold ml-2 ${
                  editorTheme === 'dark' ? 'text-slate-400' : 'text-slate-700'
                }`}>
                  {language === 'c' ? 'main.c (C17)' : 'main.cpp (C++17)'}
                </span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">
                  • Autocomplete Active (Tab to accept)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyCode}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                    editorTheme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-800 border-slate-700'
                      : 'text-slate-700 hover:bg-white bg-slate-50 border-slate-300'
                  }`}
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleResetCode}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border ${
                    editorTheme === 'dark'
                      ? 'text-slate-300 hover:bg-slate-800 border-slate-700'
                      : 'text-slate-700 hover:bg-white bg-slate-50 border-slate-300'
                  }`}
                  title="Reset to starter template"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Code Textarea with Line Numbers */}
            <div className={`relative flex font-mono text-xs sm:text-sm h-[400px] overflow-hidden ${
              editorTheme === 'dark' ? 'bg-slate-950' : 'bg-white'
            }`}>
              
              {/* Line Gutter */}
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

              {/* Source Input */}
              <textarea
                ref={textareaRef}
                value={code}
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
                placeholder="// Type your C/C++ code here..."
              />

              {/* AUTOCOMPLETE POPUP WIDGET */}
              {suggestions.length > 0 && (
                <div className={`absolute z-30 left-16 bottom-12 rounded-2xl border shadow-2xl overflow-hidden max-w-xs w-72 animate-in fade-in zoom-in-95 duration-150 ${
                  editorTheme === 'dark'
                    ? 'bg-slate-900/95 border-slate-700 text-slate-200 backdrop-blur-md'
                    : 'bg-white/95 border-slate-300 text-slate-800 backdrop-blur-md'
                }`}>
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400 flex items-center justify-between">
                    <span>Suggestions ({suggestions.length})</span>
                    <span className="text-[9px] text-slate-400">Tab / ↵ to insert</span>
                  </div>
                  <div className="max-h-48 overflow-y-auto p-1">
                    {suggestions.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => applySuggestion(item)}
                        className={`px-3 py-2 rounded-xl text-xs font-mono cursor-pointer flex items-center justify-between transition-colors ${
                          selectedSuggestionIndex === idx
                            ? 'bg-purple-600 text-white font-bold'
                            : editorTheme === 'dark'
                            ? 'hover:bg-slate-800 text-slate-300'
                            : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                          selectedSuggestionIndex === idx
                            ? 'bg-purple-800 text-purple-200'
                            : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                        }`}>
                          {item.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Editor Footer Status */}
            <div className={`px-5 py-2 border-t flex flex-wrap items-center justify-between text-[11px] font-mono transition-colors ${
              editorTheme === 'dark' ? 'bg-slate-900/80 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
            }`}>
              <div className="flex items-center gap-4">
                <span>Compiler: <strong className="text-purple-500 font-bold">{language === 'c' ? 'clang (C17)' : 'clang++ (C++17)'}</strong></span>
                <span>Lines: <strong>{lineCount}</strong></span>
                <span>Length: <strong>{code.length} chars</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span>Theme: <strong>{editorTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</strong></span>
                <span>• Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">⌘+Enter</kbd> to run</span>
              </div>
            </div>

          </div>

          {/* Console / Stdin / Output Files Section (MATCHES EDITOR LIGHT & DARK THEME) */}
          <div className={`border rounded-3xl shadow-xl overflow-hidden transition-colors ${
            editorTheme === 'dark'
              ? 'bg-slate-900 border-slate-800 shadow-purple-950/20'
              : 'bg-white border-slate-200 shadow-slate-200/60'
          }`}>
            
            {/* Tab Navigation */}
            <div className={`px-5 py-2.5 border-b flex items-center justify-between transition-colors ${
              editorTheme === 'dark'
                ? 'bg-slate-950 border-slate-800'
                : 'bg-slate-100/90 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveConsoleTab('terminal')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeConsoleTab === 'terminal'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : editorTheme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Output Terminal</span>
                </button>

                <button
                  onClick={() => setActiveConsoleTab('stdin')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeConsoleTab === 'stdin'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : editorTheme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Standard Input (Stdin)</span>
                  {stdinInput.trim() && (
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>

                <button
                  onClick={() => setActiveConsoleTab('outputFiles')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeConsoleTab === 'outputFiles'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : editorTheme === 'dark'
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>Generated Output Files</span>
                  {outputFiles.length > 0 && (
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                      {outputFiles.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Execution Status Badge */}
              {executionResult && (
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 ${
                    executionResult.compiled === false
                      ? 'bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/40'
                      : executionResult.exitCode === 0
                      ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/40'
                      : 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/40'
                  }`}>
                    {executionResult.compiled === false ? (
                      <>
                        <XCircle className="w-3.5 h-3.5" />
                        <span>COMPILE FAILED</span>
                      </>
                    ) : executionResult.exitCode === 0 ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>EXIT 0</span>
                      </>
                    ) : (
                      <>
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>EXIT {executionResult.exitCode}</span>
                      </>
                    )}
                  </span>
                </div>
              )}
            </div>

            {/* TAB 1: OUTPUT TERMINAL (LIGHT & DARK STYLING) */}
            {activeConsoleTab === 'terminal' && (
              <div className={`p-4 transition-colors ${
                editorTheme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'
              }`}>
                <pre className={`font-mono text-xs overflow-x-auto min-h-[160px] max-h-[280px] leading-relaxed whitespace-pre-wrap p-3 rounded-2xl border transition-colors ${
                  editorTheme === 'dark'
                    ? 'bg-slate-900/80 border-slate-800/80 text-slate-300'
                    : 'bg-white border-slate-200 text-slate-800 shadow-inner'
                }`}>
                  {consoleOutput || 'Ready to run. Click "Run Code" or press ⌘+Enter.'}
                </pre>
              </div>
            )}

            {/* TAB 2: STDIN INPUT (LIGHT & DARK STYLING) */}
            {activeConsoleTab === 'stdin' && (
              <div className={`p-4 transition-colors ${
                editorTheme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
              }`}>
                <label className={`block text-[11px] font-bold mb-1.5 ${
                  editorTheme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Custom Standard Input (Piped directly into <code className="text-purple-600 dark:text-purple-400">cin</code> / <code className="text-purple-600 dark:text-purple-400">scanf</code>):
                </label>
                <textarea
                  value={stdinInput}
                  onChange={(e) => setStdinInput(e.target.value)}
                  rows={6}
                  placeholder="Enter inputs here (e.g. text, numbers separated by spaces or newlines)..."
                  className={`w-full p-3 rounded-xl font-mono text-xs border focus:outline-none focus:border-purple-500 leading-relaxed transition-colors ${
                    editorTheme === 'dark'
                      ? 'bg-slate-900 text-slate-100 border-slate-800'
                      : 'bg-white text-slate-900 border-slate-300 placeholder:text-slate-400'
                  }`}
                />
              </div>
            )}

            {/* TAB 3: GENERATED OUTPUT FILES (LIGHT & DARK STYLING) */}
            {activeConsoleTab === 'outputFiles' && (
              <div className={`p-4 min-h-[180px] transition-colors ${
                editorTheme === 'dark' ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'
              }`}>
                {outputFiles.length === 0 ? (
                  <div className={`text-center py-8 ${editorTheme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    <FolderOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs font-bold">No output files produced yet.</p>
                    <p className="text-[11px] mt-1 max-w-sm mx-auto opacity-75">
                      When your C or C++ program writes to a file using <code className="text-purple-600 dark:text-purple-400">ofstream</code> or <code className="text-purple-600 dark:text-purple-400">fopen</code>, the generated files will appear here automatically!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{outputFiles.length} file(s) captured from execution directory:</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {outputFiles.map((file, i) => (
                        <div key={i} className={`border rounded-xl p-3.5 flex flex-col justify-between transition-colors ${
                          editorTheme === 'dark'
                            ? 'bg-slate-900 border-slate-800'
                            : 'bg-white border-slate-200 shadow-sm'
                        }`}>
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-600 dark:text-purple-300">
                                <FileText className="w-4 h-4 text-purple-500" />
                                <span>{file.name}</span>
                              </div>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                                editorTheme === 'dark' ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                              }`}>
                                {file.sizeBytes} bytes
                              </span>
                            </div>

                            {/* Preview snippet for text files */}
                            {!file.isBinary && file.content && (
                              <pre className={`text-[11px] font-mono p-2.5 rounded-lg border max-h-24 overflow-y-auto whitespace-pre-wrap leading-relaxed mt-2 ${
                                editorTheme === 'dark'
                                  ? 'bg-slate-950 border-slate-800/80 text-slate-300'
                                  : 'bg-slate-50 border-slate-200 text-slate-800'
                              }`}>
                                {file.content.slice(0, 300)}
                                {file.content.length > 300 ? '...' : ''}
                              </pre>
                            )}

                            {file.isBinary && (
                              <div className="text-[11px] text-slate-500 italic mt-2">
                                Binary Data File
                              </div>
                            )}
                          </div>

                          <div className={`mt-3 pt-2 border-t flex items-center justify-end gap-2 ${
                            editorTheme === 'dark' ? 'border-slate-800' : 'border-slate-100'
                          }`}>
                            <button
                              onClick={() => handleDownloadFile(file)}
                              className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Download</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </div>

      {/* MODAL: CREATE NEW VIRTUAL FILE */}
      {showNewFileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Plus className="w-5 h-5 text-purple-600" />
              <span>Create New Workspace File</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Enter a filename (e.g. <code className="text-purple-500">input.txt</code>, <code className="text-purple-500">matrix.dat</code>) and its text content.
            </p>

            <form onSubmit={handleCreateFile} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Filename
                </label>
                <input
                  type="text"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  placeholder="e.g. data.txt"
                  required
                  autoFocus
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono font-bold focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Initial Content
                </label>
                <textarea
                  value={newFileContent}
                  onChange={(e) => setNewFileContent(e.target.value)}
                  rows={7}
                  placeholder="Type initial file contents..."
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-purple-500 leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewFileModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                >
                  Create File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: VIEW / EDIT EXISTING VIRTUAL FILE */}
      {activeFileId && (() => {
        const file = virtualFiles.find(f => f.id === activeFileId);
        if (!file) return null;

        return (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="font-mono font-bold text-slate-900 dark:text-white text-sm">
                    {file.name}
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {file.sizeBytes} bytes
                </span>
              </div>

              <div className="space-y-4">
                {file.isBinary ? (
                  <div className="p-6 bg-slate-950 rounded-2xl text-center text-xs text-slate-400">
                    Binary file content cannot be edited directly.
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      File Content
                    </label>
                    <textarea
                      value={file.content || ''}
                      onChange={(e) => {
                        const val = e.target.value;
                        setVirtualFiles(prev => prev.map(f => f.id === activeFileId ? {
                          ...f,
                          content: val,
                          sizeBytes: new Blob([val]).size
                        } : f));
                      }}
                      rows={10}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-purple-500 leading-relaxed"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadFile(file)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-200"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveFileId(null)}
                    className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

    </div>
  );
};
