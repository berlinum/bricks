const { Router } = require('express');
const Set = require('../models/Set');

const router = Router();

router.post('/mysets/add', async (request, response) => {
  try {
    const { set_num, name, num_parts, year, set_img_url } = request.body;

    const existing = await Set.findOne({ set_num });
    if (existing) {
      return response.json({ message: 'This set has already been added' });
    }

    const set = new Set({
      set_num,
      name,
      num_parts,
      year,
      set_img_url,
    });

    await set.save();
    response.status(201).json({
      message: 'A new set has been added',
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

router.get('/mysets/all', async (request, response) => {
  try {
    const collection = await Set.find({});
    response.json(collection);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
