const { Router } = require('express');
const path = require('path');
const User = require('../models/Schemas/user');
const cloudinary = require('cloudinary').v2;
const Datauri = require('datauri');
const auth = require('../middleware/auth.middleware');

const router = Router();

function toDataUri(file) {
  const dataUri = new Datauri();
  return dataUri.format(path.extname(file.originalname).toString(), file.buffer)
    .content;
}

router.post('/profile', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);

    const dataUriFile = toDataUri(request.file);
    const result = await cloudinary.uploader.upload(dataUriFile);
    const url = result.secure_url;

    user.img = url;
    await user.save();

    response.json(url);
  } catch (error) {
    console.error(error);
    response.status(500).send(error.message);
  }
});

module.exports = router;
