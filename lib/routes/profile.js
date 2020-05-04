const { Router } = require('express');
const auth = require('../middleware/auth.middleware');
const { getUser } = require('../models/profile');
const { getPartsAmount, getSetsAmount } = require('../models/collection');

const router = Router();

router.get('/mysets/all/count', auth, async (request, response) => {
  try {
    const setsCount = await getSetsAmount(request.user.userId);
    response.json(setsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/myparts/all/count', auth, async (request, response) => {
  try {
    const partsCount = await getPartsAmount(request.user.userId);
    response.json(partsCount);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/profile', auth, async (request, response) => {
  try {
    const user = await getUser(request.user.userId);
    response.json(user);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
