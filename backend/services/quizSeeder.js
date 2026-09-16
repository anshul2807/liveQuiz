import { SYLLABUS_UNITS, QUIZ_QUESTIONS } from '../data/quizData.js';
import Quiz from '../models/Quiz.js';
import { getDbStatus } from '../config/db.js';

// In-memory quizzes store for fallback or fast lookup
let inMemoryQuizzes = null;

export const generateDefaultQuizzes = () => {
  const quizzes = [];

  for (const unit of SYLLABUS_UNITS) {
    const isDSA = unit.subjectId === 'dsa';
    const subjectPrefix = isDSA ? '[DSA] ' : '[OOPs] ';
    const unitLabel = unit.title.split(':')[0].trim(); // e.g. "Unit I"
    const unitTopic = unit.title.split(':')[1]?.trim() || ''; // e.g. "Complexity Analysis, Arrays..."
    const unitNum = unit.id.includes('1') ? 1 : unit.id.includes('2') ? 2 : 3;

    // 1. Individual Section Quizzes (15 questions each: Easy, Medium, Hard)
    for (const set of unit.sets) {
      const setQuestions = QUIZ_QUESTIONS.filter(
        q => q.unitId === unit.id && q.setId === set.id
      ).map((q) => ({
        questionText: q.question,
        code: q.code || '',
        options: q.options,
        correctOptionIndex: q.correctAnswer,
        timeLimit: 60, // Default 1 minute (60s)
        explanation: q.explanation || '',
        subjectId: q.subjectId || unit.subjectId,
        language: q.language || 'both',
      }));

      quizzes.push({
        _id: `${unit.id}_${set.id}`,
        title: `${subjectPrefix}${unitLabel} - ${set.title}`,
        description: `${unitTopic || unit.description} (${set.difficulty.toUpperCase()} • ${setQuestions.length} Questions)`,
        adminId: 'admin-system',
        subjectId: unit.subjectId,
        unitId: unit.id,
        unitNumber: unitNum,
        unitLabel,
        unitTopic,
        setId: set.id,
        sectionTitle: set.title,
        difficulty: set.difficulty,
        questions: setQuestions,
        createdAt: new Date(),
      });
    }

    // 2. Full Unit Comprehensive Master Exam (45 questions across all 3 sections)
    const unitQuestions = QUIZ_QUESTIONS.filter(
      q => q.unitId === unit.id
    ).map((q) => ({
      questionText: q.question,
      code: q.code || '',
      options: q.options,
      correctOptionIndex: q.correctAnswer,
      timeLimit: 60,
      explanation: q.explanation || '',
      subjectId: q.subjectId || unit.subjectId,
      language: q.language || 'both',
    }));

    if (unitQuestions.length > 0) {
      quizzes.push({
        _id: `${unit.id}_full`,
        title: `🏆 ${subjectPrefix}${unitLabel} - Complete Unit Exam (All 3 Sections)`,
        description: `Comprehensive 45-question test covering Easy, Medium & Hard sections of ${unitLabel}: ${unitTopic}`,
        adminId: 'admin-system',
        subjectId: unit.subjectId,
        unitId: unit.id,
        unitNumber: unitNum,
        unitLabel,
        unitTopic,
        setId: 'full',
        sectionTitle: 'Complete Unit Exam (45 Qs)',
        difficulty: 'mixed',
        questions: unitQuestions,
        createdAt: new Date(),
      });
    }
  }

  // 3. Quick 5-Question Demo Quizzes for fast live testing
  const dsaDemoQuestions = QUIZ_QUESTIONS.filter(q => q.subjectId === 'dsa').slice(0, 5).map(q => ({
    questionText: q.question,
    code: q.code || '',
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    timeLimit: 60,
    explanation: q.explanation || '',
    subjectId: 'dsa',
    language: q.language || 'both',
  }));

  const oopsDemoQuestions = QUIZ_QUESTIONS.filter(q => q.subjectId === 'oops').slice(0, 5).map(q => ({
    questionText: q.question,
    code: q.code || '',
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    timeLimit: 60,
    explanation: q.explanation || '',
    subjectId: 'oops',
    language: q.language || 'both',
  }));

  quizzes.unshift({
    _id: 'demo_dsa_quiz',
    title: '⚡ [DSA] Quick 5-Question Demo Quiz',
    description: '1-minute timer per question — perfect for live testing DSA concepts',
    adminId: 'admin-system',
    subjectId: 'dsa',
    unitId: 'dsa_unit1',
    unitNumber: 1,
    unitLabel: 'Demo',
    unitTopic: 'Quick Live Simulation',
    setId: 'demo_dsa',
    sectionTitle: 'Quick Demo (5 Qs)',
    difficulty: 'easy',
    questions: dsaDemoQuestions,
    createdAt: new Date(),
  });

  quizzes.unshift({
    _id: 'demo_quick_quiz',
    title: '⚡ [OOPs] Quick 5-Question C++ Demo Quiz',
    description: '1-minute timer per question — perfect for live testing and demonstrations',
    adminId: 'admin-system',
    subjectId: 'oops',
    unitId: 'unit1',
    unitNumber: 1,
    unitLabel: 'Demo',
    unitTopic: 'Quick Live Simulation',
    setId: 'demo',
    sectionTitle: 'Quick Demo (5 Qs)',
    difficulty: 'easy',
    questions: oopsDemoQuestions,
    createdAt: new Date(),
  });

  return quizzes;
};

