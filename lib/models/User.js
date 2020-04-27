const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
  },
  password: { type: String, required: true },
  sets: [{ type: Types.ObjectId, ref: 'Collection' }],
});

module.exports = model('User', userSchema);
