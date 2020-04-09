const { Router } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = Router();

// /api/auth/register
router.post('/register', async (request, response) => {
  try {
    const { email, password } = request.body;
    const candidate = await User.findOne({ email: email });
    if (candidate) {
      return response
        .status(400)
        .json({ message: 'This email address is already in use' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email: email, password: hashedPassword });
    await user.save();
    response.status(201).json({ message: 'A new user account was created' });
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, try again!' });
  }
});

module.exports = router;
