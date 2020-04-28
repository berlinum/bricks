const { Schema, model, Types } = require('mongoose');

const partSchema = new Schema({
  id: { type: Number },
  name: { type: String, required: true },
  part_num: { type: String },
  color: { type: String },
  part_img_url: { type: String },
  owner: { type: Types.ObjectId, ref: 'User' },
});

module.exports = model('Part', partSchema);
