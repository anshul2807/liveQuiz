import express from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { exec } from 'child_process';
import { CODING_CHALLENGES } from '../data/codingChallenges.js';

const router = express.Router();

// GET all coding challenges (Sanitized: solutions excluded for public/students)
router.get('/', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const isAdmin = authHeader && authHeader.startsWith('Bearer admin_auth_');
    const { subject } = req.query;

    let challenges = CODING_CHALLENGES;
    if (subject && subject !== 'all') {
      challenges = challenges.filter(c => c.subjectId === subject);
    }

    const sanitized = challenges.map(c => {
      if (isAdmin) return c;
      const { referenceSolution, solutionExplanation, ...studentChallenge } = c;
      return { ...studentChallenge, hasReferenceSolution: true };
    });

    res.json({
      success: true,
      total: sanitized.length,
      challenges: sanitized,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single challenge by ID (Sanitized for non-admins)
router.get('/:id', (req, res) => {
  try {
    const challenge = CODING_CHALLENGES.find(c => c.id === req.params.id);
    if (!challenge) {
      return res.status(404).json({ success: false, message: 'Challenge not found' });
    }

    const authHeader = req.headers.authorization;
    const isAdmin = authHeader && authHeader.startsWith('Bearer admin_auth_');

    if (isAdmin) {
      return res.json({ success: true, challenge });
    }

    const { referenceSolution, solutionExplanation, ...studentChallenge } = challenge;
    res.json({ success: true, challenge: { ...studentChallenge, hasReferenceSolution: true } });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/challenges/:id/solution - STRICTLY ADMIN ONLY
router.get('/:id/solution', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer admin_auth_')) {
      return res.status(403).json({
        success: false,
        message: 'Access Denied: Reference solutions are restricted to authenticated instructors and administrators.',
      });
    }

    const challenge = CODING_CHALLENGES.find(c => c.id === req.params.id);
    if (!challenge) {
      return res.status(404).json({ success: false, message: 'Challenge not found' });
    }

    res.json({
      success: true,
      challengeId: challenge.id,
      title: challenge.title,
      referenceSolution: challenge.referenceSolution,
      solutionExplanation: challenge.solutionExplanation,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Helper to normalize string output for comparison
function normalizeOutput(str) {
  if (!str) return '';
  return str
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .trim();
}

// POST /api/challenges/run - Compile and test C or C++ code
router.post('/run', async (req, res) => {
  const { challengeId, code, language = 'cpp' } = req.body;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ success: false, message: 'Source code is required' });
  }

  const challenge = CODING_CHALLENGES.find(c => c.id === challengeId);
  if (!challenge) {
    return res.status(404).json({ success: false, message: 'Challenge not found' });
  }

  const isC = language.toLowerCase() === 'c';
  const fileExt = isC ? '.c' : '.cpp';

  // Generate unique temp paths in OS temp directory
  const uniqueId = `quiz_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const tempSrcPath = path.join(os.tmpdir(), `${uniqueId}${fileExt}`);
  const tempBinPath = path.join(os.tmpdir(), `${uniqueId}_bin`);

  try {
    // 1. Write user source code to temporary file
    fs.writeFileSync(tempSrcPath, code, 'utf-8');

    // 2. Compile using system compiler (clang for C, clang++ for C++)
    const compileCmd = isC
      ? `clang -std=c17 -O2 -Wall "${tempSrcPath}" -o "${tempBinPath}"`
      : `clang++ -std=c++17 -O2 -Wall "${tempSrcPath}" -o "${tempBinPath}"`;

    try {
      await new Promise((resolve, reject) => {
        exec(compileCmd, { timeout: 8000 }, (err, stdout, stderr) => {
          if (err) {
            reject(new Error(stderr || stdout || err.message));
          } else {
            resolve({ stdout, stderr });
          }
        });
      });
    } catch (compileErr) {
      try { if (fs.existsSync(tempSrcPath)) fs.unlinkSync(tempSrcPath); } catch (e) {}
      return res.json({
        success: true,
        compiled: false,
        compilerError: compileErr.message,
        testResults: [],
        passedAll: false,
      });
    }

    // 3. Execute binary against challenge test cases
    const testResults = [];

    for (const tc of challenge.testCases) {
      let actualOut = '';
      let executionError = null;

      try {
        await new Promise((resolve, reject) => {
          const runChild = exec(`"${tempBinPath}"`, { timeout: 4000, cwd: os.tmpdir() }, (runErr, runStdout, runStderr) => {
            if (runErr) {
              if (runErr.killed) {
                reject(new Error('Time Limit Exceeded (execution exceeded 4s)'));
              } else {
                reject(new Error(runStderr || runErr.message));
              }
            } else {
              actualOut = runStdout;
              resolve();
            }
          });

          // If test case has input, feed to stdin
          if (tc.input) {
            runChild.stdin.write(tc.input);
            runChild.stdin.end();
          }
        });
      } catch (runErr) {
        executionError = runErr.message;
      }

      const normalizedActual = normalizeOutput(actualOut);
      const normalizedExpected = normalizeOutput(tc.expectedOutput);
      const passed = !executionError && (normalizedActual === normalizedExpected);

      testResults.push({
        id: tc.id,
        name: tc.name,
        description: tc.description,
        input: tc.input,
        expected: tc.expectedOutput,
        actual: executionError ? `[Execution Error: ${executionError}]` : actualOut,
        passed,
      });
    }

    // 4. Cleanup temporary files
    try {
      if (fs.existsSync(tempSrcPath)) fs.unlinkSync(tempSrcPath);
      if (fs.existsSync(tempBinPath)) fs.unlinkSync(tempBinPath);
    } catch (cleanupErr) {}

    const passedAll = testResults.length > 0 && testResults.every(t => t.passed);

    return res.json({
      success: true,
      compiled: true,
      compilerOutput: 'Compilation successful (0 errors).',
      passedAll,
      testResults,
    });

  } catch (globalErr) {
    // Cleanup files on exception
    try {
      if (fs.existsSync(tempSrcPath)) fs.unlinkSync(tempSrcPath);
      if (fs.existsSync(tempBinPath)) fs.unlinkSync(tempBinPath);
    } catch (cleanupErr) {}

    return res.status(500).json({
      success: false,
      message: globalErr.message,
    });
  }
});

export default router;
