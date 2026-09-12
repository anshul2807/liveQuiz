import express from 'express';

const router = express.Router();

// POST /api/admin/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const expectedUser = process.env.ADMIN_USERNAME || 'admin';
  const expectedPass = process.env.ADMIN_PASSWORD || 'admin123';

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password are required',
    });
  }

  if (username.trim() === expectedUser && password === expectedPass) {
    // Generate a simple secure token for session
    const token = `admin_auth_${Buffer.from(`${username}:${Date.now()}`).toString('base64')}`;
    return res.json({
      success: true,
      token,
      admin: {
        username: expectedUser,
        role: 'admin',
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid admin username or password',
  });
});

// GET /api/admin/verify
router.get('/verify', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer admin_auth_')) {
    return res.json({ success: true, verified: true });
  }
  return res.status(401).json({ success: false, verified: false });
});

export default router;
