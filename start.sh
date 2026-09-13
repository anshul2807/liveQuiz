#!/usr/bin/env bash
# LiveQuiz Dual Server Runner (macOS / Linux)

# Change directory to project root
cd "$(dirname "$0")"

echo ""
echo "====================================================="
echo "  ⚡ LiveQuiz Platform: Dual Server Launcher"
echo "====================================================="
echo "• Backend Port:  5001"
echo "• Frontend Port: 5173"
echo "• Press Ctrl+C at any time to stop all servers."
echo "====================================================="
echo ""

# Cleanup trap on exit / Ctrl+C
cleanup() {
  echo ""
  echo "🛑 Stopping LiveQuiz servers..."
  kill $BACKEND_PID $FRONTEND_PID 2>/dev/null
  wait $BACKEND_PID 2>/dev/null
  wait $FRONTEND_PID 2>/dev/null
  echo "✅ All servers shut down cleanly."
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# Start Backend
echo "🚀 Starting Backend on http://localhost:5001..."
(cd backend && npm run dev) &
BACKEND_PID=$!

# Start Frontend
echo "🚀 Starting Frontend on http://localhost:5173..."
(cd frontend && npm run dev) &
FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
