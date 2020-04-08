const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 10 },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  password: { type: String, required: true, minlength: 8, maxlength: 1024 },
});

module.exports = model('User', userSchema);
