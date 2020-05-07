const { Router } = require('express');

const Set = require('../models/Schemas/set');
const Part = require('../models/Schemas/part');
const User = require('../models/Schemas/user');
const auth = require('../middleware/auth.middleware');
const {
  searchPartsRebrickable,
  searchThemeRebrickable,
  searchBrickset,
} = require('../models/search');
const {
  getAllSets,
  getAllParts,
  getSet,
  deleteSet,
} = require('../models/collection');

const router = Router();

router.post('/mysets/add', auth, async (request, response) => {
  try {
    const {
      set_num,
      name,
      num_parts,
      year,
      set_img_url,
      theme_id,
    } = request.body;

    const user = await User.findById(request.user.userId);
    const theme = await searchThemeRebrickable(theme_id);
    const thName = theme.name;
    const description = await searchBrickset(set_num);
    let set = await Set.findOne({ set_num });
    if (!set) {
      set = new Set({
        set_num,
        name,
        num_parts,
        year,
        set_img_url,
        theme: thName,
        description: description,
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
    const setsCollection = await getAllSets(request.user.userId);
    response.json(setsCollection);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/mysets/:setId', auth, async (request, response) => {
  try {
    const setId = request.params.setId;
    const set = await getSet(setId);
    response.json(set);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.delete('/mysets/:setId', auth, async (request, response) => {
  try {
    const setId = request.params.setId;
    await deleteSet(request.user.userId, setId);
    response.json('Deleted');
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all', auth, async (request, response) => {
  try {
    const partsCollection = await getAllParts(request.user.userId);
    response.json(partsCollection);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
