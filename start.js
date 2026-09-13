#!/usr/bin/env node
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const reset = '\x1b[0m';
const bold = '\x1b[1m';
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const magenta = '\x1b[35m';

console.log(`${bold}${magenta}=====================================================${reset}`);
console.log(`${bold}${magenta}  ⚡ LiveQuiz Platform: Dual Server Launcher ${reset}`);
console.log(`${bold}${magenta}=====================================================${reset}`);
console.log(`${cyan}• Backend API & WebSocket:  http://localhost:5001${reset}`);
console.log(`${green}• Frontend Vite & Lab:      http://localhost:5173${reset}`);
console.log(`${yellow}• Press Ctrl+C at any time to terminate both servers.${reset}\n`);

// Prefix stream pipe helper
function pipePrefixed(stream, prefix, color) {
  let buffer = '';
  stream.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop(); // keep partial line in buffer
    for (const line of lines) {
      if (line.trim()) {
        console.log(`${color}[${prefix}]${reset} ${line}`);
      }
    }
  });
}

// 1. Start Backend
const backendDir = path.join(__dirname, 'backend');
const backendCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const backend = spawn(backendCmd, ['run', 'dev'], {
  cwd: backendDir,
  env: { ...process.env, PORT: process.env.PORT || '5001' },
  shell: true,
});

pipePrefixed(backend.stdout, 'BACKEND', cyan);
pipePrefixed(backend.stderr, 'BACKEND', red);

// 2. Start Frontend
const frontendDir = path.join(__dirname, 'frontend');
const frontendCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const frontend = spawn(frontendCmd, ['run', 'dev'], {
  cwd: frontendDir,
  shell: true,
});

pipePrefixed(frontend.stdout, 'FRONTEND', green);
pipePrefixed(frontend.stderr, 'FRONTEND', red);

// Clean shutdown handler
let isShuttingDown = false;
function shutdown(code = 0) {
  if (isShuttingDown) return;
  isShuttingDown = true;
  console.log(`\n${yellow}🛑 Gracefully terminating backend and frontend processes...${reset}`);

  try {
    if (backend && !backend.killed) {
      backend.kill('SIGTERM');
    }
  } catch (e) {}

  try {
    if (frontend && !frontend.killed) {
      frontend.kill('SIGTERM');
    }
  } catch (e) {}

  setTimeout(() => {
    try {
      if (backend && !backend.killed) backend.kill('SIGKILL');
      if (frontend && !frontend.killed) frontend.kill('SIGKILL');
    } catch (e) {}
    process.exit(code);
  }, 1000);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
process.on('exit', () => shutdown(0));

backend.on('error', (err) => {
  console.error(`${red}[BACKEND ERROR] ${err.message}${reset}`);
});

frontend.on('error', (err) => {
  console.error(`${red}[FRONTEND ERROR] ${err.message}${reset}`);
});

backend.on('close', (code) => {
  if (!isShuttingDown) {
    console.log(`${red}[BACKEND] Exited with code ${code}${reset}`);
    shutdown(code);
  }
});

frontend.on('close', (code) => {
  if (!isShuttingDown) {
    console.log(`${red}[FRONTEND] Exited with code ${code}${reset}`);
    shutdown(code);
  }
});
