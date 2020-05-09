const User = require('./schemas/User');

async function getUser(userId) {
  const user = await User.findById(userId);
  return user;
}

exports.getUser = getUser;
