const { Router } = require('express');
const Set = require('../models/Set');
const Part = require('../models/Part');

const router = Router();

router.get('/mysets/all/count', async (request, response) => {
  try {
    const setsCount = await Set.countDocuments();
    response.json(setsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all/count', async (request, response) => {
  try {
    const partsCount = await Part.aggregate([
      {
        $group: {
          _id: {
            id: null,
          },
          total_sum: { $sum: '$quantity' },
        },
      },
      { $project: { _id: 0, total_sum: 1 } },
    ]);
    response.json(partsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
