import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    default: '',
  },
  options: {
    type: [String],
    required: true,
    validate: [val => val.length === 4, 'Must provide exactly 4 options'],
  },
  correctOptionIndex: {
    type: Number,
    required: true,
    min: 0,
    max: 3,
  },
  timeLimit: {
    type: Number,
    default: 60,
    min: 5,
    max: 300,
  },
  explanation: {
    type: String,
    default: '',
  },
  subjectId: {
    type: String,
    default: 'oops',
  },
  language: {
    type: String,
    default: 'both',
  },
});

const QuizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    adminId: {
      type: String,
      default: 'admin-default',
    },
    subjectId: {
      type: String,
      default: 'oops',
    },
    unitId: {
      type: String,
      default: '',
    },
    unitNumber: {
      type: Number,
      default: 1,
    },
    unitLabel: {
      type: String,
      default: '',
    },
    unitTopic: {
      type: String,
      default: '',
    },
    setId: {
      type: String,
      default: '',
    },
    sectionTitle: {
      type: String,
      default: '',
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard', 'mixed', 'all'],
      default: 'medium',
    },
    questions: [QuestionSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
