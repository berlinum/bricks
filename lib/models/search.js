const fetch = require('node-fetch');

async function searchBrickset(search) {
  const url = `https://brickset.com/api/v3.asmx/getSets?apiKey=${process.env.API_KEY_BRICKSET}&userHash=&params={'query':'${search}','extendedData':'1',"orderBy":"PiecesDESC"}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function searchRebrickable(search) {
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

module.exports = { searchBrickset, searchRebrickable };
