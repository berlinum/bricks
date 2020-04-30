require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  if (request.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      return response.status(401).json({ message: 'Authorization failed' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    request.user = decoded;
    next();
  } catch (e) {
    response.status(401).json({ message: 'Authorization failed' });
  }
};