export const initQuizzes = async () => {
  inMemoryQuizzes = generateDefaultQuizzes();
  console.log(`📚 Initialized ${inMemoryQuizzes.length} preset quizzes in-memory (${QUIZ_QUESTIONS.length} total questions)`);

  if (getDbStatus()) {
    try {
      const count = await Quiz.countDocuments();
      if (count === 0) {
        console.log('🔄 Seeding default quizzes into MongoDB Atlas...');
        for (const quiz of inMemoryQuizzes) {
          const { _id, ...quizData } = quiz;
          await Quiz.create(quizData);
        }
        console.log('✅ Default quizzes seeded into MongoDB Atlas.');
      } else {
        // Ensure all preset quizzes (especially DSA and full unit exams) exist in MongoDB
        for (const quiz of inMemoryQuizzes) {
          const exists = await Quiz.findOne({ title: quiz.title });
          if (!exists) {
            const { _id, ...quizData } = quiz;
            await Quiz.create(quizData);
            console.log(`✅ Seeded missing quiz to MongoDB: ${quiz.title}`);
          }
        }
      }
    } catch (err) {
      console.error('Error seeding quizzes to Mongo:', err.message);
    }
  }
};

export const getAllQuizzes = async () => {
  if (!inMemoryQuizzes) {
    inMemoryQuizzes = generateDefaultQuizzes();
  }

  if (getDbStatus()) {
    try {
      const dbQuizzes = await Quiz.find().sort({ createdAt: 1 });
      if (dbQuizzes.length > 0) {
        // Ensure all in-memory presets (DSA units and full unit exams) are included
        const existingTitles = new Set(dbQuizzes.map(q => q.title));
        const missingPresets = inMemoryQuizzes.filter(p => !existingTitles.has(p.title));
        return [...dbQuizzes, ...missingPresets];
      }
    } catch (err) {
      console.warn('Failed to query Mongo, using in-memory store:', err.message);
    }
  }
  return inMemoryQuizzes;
};

export const getQuizById = async (id) => {
  if (!id) return null;
  if (!inMemoryQuizzes) {
    inMemoryQuizzes = generateDefaultQuizzes();
  }

  if (getDbStatus()) {
    try {
      // Check if id is valid ObjectId
      if (typeof id === 'string' && id.match(/^[0-9a-fA-F]{24}$/)) {
        const quiz = await Quiz.findById(id);
        if (quiz) return quiz;
      }
      const quiz = await Quiz.findOne({ $or: [{ setId: id }, { title: id }] });
      if (quiz) return quiz;
    } catch (err) {
      console.warn('Mongo find error, falling back to memory:', err.message);
    }
  }
  return inMemoryQuizzes.find(q => String(q._id) === String(id));
};

export const createCustomQuiz = async (quizData) => {
  if (getDbStatus()) {
    try {
      const newQuiz = await Quiz.create(quizData);
      return newQuiz;
    } catch (err) {
      console.warn('Failed to save in Mongo, saving in-memory:', err.message);
    }
  }
  const customQuiz = {
    _id: `custom_${Date.now()}`,
    ...quizData,
    createdAt: new Date(),
  };
  inMemoryQuizzes.push(customQuiz);
  return customQuiz;
};
