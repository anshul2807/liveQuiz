import express from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { exec } from 'child_process';

const router = express.Router();

// Helper to recursively remove a directory
function removeDirSync(dirPath) {
  try {
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
    }
  } catch (e) {
    // Ignore cleanup errors
  }
}

// POST /api/ide/run - Compile and execute C or C++ code with custom stdin & file streams
router.post('/run', async (req, res) => {
  const { language = 'cpp', code, stdin = '', files = [] } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ success: false, message: 'Source code is required.' });
  }

  const isC = language.toLowerCase() === 'c';
  const sourceFileName = isC ? 'main.c' : 'main.cpp';
  const binName = 'app_runner';

  // Create isolated temporary workspace for this execution
  const uniqueRunId = `ide_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const runDir = path.join(os.tmpdir(), uniqueRunId);

  try {
    fs.mkdirSync(runDir, { recursive: true });

    // 1. Write the source code
    const sourceFilePath = path.join(runDir, sourceFileName);
    fs.writeFileSync(sourceFilePath, code, 'utf-8');

    // 2. Write any auxiliary files provided by user (created or uploaded)
    const initialUserFileNames = new Set();
    if (Array.isArray(files)) {
      for (const f of files) {
        if (!f.name) continue;
        // Prevent path traversal outside runDir
        const safeName = path.basename(f.name);
        const targetPath = path.join(runDir, safeName);
        initialUserFileNames.add(safeName);

        if (f.isBinary && f.base64) {
          const buf = Buffer.from(f.base64, 'base64');
          fs.writeFileSync(targetPath, buf);
        } else {
          fs.writeFileSync(targetPath, f.content || '', 'utf-8');
        }
      }
    }

    // 3. Compile code
    const compiler = isC ? 'clang -std=c17 -O2' : 'clang++ -std=c++17 -O2';
    const compileCmd = `${compiler} "${sourceFileName}" -o "${binName}"`;

    const compileStartTime = Date.now();
    let compileResult;
    try {
      compileResult = await new Promise((resolve, reject) => {
        exec(compileCmd, { cwd: runDir, timeout: 8000 }, (err, stdout, stderr) => {
          if (err) {
            reject(new Error(stderr || stdout || err.message));
          } else {
            resolve({ stdout, stderr });
          }
        });
      });
    } catch (compileErr) {
      removeDirSync(runDir);
      return res.json({
        success: true,
        compiled: false,
        compilerError: compileErr.message,
        stdout: '',
        stderr: compileErr.message,
        executionTimeMs: Date.now() - compileStartTime,
        outputFiles: [],
      });
    }

    // 4. Execute binary with stdin and isolated cwd
    let runStdout = '';
    let runStderr = '';
    let timedOut = false;
    let exitCode = 0;
    const runStartTime = Date.now();

    try {
      await new Promise((resolve, reject) => {
        const binPath = path.join(runDir, binName);
        const child = exec(`"${binPath}"`, { cwd: runDir, timeout: 6000 }, (err, stdout, stderr) => {
          runStdout = stdout || '';
          runStderr = stderr || '';
          if (err) {
            if (err.killed) {
              timedOut = true;
              runStderr += '\n[Execution Terminated: Time Limit Exceeded (6.0 seconds)]';
            }
            exitCode = err.code || 1;
            resolve();
          } else {
            exitCode = 0;
            resolve();
          }
        });

        if (stdin && typeof stdin === 'string') {
          try {
            child.stdin.write(stdin);
            child.stdin.end();
          } catch (pipeErr) {}
        } else {
          try { child.stdin.end(); } catch (e) {}
        }
      });
    } catch (execErr) {
      runStderr += `\n[Runtime Exception: ${execErr.message}]`;
    }

    const executionTimeMs = Date.now() - runStartTime;

    // 5. Scan directory for newly generated / modified files (File stream outputs!)
    const outputFiles = [];
    try {
      const allFiles = fs.readdirSync(runDir);
      for (const fileName of allFiles) {
        if (fileName === sourceFileName || fileName === binName || fileName.endsWith('.dSYM')) {
          continue;
        }

        const fullPath = path.join(runDir, fileName);
        const stat = fs.statSync(fullPath);
        if (!stat.isFile()) continue;

        // Determine if file is text or binary
        let isBinary = false;
        let content = '';
        let base64 = '';

        try {
          const rawBuffer = fs.readFileSync(fullPath);
          // Check for null bytes to heuristic detect binary files
          isBinary = rawBuffer.slice(0, 1024).includes(0);

          if (isBinary) {
            base64 = rawBuffer.toString('base64');
          } else {
            content = rawBuffer.toString('utf-8');
          }
        } catch (readErr) {
          content = `[Could not read file: ${readErr.message}]`;
        }

        outputFiles.push({
          name: fileName,
          sizeBytes: stat.size,
          isBinary,
          content: isBinary ? null : content,
          base64: isBinary ? base64 : null,
          isNew: !initialUserFileNames.has(fileName),
        });
      }
    } catch (scanErr) {
      console.error('Error scanning output files:', scanErr);
    }

    // 6. Cleanup workspace
    removeDirSync(runDir);

    return res.json({
      success: true,
      compiled: true,
      compilerOutput: compileResult.stderr || 'Compilation successful (0 errors).',
      stdout: runStdout,
      stderr: runStderr,
      exitCode,
      timedOut,
      executionTimeMs,
      outputFiles,
    });

  } catch (globalErr) {
    removeDirSync(runDir);
    return res.status(500).json({
      success: false,
      message: globalErr.message,
    });
  }
});

export default router;
