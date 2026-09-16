import React, { useState, useEffect, useRef } from 'react';
import {
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
  Zap,
  FolderOpen,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  FileCode,
  Sparkles,
  Eye,
  Save,
  X
} from 'lucide-react';
import { getApiUrl } from '../services/api.js';
import { useTheme } from '../context/ThemeContext.jsx';

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
        printf("\\n(Tip: Click '+ New File' in Workspace Files, create 'input.txt', and run again)\\n");
    }

    return 0;
}`;

const CPP_BOILERPLATE = `#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    cout << "⚡ Welcome to the LiveQuiz C++ IDE!\\n";
    cout << "Compiled with Apple clang++ (C++17).\\n\\n";

    // Optional: read from custom stdin
    string name;
    cout << "Enter your name: ";
    if (cin >> name) {
        cout << "Hello, " << name << "! Welcome to the C++ playground.\\n";
    } else {
        cout << "No input provided. (Tip: Type in the 'Standard Input (Stdin)' tab below)\\n";
    }

    return 0;
}`;

const CPP_FILE_STREAM_DEMO = `#include <iostream>
#include <fstream>
#include <string>
#include <vector>

using namespace std;

int main() {
    cout << "--- C++ File Stream Demonstration ---\\n";

    // 1. Write to an output file using ofstream
    ofstream outFile("results.txt");
    if (!outFile) {
        cerr << "Error creating results.txt\\n";
        return 1;
    }
    outFile << "=== C++ File Stream Output ===\\n";
    outFile << "Timestamp: 2026-09-16\\n";
    outFile << "Status: Verified\\n";
    outFile << "Scores: 95, 88, 92, 100\\n";
    outFile.close();

    cout << "✅ Successfully created 'results.txt'! Check the 'Output Files' tab below.\\n";

    // 2. Read from an auxiliary input file (e.g. 'input.txt')
    ifstream inFile("input.txt");
    if (inFile) {
        cout << "\\n--- Reading input.txt ---\\n";
        string line;
        while (getline(inFile, line)) {
            cout << line << "\\n";
        }
        inFile.close();
    } else {
        cout << "\\n(Tip: Click '+ New File' or 'Upload File', add 'input.txt', and rerun!)\\n";
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
  { label: 'cout', insert: 'cout <<  << "\\n";', type: 'function' },
  { label: 'cin', insert: 'cin >> ;', type: 'function' },
  { label: 'endl', insert: 'endl;', type: 'keyword' },
  { label: 'vector', insert: 'vector<int> vec;', type: 'type' },
  { label: 'string', insert: 'string str;', type: 'type' },
  { label: 'ifstream', insert: 'ifstream in("filename.txt");\nif (!in) {\n    cerr << "Cannot open file\\n";\n}\n', type: 'snippet' },
  { label: 'ofstream', insert: 'ofstream out("output.txt");\nif (!out) {\n    cerr << "Cannot open file\\n";\n}\nout << "data" << "\\n";\nout.close();\n', type: 'snippet' },
  { label: 'fstream', insert: 'fstream file("db.dat", ios::in | ios::out | ios::binary);', type: 'snippet' },
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

const DEFAULT_FILES = [
  {
    id: 'f-main-cpp',
    name: 'main.cpp',
    language: 'cpp',
    content: CPP_BOILERPLATE,
    isBinary: false,
    sizeBytes: 360
  },
  {
    id: 'f-main-c',
    name: 'main.c',
    language: 'c',
    content: C_BOILERPLATE,
    isBinary: false,
    sizeBytes: 375
  },
  {
    id: 'f-input-txt',
    name: 'input.txt',
    language: 'text',
    content: 'Sample data line 1\nSample data line 2\n42 100 256',
    isBinary: false,
    sizeBytes: 45
  }
];

export const IDEPage = ({ onNavigate }) => {
  const { theme, isDark } = useTheme();

  // Multi-file Workspace loaded from LocalStorage or default
  const [workspaceFiles, setWorkspaceFiles] = useState(() => {
    try {
      const saved = localStorage.getItem('livequiz_ide_files');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to load saved IDE files:', e);
    }
    return DEFAULT_FILES;
  });

  const [activeFileId, setActiveFileId] = useState(() => {
    try {
      const savedId = localStorage.getItem('livequiz_ide_active_file_id');
      if (savedId) return savedId;
    } catch (e) {}
    return 'f-main-cpp';
  });

  // Active file determination
  const activeFile = workspaceFiles.find(f => f.id === activeFileId) || workspaceFiles[0] || DEFAULT_FILES[0];
  const activeCode = activeFile.content || '';
  const activeLanguage = activeFile.language || (activeFile.name.endsWith('.c') ? 'c' : activeFile.name.endsWith('.cpp') ? 'cpp' : 'text');

  const [stdinInput, setStdinInput] = useState('');
  const [activeConsoleTab, setActiveConsoleTab] = useState('terminal'); // 'terminal' | 'stdin' | 'outputFiles'
  const [copied, setCopied] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // 'saved' | null
  const [mobileIDETab, setMobileIDETab] = useState('editor'); // 'editor' | 'files'

  // Autocompletion State
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0);
  const [activePrefix, setActivePrefix] = useState('');

  // Modals
  const [showNewFileModal, setShowNewFileModal] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileContent, setNewFileContent] = useState('');
  const [inspectFileId, setInspectFileId] = useState(null);

  // Execution State
  const [isRunning, setIsRunning] = useState(false);
  const [executionResult, setExecutionResult] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [outputFiles, setOutputFiles] = useState([]);

  // Refs
  const textareaRef = useRef(null);
  const lineGutterRef = useRef(null);
  const fileUploadInputRef = useRef(null);

  const handleEditorScroll = (e) => {
    if (lineGutterRef.current) {
      lineGutterRef.current.scrollTop = e.target.scrollTop;
    }
  };

  const lineCount = (activeCode.match(/\n/g) || []).length + 1;
  const linesArray = Array.from({ length: Math.max(lineCount, 26) }, (_, i) => i + 1);

  // Update content of active file
  const updateActiveFileContent = (newContent) => {
    setWorkspaceFiles(prev => prev.map(f => {
      if (f.id === activeFile.id) {
        return {
          ...f,
          content: newContent,
          sizeBytes: new Blob([newContent]).size
        };
      }
      return f;
    }));
  };

  // Explicit Save to LocalStorage with visual feedback
  const handleSaveFile = () => {
    try {
      localStorage.setItem('livequiz_ide_files', JSON.stringify(workspaceFiles));
      localStorage.setItem('livequiz_ide_active_file_id', activeFile.id);
      setSaveStatus('saved');
      setTimeout(() => {
        setSaveStatus(null);
      }, 2500);
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }
  };

  // Auto-save to LocalStorage in background
  useEffect(() => {
    try {
      localStorage.setItem('livequiz_ide_files', JSON.stringify(workspaceFiles));
      localStorage.setItem('livequiz_ide_active_file_id', activeFile.id);
    } catch (e) {}
  }, [workspaceFiles, activeFile.id]);

  // Keyboard shortcut Ctrl+S / Cmd+S to Save
  useEffect(() => {
    const handleGlobalSaveShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        handleSaveFile();
      }
    };
    window.addEventListener('keydown', handleGlobalSaveShortcut);
    return () => window.removeEventListener('keydown', handleGlobalSaveShortcut);
  }, [workspaceFiles, activeFile.id]);

  // Apply Autocompletion Suggestion
  const applySuggestion = (suggestion) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;
    const textBefore = activeCode.slice(0, cursor);
    const textAfter = activeCode.slice(cursor);

    const prefixLen = activePrefix.length;
    const newTextBefore = textBefore.slice(0, textBefore.length - prefixLen);
    const insertVal = suggestion.insert;

    const newCode = newTextBefore + insertVal + textAfter;
    updateActiveFileContent(newCode);
    setSuggestions([]);

    setTimeout(() => {
      textarea.focus();
      const newCursor = newTextBefore.length + insertVal.length;
      textarea.setSelectionRange(newCursor, newCursor);
    }, 10);
  };

  // Keyboard Handler with Indentation, Enter, Bracket Pairs, and Autocomplete
  const handleEditorKeyDown = (e) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const cursor = textarea.selectionStart;

    // 1. Autocomplete navigation / acceptance
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
        const lineStart = activeCode.lastIndexOf('\n', start - 1) + 1;
        if (activeCode.slice(lineStart, lineStart + 4) === '    ') {
          const newCode = activeCode.slice(0, lineStart) + activeCode.slice(lineStart + 4);
          updateActiveFileContent(newCode);
          setTimeout(() => {
            textarea.setSelectionRange(Math.max(lineStart, start - 4), Math.max(lineStart, end - 4));
          }, 0);
        }
      } else {
        // Tab: Insert 4 spaces
        const newCode = activeCode.substring(0, start) + '    ' + activeCode.substring(end);
        updateActiveFileContent(newCode);
        setTimeout(() => {
          textarea.setSelectionRange(start + 4, start + 4);
        }, 0);
      }
      return;
    }

    // 3. Smart Enter key indentation
    if (e.key === 'Enter') {
      e.preventDefault();
      const lineStart = activeCode.lastIndexOf('\n', cursor - 1) + 1;
      const currentLine = activeCode.slice(lineStart, cursor);
      const indentMatch = currentLine.match(/^\s*/);
      const baseIndent = indentMatch ? indentMatch[0] : '';
      
      const charBefore = activeCode[cursor - 1];
      const charAfter = activeCode[cursor];

      // Case: between { and } -> expand block with inner indentation
      if (charBefore === '{' && charAfter === '}') {
        const indentLevel = baseIndent + '    ';
        const newCode = activeCode.slice(0, cursor) + '\n' + indentLevel + '\n' + baseIndent + activeCode.slice(cursor);
        updateActiveFileContent(newCode);
        setTimeout(() => {
          textarea.setSelectionRange(cursor + 1 + indentLevel.length, cursor + 1 + indentLevel.length);
        }, 0);
        return;
      }

      // Case: line ends with { -> add 4 spaces indent
      const extraIndent = charBefore === '{' ? '    ' : '';
      const insertText = '\n' + baseIndent + extraIndent;
      const newCode = activeCode.slice(0, cursor) + insertText + activeCode.slice(cursor);
      updateActiveFileContent(newCode);
      setTimeout(() => {
        textarea.setSelectionRange(cursor + insertText.length, cursor + insertText.length);
      }, 0);
      return;
    }

    // 4. Auto-closing pairs: (), [], {}, "", ''
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

      if (activeCode[start] === e.key && (e.key === '"' || e.key === "'")) {
        e.preventDefault();
        textarea.setSelectionRange(start + 1, start + 1);
        return;
      }

      e.preventDefault();
      const selected = activeCode.substring(start, end);
      const newCode = activeCode.substring(0, start) + e.key + selected + closing + activeCode.substring(end);
      updateActiveFileContent(newCode);

      setTimeout(() => {
        textarea.setSelectionRange(start + 1, end + 1);
      }, 0);
      return;
    }

    // Advance over closing bracket if typed
    if ((e.key === ')' || e.key === ']' || e.key === '}') && activeCode[cursor] === e.key) {
      e.preventDefault();
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    // 5. Backspace between brackets deletes both
    if (e.key === 'Backspace' && cursor > 0) {
      const prev = activeCode[cursor - 1];
      const next = activeCode[cursor];
      if ((prev === '(' && next === ')') ||
          (prev === '[' && next === ']') ||
          (prev === '{' && next === '}') ||
          (prev === '"' && next === '"') ||
          (prev === "'" && next === "'")) {
        e.preventDefault();
        const newCode = activeCode.slice(0, cursor - 1) + activeCode.slice(cursor + 1);
        updateActiveFileContent(newCode);
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
    updateActiveFileContent(val);

    const cursor = e.target.selectionStart;
    const textBefore = val.slice(0, cursor);

    const match = textBefore.match(/([a-zA-Z_#:][a-zA-Z0-9_#:]*)$/);
    if (match) {
      const prefix = match[1];
      setActivePrefix(prefix);

      if (prefix.length >= 2) {
        const pool = activeLanguage === 'c' ? C_AUTOCOMPLETE : CPP_AUTOCOMPLETE;
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

  // Switch Language from top bar
  const handleLanguageChange = (newLang) => {
    if (newLang === activeLanguage) return;

    // Switch to main.c or main.cpp if available
    const existing = workspaceFiles.find(f => f.name.toLowerCase() === (newLang === 'c' ? 'main.c' : 'main.cpp'));
    if (existing) {
      setActiveFileId(existing.id);
      return;
    }

    // Otherwise switch active file's language and prompt template
    const isSwitchingToC = newLang === 'c';
    if (window.confirm(`Switch active file to ${isSwitchingToC ? 'C (C17)' : 'C++ (C++17)'}?`)) {
      setWorkspaceFiles(prev => prev.map(f => {
        if (f.id === activeFile.id) {
          const newName = isSwitchingToC ? f.name.replace(/\.cpp$/, '.c') : f.name.replace(/\.c$/, '.cpp');
          return {
            ...f,
            name: newName,
            language: newLang,
            content: isSwitchingToC ? C_BOILERPLATE : CPP_BOILERPLATE
          };
        }
        return f;
      }));
    }
  };

  // Load Templates
  const handleLoadTemplate = (type) => {
    const isC = activeLanguage === 'c';
    const newContent = isC
      ? (type === 'stream' ? C_FILE_STREAM_DEMO : C_BOILERPLATE)
      : (type === 'stream' ? CPP_FILE_STREAM_DEMO : CPP_BOILERPLATE);
    updateActiveFileContent(newContent);
  };

  // Copy Code
  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Reset Code
  const handleResetCode = () => {
    if (window.confirm(`Reset "${activeFile.name}" to default template?`)) {
      const isC = activeLanguage === 'c';
      updateActiveFileContent(isC ? C_BOILERPLATE : CPP_BOILERPLATE);
      setExecutionResult(null);
      setConsoleOutput('');
    }
  };

  // Create New File in Workspace
  const handleCreateFile = (e) => {
    e.preventDefault();
    if (!newFileName.trim()) return;

    const cleanName = newFileName.trim();
    if (workspaceFiles.some(f => f.name.toLowerCase() === cleanName.toLowerCase())) {
      alert(`A file named "${cleanName}" already exists.`);
      return;
    }

    let detectedLang = 'text';
    let defaultContent = newFileContent;

    if (cleanName.endsWith('.c')) {
      detectedLang = 'c';
      if (!defaultContent) defaultContent = C_BOILERPLATE;
    } else if (cleanName.endsWith('.cpp') || cleanName.endsWith('.cc') || cleanName.endsWith('.cxx')) {
      detectedLang = 'cpp';
      if (!defaultContent) defaultContent = CPP_BOILERPLATE;
    } else if (cleanName.endsWith('.h') || cleanName.endsWith('.hpp')) {
      detectedLang = 'cpp';
      if (!defaultContent) {
        const guard = cleanName.replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
        defaultContent = `#ifndef ${guard}\n#define ${guard}\n\n#include <iostream>\nusing namespace std;\n\n// Header declarations\n\n#endif // ${guard}\n`;
      }
    }

    const newFile = {
      id: `file-${Date.now()}`,
      name: cleanName,
      language: detectedLang,
      content: defaultContent,
      isBinary: false,
      sizeBytes: 0
    };

    setWorkspaceFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    setNewFileName('');
    setNewFileContent('');
    setShowNewFileModal(false);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus(null), 2500);
  };

  // Remove Workspace File
  const handleDeleteFile = (id, name) => {
    if (workspaceFiles.length <= 1) {
      alert('You must keep at least one file in the workspace.');
      return;
    }
    if (window.confirm(`Delete "${name}"?`)) {
      const remaining = workspaceFiles.filter(f => f.id !== id);
      setWorkspaceFiles(remaining);
      if (activeFileId === id) {
        setActiveFileId(remaining[0].id);
      }
    }
  };

  // Handle Local File Upload
  const handleFileUpload = (e) => {
    const uploaded = e.target.files;
    if (!uploaded || uploaded.length === 0) return;

    Array.from(uploaded).forEach(file => {
      const isText = file.type.startsWith('text/') || 
                     file.name.endsWith('.txt') || 
                     file.name.endsWith('.csv') || 
                     file.name.endsWith('.json') || 
                     file.name.endsWith('.dat') || 
                     file.name.endsWith('.c') || 
                     file.name.endsWith('.cpp') || 
                     file.name.endsWith('.h') ||
                     file.name.endsWith('.hpp');

      const reader = new FileReader();

      let detectedLang = 'text';
      if (file.name.endsWith('.c')) detectedLang = 'c';
      else if (file.name.endsWith('.cpp') || file.name.endsWith('.cc') || file.name.endsWith('.h')) detectedLang = 'cpp';

      if (isText) {
        reader.onload = (event) => {
          const text = event.target.result;
          const newFile = {
            id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            name: file.name,
            language: detectedLang,
            content: text,
            isBinary: false,
            sizeBytes: file.size
          };
          setWorkspaceFiles(prev => {
            const filtered = prev.filter(f => f.name !== file.name);
            return [...filtered, newFile];
          });
          setActiveFileId(newFile.id);
        };
        reader.readAsText(file);
      } else {
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          const base64 = dataUrl.split(',')[1];
          const newFile = {
            id: `file-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
            name: file.name,
            language: 'binary',
            content: null,
            base64: base64,
            isBinary: true,
            sizeBytes: file.size
          };
          setWorkspaceFiles(prev => {
            const filtered = prev.filter(f => f.name !== file.name);
            return [...filtered, newFile];
          });
          setActiveFileId(newFile.id);
        };
        reader.readAsDataURL(file);
      }
    });

    if (fileUploadInputRef.current) fileUploadInputRef.current.value = '';
  };

  // Download Generated File or Workspace File
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
    // Determine source file to compile
    let targetFile = activeFile;
    if (targetFile.isBinary || targetFile.language === 'text') {
      const codeCandidate = workspaceFiles.find(f => f.language === 'cpp' || f.name.endsWith('.cpp')) ||
                            workspaceFiles.find(f => f.language === 'c' || f.name.endsWith('.c'));
      if (codeCandidate) {
        targetFile = codeCandidate;
      } else {
        setConsoleOutput('❌ Error: No C or C++ source file found to run. Please create or switch to a .cpp or .c file.');
        setActiveConsoleTab('terminal');
        return;
      }
    }

    const runLang = targetFile.language === 'c' || targetFile.name.endsWith('.c') ? 'c' : 'cpp';

    setIsRunning(true);
    setExecutionResult(null);
    setOutputFiles([]);
    setActiveConsoleTab('terminal');
    setConsoleOutput(`🚀 Compiling ${targetFile.name} with ${runLang === 'c' ? 'C17 (clang)' : 'C++17 (clang++)'}...\n`);

    try {
      const payloadFiles = workspaceFiles
        .filter(f => f.id !== targetFile.id)
        .map(f => ({
          name: f.name,
          content: f.content,
          isBinary: f.isBinary,
          base64: f.base64
        }));

      const res = await fetch(getApiUrl('/api/ide/run'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: runLang,
          code: targetFile.content,
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
    const handleGlobalRunKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (!isRunning) handleRunCode();
      }
    };
    window.addEventListener('keydown', handleGlobalRunKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalRunKeyDown);
  }, [workspaceFiles, activeFileId, stdinInput, isRunning]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 transition-colors">
      
      {/* Top Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Full-Featured C & C++ Web IDE</span>
            </span>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Clang 17 • Multi-file Workspace
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Standalone C & C++ IDE
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
            Create, save, and compile C and C++ programs with multi-file workspace, custom stdin, and file stream outputs.
          </p>
        </div>

        {/* Global Action Bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Language Selector */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => handleLanguageChange('c')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeLanguage === 'c'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              C (C17)
            </button>
            <button
              onClick={() => handleLanguageChange('cpp')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeLanguage === 'cpp'
                  ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              C++ (C++17)
            </button>
          </div>

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

      {/* Mobile View Switcher (visible on screens < lg) */}
      <div className="flex lg:hidden items-center p-1 bg-slate-100 dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 mb-5 shadow-xs">
        <button
          onClick={() => setMobileIDETab('editor')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            mobileIDETab === 'editor'
              ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Editor & Terminal</span>
        </button>
        <button
          onClick={() => setMobileIDETab('files')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            mobileIDETab === 'files'
              ? 'bg-white dark:bg-slate-900 text-purple-600 dark:text-purple-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <FolderOpen className="w-3.5 h-3.5" />
          <span>Workspace Files ({workspaceFiles.length})</span>
        </button>
      </div>

      {/* Main Grid: Left Files Panel (4 Cols) + Right Editor & Console (8 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Workspace Files & Quick Templates (4 Cols) */}
        <div className={`lg:col-span-4 space-y-4 ${mobileIDETab === 'files' ? 'block' : 'hidden lg:block'}`}>
          
          {/* Workspace Files Card */}
          <div className="border rounded-3xl p-5 shadow-sm transition-colors bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700/80 shadow-slate-200/50 dark:shadow-none">
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white">
                  Workspace Files
                </h3>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold">
                {workspaceFiles.length} file(s)
              </span>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
              Files are saved in LocalStorage and sent into the sandbox environment so your programs can include headers (<code className="text-purple-600 dark:text-purple-400">#include "..."</code>) or read data (<code className="text-purple-600 dark:text-purple-400">fstream</code>).
            </p>

            {/* File List */}
            <div className="space-y-2 mb-4 max-h-56 overflow-y-auto pr-1">
              {workspaceFiles.map(file => {
                const isActive = file.id === activeFile.id;
                return (
                  <div
                    key={file.id}
                    onClick={() => setActiveFileId(file.id)}
                    className={`flex items-center justify-between p-2.5 rounded-2xl border transition-all cursor-pointer group ${
                      isActive
                        ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-300 dark:border-purple-600/80 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-700/60 hover:border-purple-300 dark:hover:border-purple-500'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {file.name.endsWith('.c') ? (
                        <FileCode className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      ) : file.name.endsWith('.cpp') || file.name.endsWith('.cc') || file.name.endsWith('.h') ? (
                        <FileCode className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      ) : (
                        <FileText className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      )}
                      <div className="truncate">
                        <div className={`text-xs font-bold font-mono truncate ${
                          isActive
                            ? 'text-purple-900 dark:text-purple-300'
                            : 'text-slate-800 dark:text-slate-200'
                        }`}>
                          {file.name}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {file.sizeBytes || 0} bytes • {file.isBinary ? 'Binary' : file.language ? file.language.toUpperCase() : 'TEXT'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => handleDownloadFile(file)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-purple-600 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                        title="Download File"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>
                      {workspaceFiles.length > 1 && (
                        <button
                          onClick={() => handleDeleteFile(file.id, file.name)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                          title="Delete File"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
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
          <div className="border rounded-3xl p-5 shadow-sm transition-colors bg-white dark:bg-slate-800/90 border-slate-200 dark:border-slate-700/80 shadow-slate-200/50 dark:shadow-none">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Quick Code Templates</span>
            </h3>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => handleLoadTemplate('boilerplate')}
                className="w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between bg-slate-50 dark:bg-slate-900/40 hover:bg-purple-50 dark:hover:bg-purple-950/30 border-slate-200 dark:border-slate-700/60"
              >
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {activeLanguage === 'c' ? 'Standard C17 Program' : 'Standard C++17 Program'}
                  </div>
                  <div className="text-[10px] text-slate-400">Basic I/O & main() harness with using namespace std;</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => handleLoadTemplate('stream')}
                className="w-full text-left p-2.5 rounded-xl border transition-colors flex items-center justify-between bg-slate-50 dark:bg-slate-900/40 hover:bg-purple-50 dark:hover:bg-purple-950/30 border-slate-200 dark:border-slate-700/60"
              >
                <div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {activeLanguage === 'c' ? 'C File Stream Demo (fopen)' : 'C++ File Stream Demo (fstream)'}
                  </div>
                  <div className="text-[10px] text-slate-400">Read & write disk files automatically</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Code Editor & Output Consoles (8 Cols) */}
        <div className={`lg:col-span-8 space-y-4 ${mobileIDETab === 'editor' ? 'block' : 'hidden lg:block'}`}>
          
          {/* Code Editor Container */}
          <div className="relative border rounded-3xl shadow-xl overflow-hidden flex flex-col transition-colors bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-slate-200/60 dark:shadow-purple-950/20">
            
            {/* Editor File Tabs & Toolbar */}
            <div className="px-4 pt-3 pb-0 border-b flex flex-wrap items-center justify-between gap-2 transition-colors bg-slate-100/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-800">
              
              {/* File Tabs Bar */}
              <div className="flex items-center overflow-x-auto no-scrollbar gap-1 flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mr-2 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                {workspaceFiles.map((file) => {
                  const isActive = file.id === activeFile.id;
                  return (
                    <div
                      key={file.id}
                      onClick={() => setActiveFileId(file.id)}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-t-xl text-xs font-mono font-bold cursor-pointer transition-all border-t border-l border-r ${
                        isActive
                          ? isDark
                            ? 'bg-slate-950 text-white border-slate-700 shadow-sm -mb-px pb-2'
                            : 'bg-white text-purple-700 border-slate-300 shadow-xs -mb-px pb-2'
                          : isDark
                          ? 'bg-slate-900 text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/80'
                          : 'bg-slate-200/70 text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-200'
                      }`}
                    >
                      {file.name.endsWith('.c') ? (
                        <FileCode className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                      ) : file.name.endsWith('.cpp') || file.name.endsWith('.cc') || file.name.endsWith('.h') ? (
                        <FileCode className="w-3.5 h-3.5 text-purple-500 flex-shrink-0" />
                      ) : (
                        <FileText className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      )}
                      <span className="truncate max-w-[120px]">{file.name}</span>
                      {workspaceFiles.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteFile(file.id, file.name);
                          }}
                          className="opacity-0 group-hover:opacity-100 hover:text-rose-500 p-0.5 rounded transition-opacity"
                          title="Delete file"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  );
                })}

                {/* + New File Tab Button */}
                <button
                  onClick={() => setShowNewFileModal(true)}
                  className="px-2.5 py-1.5 rounded-t-xl text-xs font-bold flex items-center gap-1 transition-colors text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                  title="Create a New File"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">New File</span>
                </button>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 pb-2 flex-shrink-0">
                {saveStatus === 'saved' && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 animate-in fade-in duration-150">
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved</span>
                  </span>
                )}

                {/* Save Button */}
                <button
                  onClick={handleSaveFile}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 border-purple-200 dark:border-purple-800/80 shadow-xs"
                  title="Save File to LocalStorage (⌘S / Ctrl+S)"
                >
                  <Save className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  <span>Save</span>
                </button>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  title="Copy code to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                {/* Reset Button */}
                <button
                  onClick={handleResetCode}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors border text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700"
                  title="Reset to starter template"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Code Textarea with Line Numbers */}
            <div className="relative flex font-mono text-xs sm:text-sm h-[400px] overflow-hidden bg-white dark:bg-slate-950 transition-colors">
              
              {/* Line Gutter */}
              <div
                ref={lineGutterRef}
                className="select-none text-right pr-3 pl-3 pt-4 pb-4 font-mono text-xs leading-relaxed border-r overflow-hidden transition-colors bg-slate-100/60 dark:bg-slate-900/40 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-slate-800/80"
                style={{ width: '48px' }}
              >
                {linesArray.map(n => (
                  <div key={n} className="leading-relaxed h-[21px]">{n}</div>
                ))}
              </div>

              {/* Source Input */}
              <textarea
                ref={textareaRef}
                value={activeCode}
                onChange={handleCodeChange}
                onKeyDown={handleEditorKeyDown}
                onScroll={handleEditorScroll}
                spellCheck="false"
                className="flex-1 p-4 pt-4 pb-4 font-mono text-xs sm:text-sm focus:outline-none resize-none leading-relaxed border-0 font-medium overflow-y-auto transition-colors bg-white dark:bg-slate-950 text-slate-900 dark:text-emerald-400 caret-purple-600 dark:caret-emerald-400 selection:bg-purple-200 dark:selection:bg-purple-900 selection:text-purple-900 dark:selection:text-white"
                style={{ lineHeight: '21px' }}
                placeholder={`// Enter code for ${activeFile.name}...`}
              />

              {/* AUTOCOMPLETE POPUP WIDGET */}
              {suggestions.length > 0 && (
                <div className="absolute z-30 left-16 bottom-12 rounded-2xl border shadow-2xl overflow-hidden max-w-xs w-72 animate-in fade-in zoom-in-95 duration-150 bg-white/95 dark:bg-slate-900/95 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 backdrop-blur-md">
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
                            : isDark
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
            <div className="px-5 py-2 border-t flex flex-wrap items-center justify-between text-[11px] font-mono transition-colors bg-slate-100 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-4">
                <span>File: <strong className="text-purple-600 dark:text-purple-400 font-bold">{activeFile.name}</strong></span>
                <span>Language: <strong className="text-purple-500 font-bold">{activeLanguage === 'c' ? 'clang (C17)' : activeLanguage === 'cpp' ? 'clang++ (C++17)' : 'Plain Text'}</strong></span>
                <span>Lines: <strong>{lineCount}</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>LocalStorage Synced</span>
                </span>
                <span>• Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">⌘S</kbd> to save</span>
                <span>• Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-700">⌘+Enter</kbd> to run</span>
              </div>
            </div>

          </div>

          {/* Console / Stdin / Output Files Section */}
          <div className="border rounded-3xl shadow-xl overflow-hidden transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-slate-200/60 dark:shadow-purple-950/20">
            
            {/* Tab Navigation */}
            <div className="px-5 py-2.5 border-b flex items-center justify-between transition-colors bg-slate-100/90 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveConsoleTab('terminal')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    activeConsoleTab === 'terminal'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : isDark
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
                      : isDark
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
                      : isDark
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

            {/* TAB 1: OUTPUT TERMINAL */}
            {activeConsoleTab === 'terminal' && (
              <div className="p-4 transition-colors bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200">
                <pre className="font-mono text-xs overflow-x-auto min-h-[160px] max-h-[280px] leading-relaxed whitespace-pre-wrap p-3 rounded-2xl border transition-colors bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-300 shadow-inner">
                  {consoleOutput || 'Ready to run. Click "Run Code" or press ⌘+Enter.'}
                </pre>
              </div>
            )}

            {/* TAB 2: STDIN INPUT */}
            {activeConsoleTab === 'stdin' && (
              <div className="p-4 transition-colors bg-slate-50 dark:bg-slate-950">
                <label className="block text-[11px] font-bold mb-1.5 text-slate-600 dark:text-slate-400">
                  Custom Standard Input (Piped directly into <code className="text-purple-600 dark:text-purple-400">cin</code> / <code className="text-purple-600 dark:text-purple-400">scanf</code>):
                </label>
                <textarea
                  value={stdinInput}
                  onChange={(e) => setStdinInput(e.target.value)}
                  rows={6}
                  placeholder="Enter inputs here (e.g. text, numbers separated by spaces or newlines)..."
                  className="w-full p-3 rounded-xl font-mono text-xs border focus:outline-none focus:border-purple-500 leading-relaxed transition-colors bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-slate-300 dark:border-slate-800 placeholder:text-slate-400"
                />
              </div>
            )}

            {/* TAB 3: GENERATED OUTPUT FILES */}
            {activeConsoleTab === 'outputFiles' && (
              <div className="p-4 min-h-[180px] transition-colors bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200">
                {outputFiles.length === 0 ? (
                  <div className="text-center py-8 text-slate-400 dark:text-slate-500">
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
                        <div key={i} className="border rounded-xl p-3.5 flex flex-col justify-between transition-colors bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-2 font-mono text-xs font-bold text-purple-600 dark:text-purple-300">
                                <FileText className="w-4 h-4 text-purple-500" />
                                <span>{file.name}</span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded-full font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                                {file.sizeBytes} bytes
                              </span>
                            </div>

                            {/* Preview snippet for text files */}
                            {!file.isBinary && file.content && (
                              <pre className="text-[11px] font-mono p-2.5 rounded-lg border max-h-24 overflow-y-auto whitespace-pre-wrap leading-relaxed mt-2 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800/80 text-slate-800 dark:text-slate-300">
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

                          <div className="mt-3 pt-2 border-t flex items-center justify-end gap-2 border-slate-100 dark:border-slate-800">
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

      {/* MODAL: CREATE NEW WORKSPACE FILE */}
      {showNewFileModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-lg w-full border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <Plus className="w-5 h-5 text-purple-600" />
              <span>Create New Workspace File</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Enter a filename with extension (e.g. <code className="text-purple-500">solution.cpp</code>, <code className="text-purple-500">helper.h</code>, <code className="text-purple-500">data.txt</code>).
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
                  placeholder="e.g. solution.cpp, helper.h, input.txt"
                  required
                  autoFocus
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono font-bold focus:outline-none focus:border-purple-500 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Initial Content (Optional)
                </label>
                <textarea
                  value={newFileContent}
                  onChange={(e) => setNewFileContent(e.target.value)}
                  rows={7}
                  placeholder="Leave empty to use standard language boilerplate..."
                  className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-purple-500 leading-relaxed text-slate-900 dark:text-white"
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
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-colors shadow-md shadow-purple-600/20"
                >
                  Create File
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: INSPECT / VIEW WORKSPACE FILE */}
      {inspectFileId && (() => {
        const file = workspaceFiles.find(f => f.id === inspectFileId);
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
                        setWorkspaceFiles(prev => prev.map(f => f.id === inspectFileId ? {
                          ...f,
                          content: val,
                          sizeBytes: new Blob([val]).size
                        } : f));
                      }}
                      rows={10}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:border-purple-500 leading-relaxed text-slate-900 dark:text-white"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => handleDownloadFile(file)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInspectFileId(null)}
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
