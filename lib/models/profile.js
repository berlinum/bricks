const User = require('./schemas/user');

async function getUser(userId) {
  const user = await User.findById(userId);
  return user;
}

exports.getUser = getUser;
