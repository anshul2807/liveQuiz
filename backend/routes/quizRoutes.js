import express from 'express';
import { getAllQuizzes, getQuizById, createCustomQuiz } from '../services/quizSeeder.js';

const router = express.Router();

// GET all quizzes
router.get('/', async (req, res) => {
  try {
    const quizzes = await getAllQuizzes();
    res.json({ success: true, quizzes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single quiz by ID
router.get('/:id', async (req, res) => {
  try {
    const quiz = await getQuizById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ success: false, message: 'Quiz not found' });
    }
    res.json({ success: true, quiz });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// POST create custom quiz
router.post('/', async (req, res) => {
  try {
    const { title, description, questions, difficulty } = req.body;
    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Title and an array of questions are required',
      });
    }

    // Validate each question
    for (const q of questions) {
      if (!q.questionText || !q.options || q.options.length !== 4 || q.correctOptionIndex === undefined) {
        return res.status(400).json({
          success: false,
          message: 'Each question must have questionText, 4 options, and correctOptionIndex (0-3)',
        });
      }
    }

    const quiz = await createCustomQuiz({
      title,
      description: description || '',
      difficulty: difficulty || 'medium',
      questions,
      adminId: 'admin-user',
    });

    res.status(201).json({ success: true, quiz });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
