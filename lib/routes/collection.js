const { Router } = require('express');
const Set = require('../models/Set');
const Part = require('../models/Part');
const { searchPartsRebrickable } = require('../models/search');

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
    const parts = await searchPartsRebrickable(set_num);
    for (const part in parts) {
      await new Part(parts[part]).save();
    }
    response.status(201).json({
      message: 'A new set has been added',
    });
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/mysets/all', async (request, response) => {
  try {
    const setsCollection = await Set.find().sort({ date: -1 });
    response.json(setsCollection);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/mysets/all/count', async (request, response) => {
  try {
    const setsCount = await Set.countDocuments();
    response.json(setsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all', async (request, response) => {
  try {
    const partsCollection = await Part.aggregate([
      {
        $group: {
          _id: {
            id: '$id',
          },
          total: { $sum: '$quantity' },
          partIds: {
            $addToSet: {
              name: '$name',
              id: '$id',
              part_num: '$part_num',
              color: '$color',
              part_img_url: '$part_img_url',
              quantity: '$quantity',
            },
          },
        },
      },
      {
        $sort: {
          total: -1,
        },
      },
    ]);
    response.json(partsCollection);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all/count', async (request, response) => {
  try {
    const partsCount = await Part.countDocuments();
    response.json(partsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
