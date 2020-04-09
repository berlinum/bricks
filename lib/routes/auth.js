const { Router } = require('express');
const User = require('../models/User');

const router = Router();

// /api/auth/register
router.post('/register', async (request, response) => {
  try {
    const { email } = request.body;
    const candidate = await User.findOne({ email: email });
    if (candidate) {
      return response
        .status(400)
        .json({ message: 'This email address is already in use' });
    }
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, try again!' });
  }
});

module.exports = router;
