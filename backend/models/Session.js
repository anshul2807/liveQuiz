import mongoose from 'mongoose';

const ParticipantSchema = new mongoose.Schema({
  socketId: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    default: '',
  },
  isBanned: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    default: 0,
  },
  streak: {
    type: Number,
    default: 0,
  },
});

const ResponseSchema = new mongoose.Schema({
  questionIndex: {
    type: Number,
    required: true,
  },
  participantId: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    default: '',
  },
  selectedOption: {
    type: Number,
    min: 0,
    max: 3,
  },
  isCorrect: {
    type: Boolean,
    default: false,
  },
  responseTimeMs: {
    type: Number,
    default: 0,
  },
  pointsEarned: {
    type: Number,
    default: 0,
  },
});

const SessionSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      index: true,
    },
    quizId: {
      type: mongoose.Schema.Types.Mixed, // ObjectId or string ID
      ref: 'Quiz',
    },
    quizTitle: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['LOBBY', 'IN_PROGRESS', 'COMPLETED'],
      default: 'LOBBY',
    },
    participants: [ParticipantSchema],
    responses: [ResponseSchema],
    startedAt: {
      type: Date,
    },
    endedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Session || mongoose.model('Session', SessionSchema);
