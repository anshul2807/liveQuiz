import { SYLLABUS_UNITS, QUIZ_QUESTIONS } from '../data/quizData.js';
import Quiz from '../models/Quiz.js';
import { getDbStatus } from '../config/db.js';

// In-memory quizzes store for fallback or fast lookup
let inMemoryQuizzes = [];

export const generateDefaultQuizzes = () => {
  const quizzes = [];

  for (const unit of SYLLABUS_UNITS) {
    for (const set of unit.sets) {
      const setQuestions = QUIZ_QUESTIONS.filter(
        q => q.unitId === unit.id && q.setId === set.id
      ).map((q, idx) => ({
        questionText: q.question,
        code: q.code || '',
        options: q.options,
        correctOptionIndex: q.correctAnswer,
        timeLimit: 60, // Default 1 minute (60s)
        explanation: q.explanation || '',
      }));

      quizzes.push({
        _id: `${unit.id}_${set.id}`,
        title: `${unit.title.split(':')[0]} - ${set.title}`,
        description: `${unit.description} (${set.difficulty.toUpperCase()} • ${setQuestions.length} Questions)`,
        adminId: 'admin-system',
        unitId: unit.id,
        setId: set.id,
        difficulty: set.difficulty,
        questions: setQuestions,
        createdAt: new Date(),
      });
    }
  }

  // Also create a "Quick 5-Question Demo Quiz" for lightning-fast testing!
  const demoQuestions = QUIZ_QUESTIONS.slice(0, 5).map(q => ({
    questionText: q.question,
    code: q.code || '',
    options: q.options,
    correctOptionIndex: q.correctAnswer,
    timeLimit: 60,
    explanation: q.explanation || '',
  }));

  quizzes.unshift({
    _id: 'demo_quick_quiz',
    title: '⚡ Quick 5-Question C++ Demo Quiz',
    description: '1-minute timer per question — perfect for live testing and demonstrations',
    adminId: 'admin-system',
    unitId: 'unit1',
    setId: 'demo',
    difficulty: 'easy',
    questions: demoQuestions,
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
      }
    } catch (err) {
      console.error('Error seeding quizzes to Mongo:', err.message);
    }
  }
};

export const getAllQuizzes = async () => {
  if (getDbStatus()) {
    try {
      const dbQuizzes = await Quiz.find().sort({ createdAt: 1 });
      if (dbQuizzes.length > 0) return dbQuizzes;
    } catch (err) {
      console.warn('Failed to query Mongo, using in-memory store:', err.message);
    }
  }
  return inMemoryQuizzes;
};

export const getQuizById = async (id) => {
  if (getDbStatus()) {
    try {
      // Check if id is valid ObjectId
      if (id.match(/^[0-9a-fA-F]{24}$/)) {
        const quiz = await Quiz.findById(id);
        if (quiz) return quiz;
      }
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
