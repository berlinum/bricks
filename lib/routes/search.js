// Load environment variables from .env file
require('dotenv').config();
const { searchRebrickable } = require('../models/sets');
const { Router } = require('express');

const router = Router();

router.get('/sets', async (request, response) => {
  try {
    const search = request.query.q;
    const searchResults = await searchRebrickable(search);
    response.json(searchResults);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
