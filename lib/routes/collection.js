const { Router } = require('express');

const Set = require('../models/Set');
const Part = require('../models/Part');
const User = require('../models/User');
const { searchPartsRebrickable } = require('../models/search');
const auth = require('../middleware/auth.middleware');

const router = Router();

router.post('/mysets/add', auth, async (request, response) => {
  try {
    const { set_num, name, num_parts, year, set_img_url } = request.body;

    const user = await User.findById(request.user.userId);

    let set = await Set.findOne({ set_num });
    if (!set) {
      set = new Set({
        set_num,
        name,
        num_parts,
        year,
        set_img_url,
      });

      await set.save();
      const parts = await searchPartsRebrickable(set_num);
      for (const part in parts) {
        await new Part({ ...parts[part], set: set.id }).save();
      }
    } else if (user.sets.includes(set.id)) {
      return response.json({ message: 'This set has already been added' });
    }

    user.sets.push(set.id);
    await user.save();

    response.status(201).json({
      message: 'A new set has been added',
    });
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/mysets/all', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);
    const setsCollection = await Set.find({
      _id: {
        $in: user.sets,
      },
    }).sort({
      date: -1,
    });
    response.json(setsCollection);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all', auth, async (request, response) => {
  try {
    const user = await User.findById(request.user.userId);
    const partsCollection = await Part.aggregate([
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

module.exports = router;
