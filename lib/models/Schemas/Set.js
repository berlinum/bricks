const { Schema, model } = require('mongoose');

const setSchema = new Schema({
  set_num: { type: String, required: true },
  name: { type: String, required: true },
  theme: { type: String },
  description: { type: String },
  num_parts: { type: Number },
  year: { type: Number },
  set_img_url: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = model('Set', setSchema);
