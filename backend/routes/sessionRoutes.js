import express from 'express';
import QRCode from 'qrcode';
import { createRoom, getRoom, getParticipantsList } from '../services/roomManager.js';

const router = express.Router();

// Helper to construct join URL
const getJoinUrl = (req, roomCode) => {
  const clientUrl = process.env.CLIENT_URL || `${req.protocol}://${req.get('host')}`;
  return `${clientUrl}/join/${roomCode}`;
};

// POST /api/sessions/create - Create room & generate QR
router.post('/create', async (req, res) => {
  try {
    const { quizId, quizData } = req.body;
    if (!quizId) {
      return res.status(400).json({ success: false, message: 'quizId is required' });
    }

    const room = await createRoom(quizId, null, quizData);
    const joinUrl = getJoinUrl(req, room.roomCode);

    // Generate QR Code Data URL with optimal contrast
    const qrCodeDataUrl = await QRCode.toDataURL(joinUrl, {
      width: 380,
      margin: 2,
      color: {
        dark: '#1e1b4b', // deep indigo/navy
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    });

    res.status(201).json({
      success: true,
      roomCode: room.roomCode,
      quizTitle: room.quizTitle,
      totalQuestions: room.quiz.questions.length,
      joinUrl,
      qrCode: qrCodeDataUrl,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/sessions/:roomCode - Check room status
router.get('/:roomCode', (req, res) => {
  const room = getRoom(req.params.roomCode);
  if (!room) {
    return res.status(404).json({ success: false, message: 'Room not found' });
  }

  res.json({
    success: true,
    roomCode: room.roomCode,
    quizTitle: room.quizTitle,
    status: room.status,
    totalQuestions: room.quiz.questions.length,
    currentQuestionIndex: room.currentQuestionIndex,
    participantsCount: room.participants.size,
  });
});

// GET /api/sessions/:roomCode/qrcode - Fetch QR code
router.get('/:roomCode/qrcode', async (req, res) => {
  try {
    const room = getRoom(req.params.roomCode);
    if (!room) {
      return res.status(404).json({ success: false, message: 'Room not found' });
    }

    const joinUrl = getJoinUrl(req, room.roomCode);
    const qrCodeDataUrl = await QRCode.toDataURL(joinUrl, {
      width: 380,
      margin: 2,
      color: {
        dark: '#1e1b4b',
        light: '#ffffff',
      },
    });

    res.json({ success: true, qrCode: qrCodeDataUrl, joinUrl });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
