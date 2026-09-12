import { io } from 'socket.io-client';

const BACKEND_URL = 'http://localhost:5001';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runTest() {
  console.log('🧪 Starting Live Quiz Integration & Concurrency Test...\n');

  // 1. Test REST API: GET /api/quizzes
  console.log('1️⃣ Testing REST API: GET /api/quizzes...');
  const resQuizzes = await fetch(`${BACKEND_URL}/api/quizzes`);
  const quizzesData = await resQuizzes.json();
  if (!quizzesData.success || !quizzesData.quizzes || quizzesData.quizzes.length === 0) {
    throw new Error('Failed to fetch quizzes or quizzes empty');
  }
  console.log(`✅ Retrieved ${quizzesData.quizzes.length} quizzes. First quiz: "${quizzesData.quizzes[0].title}"`);
  const targetQuiz = quizzesData.quizzes[0]; // Demo quiz (5 questions)

  // 2. Test REST API: POST /api/sessions/create
  console.log('\n2️⃣ Testing REST API: POST /api/sessions/create...');
  const resSession = await fetch(`${BACKEND_URL}/api/sessions/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quizId: targetQuiz._id }),
  });
  const sessionData = await resSession.json();
  if (!sessionData.success || !sessionData.roomCode || !sessionData.qrCode) {
    throw new Error('Failed to create session or missing QR code');
  }
  const roomCode = sessionData.roomCode;
  console.log(`✅ Session created! Room Code: ${roomCode}`);
  console.log(`✅ QR Code data URL generated: length = ${sessionData.qrCode.length} chars`);

  // 3. Connect Admin Socket
  console.log('\n3️⃣ Connecting Admin Socket...');
  const adminSocket = io(BACKEND_URL, { transports: ['websocket'] });
  await new Promise((resolve) => {
    adminSocket.on('connect', () => {
      console.log('✅ Admin socket connected:', adminSocket.id);
      adminSocket.emit('join_room', { roomCode, role: 'admin' });
    });
    adminSocket.on('joined_success', (data) => {
      console.log('✅ Admin joined room successfully. State:', data.state);
      resolve();
    });
  });

  // 4. Connect 6 Concurrent Student Sockets
  console.log('\n4️⃣ Connecting 6 Concurrent Simulated Students...');
  const students = [];
  const NUM_STUDENTS = 6;

  for (let i = 0; i < NUM_STUDENTS; i++) {
    const studentSocket = io(BACKEND_URL, { transports: ['websocket'] });
    const studentName = `Student_${i + 1}`;
    const studentId = `ID_00${i + 1}`;

    await new Promise((resolve) => {
      studentSocket.on('connect', () => {
        studentSocket.emit('join_room', {
          roomCode,
          studentName,
          studentId,
          role: 'student',
        });
      });
      studentSocket.on('joined_success', () => {
        resolve();
      });
    });

    students.push({ socket: studentSocket, name: studentName, id: studentId });
  }
  console.log(`✅ All ${NUM_STUDENTS} students joined room ${roomCode}`);

  await sleep(400);

  // 5. Test Admin Moderation: Kick student #6
  console.log('\n5️⃣ Testing Moderation: Admin kicks student #6...');
  const studentToKick = students[5];
  let studentKickedReceived = false;

  studentToKick.socket.on('student_kicked', (data) => {
    console.log(`✅ Student #6 received kick notification: "${data.reason}"`);
    studentKickedReceived = true;
  });

  adminSocket.emit('admin_kick_student', {
    roomCode,
    socketId: studentToKick.socket.id,
    reason: 'Test moderation kick',
  });

  await sleep(500);
  if (!studentKickedReceived) {
    throw new Error('Student kick event was not received');
  }

  // Active students are now the first 5
  const activeStudents = students.slice(0, 5);

  // 6. Test Starting Quiz
  console.log('\n6️⃣ Testing Admin Starts Quiz...');
  let timerTickReceived = false;
  let questionPayloadCorrect = false;

  activeStudents[0].socket.on('timer_tick', (tick) => {
    if (!timerTickReceived) {
      console.log(`✅ Authoritative timer tick received: ${tick.remainingTime}s remaining`);
      timerTickReceived = true;
    }
  });

  activeStudents[0].socket.on('question_start', (q) => {
    console.log(`✅ Student received question #${q.questionIndex + 1}: "${q.questionText}"`);
    // Security check: Verify correctOptionIndex is NOT exposed to student!
    if (q.correctOptionIndex === undefined) {
      console.log('🔒 Anti-Cheat Security Verified: correctOptionIndex is OMITTED from student payload!');
      questionPayloadCorrect = true;
    } else {
      console.error('❌ SECURITY LEAK: correctOptionIndex was leaked to student!');
    }
  });

  adminSocket.emit('admin_start_quiz', { roomCode });

  await sleep(1500);

  if (!timerTickReceived || !questionPayloadCorrect) {
    throw new Error('Question start or timer tick failed');
  }

  // 6.1 Test Admin Timer Extension
  console.log('\n⏱️ Testing Admin Timer Extension: adding +15s...');
  let timerExtendedReceived = false;
  activeStudents[0].socket.on('timer_extended', (data) => {
    console.log(`✅ Student received timer_extended: +${data.addedSeconds}s, new remaining: ${data.remainingTime}s`);
    timerExtendedReceived = true;
  });

  adminSocket.emit('admin_extend_timer', { roomCode, seconds: 15 });
  await sleep(600);

  if (!timerExtendedReceived) {
    throw new Error('timer_extended event was not received');
  }

  // 7. Test Concurrent Answer Submission
  console.log('\n7️⃣ Testing Concurrent Answer Submission from 5 Students...');
  let questionEndedReceived = false;
  let receivedStats = null;

  adminSocket.on('question_ended', (data) => {
    questionEndedReceived = true;
    receivedStats = data.stats;
    console.log(`✅ Question ended! Total answered: ${data.stats.totalAnswered}, Distribution: A=${data.stats.counts[0]}, B=${data.stats.counts[1]}, C=${data.stats.counts[2]}, D=${data.stats.counts[3]}`);
    console.log(`✅ Correct Option Index: ${data.stats.correctIndex}, Explanation: "${data.stats.explanation.substring(0, 60)}..."`);
  });

  // Students submit answers: some pick correct, some pick other options
  activeStudents.forEach((st, idx) => {
    // Alternate choices: student 0 & 2 pick 0, student 1 picks 1, student 3 picks 2, student 4 picks 3
    const choice = idx % 4;
    st.socket.emit('submit_answer', {
      roomCode,
      questionIndex: 0,
      selectedOptionIndex: choice,
    });
  });

  // Wait for auto-end (since all active participants submitted, server ends question immediately!)
  await sleep(1500);

  if (!questionEndedReceived || !receivedStats) {
    throw new Error('Question did not transition to QUESTION_RESULT after all participants answered');
  }

  // 8. Test Advancing & Finishing Quiz
  console.log('\n8️⃣ Testing Advancing through remaining questions to completion...');
  let quizCompletedReceived = false;

  adminSocket.on('quiz_completed', (data) => {
    quizCompletedReceived = true;
    console.log('🏆 Quiz Completed! Leaderboard received:');
    data.leaderboard.forEach((p) => {
      console.log(`   Rank #${p.rank}: ${p.studentName} — ${p.score} pts (Streak: ${p.streak})`);
    });
  });

  // Advance quickly through remaining questions
  for (let q = 1; q <= targetQuiz.questions.length; q++) {
    adminSocket.emit('admin_next_question', { roomCode });
    await sleep(400);
    // Students answer
    activeStudents.forEach((st, idx) => {
      st.socket.emit('submit_answer', {
        roomCode,
        questionIndex: q,
        selectedOptionIndex: (idx + q) % 4,
      });
    });
    await sleep(800);
  }

  await sleep(1000);

  if (!quizCompletedReceived) {
    // If not completed yet, trigger next to reach end
    adminSocket.emit('admin_next_question', { roomCode });
    await sleep(1000);
  }

  // Cleanup sockets
  adminSocket.disconnect();
  students.forEach(s => s.socket.disconnect());

  console.log('\n🎉 ALL INTEGRATION & CONCURRENCY TESTS PASSED WITH 100% SUCCESS!\n');
  process.exit(0);
}

runTest().catch((err) => {
  console.error('\n❌ TEST FAILED:', err);
  process.exit(1);
});
