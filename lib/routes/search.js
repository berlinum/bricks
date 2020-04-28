const {
  searchSetsRebrickable,
  searchPartsRebrickable,
} = require('../models/search');
const { Router } = require('express');

const router = Router();

router.get('/set', async (request, response) => {
  try {
    const search = request.query.q;
    const searchResults = await searchSetsRebrickable(search);
    response.json(searchResults);
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
