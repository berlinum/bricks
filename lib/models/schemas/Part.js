const { Schema, model, Types } = require('mongoose');

const partSchema = new Schema({
  id: { type: Number },
  title: { type: String, required: true },
  element: { type: String },
  color: { type: String },
  img: { type: String },
  quantity: { type: Number },
  set: { type: Types.ObjectId, ref: 'Set' },
});

module.exports = model('Part', partSchema);
// test
