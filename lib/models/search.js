const fetch = require('node-fetch');

async function searchBrickset(search) {
  const url = `https://brickset.com/api/v3.asmx/getSets?apiKey=${process.env.API_KEY_BRICKSET}&userHash=&params={'query':'${search}','extendedData':'1',"orderBy":"PiecesDESC"}`;
  const response = await fetch(url);
  const rowData = await response.json();
  const description = rowData.sets[0].extendedData.description;
  return description;
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

async function searchThemeRebrickable(search) {
  const url = `https://rebrickable.com/api/v3/lego/themes/${search}/`;
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
    title: part.part.name,
    element: part.part.part_num,
    color: part.color.name,
    img: part.part.part_img_url,
    quantity: part.quantity,
  }));
  return parts;
}

module.exports = {
  searchBrickset,
  searchSetsRebrickable,
  searchPartsRebrickable,
  searchThemeRebrickable,
};
