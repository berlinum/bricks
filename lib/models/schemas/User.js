const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  sets: [{ type: Types.ObjectId, ref: 'Set' }],
  favorites: [{ type: Types.ObjectId, ref: 'Set' }],
  img: { type: String },
});

module.exports = model('User', userSchema);
