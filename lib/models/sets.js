const fetch = require('node-fetch');

async function getSets(search) {
  const url = `https://rebrickable.com/api/v3/lego/sets/?search=${search}`;
  const response = await fetch(url, {
    headers: {
      Authorization: process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

module.exports = { getSets };
