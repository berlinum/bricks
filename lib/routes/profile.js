const { Router } = require('express');
const Set = require('../models/Set');
const Part = require('../models/Part');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');

const router = Router();

router.get('/mysets/all/count', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);

    const setsCount = await Set.find({
      _id: {
        $in: user.sets,
      },
    }).countDocuments();
    response.json(setsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all/count', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);
    const partsCount = await Part.aggregate([
      {
        $match: {
          set: {
            $in: user.sets,
          },
        },
      },
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

router.get('/profile', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);
    const name = user.name;
    response.json(name);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
