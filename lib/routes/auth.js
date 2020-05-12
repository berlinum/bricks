// Load environment variables from .env file
require('dotenv').config();

const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/schemas/User');
const { registerValidation, loginValidation } = require('../validation');

const router = Router();

router.post('/register', async (request, response) => {
  const { error } = registerValidation(request.body);
  if (error)
    return response.status(400).json({ message: error.details[0].message });

  try {
    const { name, email, password } = request.body;

    const candidate = await User.findOne({ email: email });
    if (candidate) {
      return response.status(400).json({
        message: 'This email address is already in use',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const avatarDefault =
      'https://res.cloudinary.com/dnpnj4zyr/image/upload/v1589187760/b2b6wngg7ypapj5fv6m9.jpg';

    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      img: avatarDefault,
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
  const { error } = loginValidation(request.body);
  if (error)
    return response.status(400).json({ message: error.details[0].message });

  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return response
        .status(400)
        .json({ message: 'Incorrect email or password' });
    }

    const matchPasswords = await bcrypt.compare(password, user.password);
    if (!matchPasswords) {
      return response
        .status(400)
        .json({ message: 'Incorrect email or password' });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '5h',
    });
    response.json({ token, userId: user.id });
  } catch (error) {
    response.status(500).json({ message: 'Something went wrong, try again!' });
  }
});

module.exports = router;
