const { Router } = require('express');
const auth = require('../middleware/auth.middleware');

const {
  searchSetsRebrickable,
  searchPartsRebrickable,
} = require('../models/search');

const { getFavSets, getAllSets } = require('../models/collection');

const router = Router();

router.get('/set', auth, async (request, response) => {
  try {
    const search = request.query.q;
    const sets = await searchSetsRebrickable(search);
    const favSets = await getFavSets(request.user.userId);
    const userSets = await getAllSets(request.user.userId);
    const setsWithFav = sets.results.map((set) => ({
      ...set,
      isFav: Boolean(favSets.find((favSet) => favSet.set_num === set.set_num)),
      isAdd: Boolean(
        userSets.find((userSet) => userSet.set_num === set.set_num)
      ),
    }));

    response.json(setsWithFav);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

router.get('/parts', async (request, response) => {
  try {
    const search = request.query.q;
    const searchResults = await searchPartsRebrickable(search);
    response.json(searchResults);
  } catch (error) {
    response.status(500).send(error.message);
  }
});

module.exports = router;
