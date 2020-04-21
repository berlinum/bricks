// Load environment variables from .env file
require('dotenv').config();

const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerValidation } = require('../validation');

const router = Router();

router.post('/register', async (request, response) => {
  const { error } = registerValidation(request.body);
  if (error) return response.status(400).send(error.details[0].message);

  try {
    const { name, email, password } = request.body;

    const candidate = await User.findOne({ email: email });
    if (candidate) {
      return response.status(400).json({
        message: 'This email address is already in use',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await user.save();
    response.status(201).json({
      message: 'A new user account has been created',
    });
  } catch (error) {
    response.status(500).json({
      message: 'Something went wrong, try again!',
    });
  }
});

router.post('/login', async (request, response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return response.status(400).json({ message: 'User not found' });
    }

    const matchPasswords = await bcrypt.compare(password, user.password);
    if (!matchPasswords) {
      return response
        .status(400)
        .json({ message: 'Incorrect username or password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '3h',
    });

    response.json({ token, userId: user.id });
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, try again!' });
  }
});

module.exports = router;
