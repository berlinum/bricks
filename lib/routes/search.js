// Load environment variables from .env file
require('dotenv').config();
const { getSets } = require('../models/sets');
const { Router } = require('express');

const router = Router();

router.get('/set', async (request, response) => {
  try {
    const search = request.query.q;
    const searchResults = await getSets(search);
    response.send(searchResults);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = router;
