const { Schema, model, Types } = require('mongoose');

const setSchema = new Schema({
  set_num: { type: String, required: true },
  name: { type: String, required: true },
  num_parts: { type: Number },
  year: { type: Number },
  set_img_url: { type: String },
  date: { type: Date, default: Date.now },
  owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Set', setSchema);
