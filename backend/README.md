# LiveQuiz Backend API & WebSocket Engine

Real-time synchronized multiplayer quiz arena, C++ coding lab compiler, and standalone C/C++ Web IDE execution engine.

---

## ⚡ Features

- **Authoritative Real-Time WebSocket Engine**: Powered by Socket.io with room isolation, server-side synchronized timers, anti-cheat timestamp validation, and live score multiplier calculations.
- **C & C++ Code Execution Sandbox**:
  - Compiles and runs C17 (`clang`) and C++17 (`clang++`).
  - Supports custom Standard Input (stdin).
  - Virtual filesystem with dynamic file uploads (`fstream`, `fopen`).
  - Automatic detection and capture of newly generated output files.
- **RESTful API**:
  - `/api/quizzes`: Fetch and create quiz sets.
  - `/api/sessions`: Create and manage live Kahoot-style rooms with QR code generation.
  - `/api/admin`: Admin authentication with JWT bearer tokens.
  - `/api/challenges`: 6 structured C++ curriculum challenges with automated test execution.
  - `/api/ide`: Standalone multi-file C/C++ playground execution endpoint.
  - `/api/health`: Database and service health check.

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **C/C++ Compilers**: `clang` and `clang++` installed on the system path
  - On macOS: Installed via `xcode-select --install`
  - On Ubuntu/Debian: `sudo apt install build-essential clang`

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file based on `.env.example`:
```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/kahoot_quiz?retryWrites=true&w=majority
CLIENT_URL=http://localhost:5173
```
*(Note: If `MONGO_URI` is not provided or MongoDB is offline, the server automatically boots with in-memory persistence for zero setup friction.)*

### 4. Running the Server
```bash
# Development (with nodemon hot-reload)
npm run dev

# Production
npm start
```

---

## 🔌 WebSocket Events Reference

| Event | Direction | Description |
|---|---|---|
| `join-room` | Client ➔ Server | Student joins room with PIN and nickname |
| `start-quiz` | Host ➔ Server | Instructor starts the active session |
| `submit-answer` | Client ➔ Server | Student submits option index with timestamp |
| `next-question` | Host ➔ Server | Host advances to the next question |
| `timer-sync` | Server ➔ Client | Synchronized remaining time broadcast |
| `question-results` | Server ➔ Client | Answer distribution and speed bonus calculation |
| `leaderboard-update` | Server ➔ Client | Top 5 player leaderboard and podium |
