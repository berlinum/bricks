const fetch = require('node-fetch');

async function searchBrickset(search) {
  const url = `https://brickset.com/api/v3.asmx/getSets?apiKey=${process.env.API_KEY_BRICKSET}&userHash=&params={'query':'${search}','extendedData':'1',"orderBy":"PiecesDESC"}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function searchSetsRebrickable(search) {
  const url = `https://rebrickable.com/api/v3/lego/sets/?ordering=ayear&search=${search}`;
  const response = await fetch(url, {
    headers: {
      Authorization: process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

async function searchPartsRebrickable(search) {
  const url = `https://rebrickable.com/api/v3/lego/sets/${search}/parts/?page_size=1000`;
  const response = await fetch(url, {
    headers: {
      Authorization: process.env.API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const rowData = await response.json();
  const parts = rowData.results.map((part) => ({
    id: part.id,
    name: part.part.name,
    part_num: part.part.part_num,
    color: part.color.name,
    part_img_url: part.part.part_img_url,
    quantity: part.quantity,
  }));
  return parts;
}

module.exports = {
  searchBrickset,
  searchSetsRebrickable,
  searchPartsRebrickable,
};
