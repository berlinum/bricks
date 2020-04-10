// Load environment variables from .env file
require('dotenv').config();

const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const router = Router();

router.post(
  '/register',
  [
    check('email', 'Invalid email address').isEmail(),
    check('password', 'Minimum 8 characters').isLength({ min: 8 }),
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration data',
        });
      }

      const { name, email, password } = request.body;

      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return response
          .status(400)
          .json({ message: 'This email address is already in use' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });
      await user.save();
      response.status(201).json({ message: 'A new user account was created' });
    } catch (error) {
      response
        .status(500)
        .json({ message: 'Something went wrong, try again!' });
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'This email address is not registered')
      .normalizeEmail()
      .isEmail(),
    check('password', 'Invalid password').exists(),
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if (!errors.isEmpty) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Invalid log in data',
        });
      }

      const { email, password } = request.body;
      const user = await User.findOne({ email: email });
      if (!user) {
        return response.status(400).json({ message: 'User not found' });
      }

      const matchPassword = await bcrypt.compare(password, user.password);
      if (!matchPassword) {
        return response
          .status(400)
          .json({ message: 'Incorrect username or password' });
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '3h',
      });

      response.json({ token, userId: user.id });
    } catch (error) {
      response
        .status(500)
        .json({ message: 'Something went wrong, try again!' });
    }
  }
);

module.exports = router;
