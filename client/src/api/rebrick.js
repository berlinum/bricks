export async function getSets(query) {
  const url = `https://rebrickable.com/api/v3/lego/sets/?search=${query}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: 'key 8c896cdab0e1cbdea849546bbc25d1a8',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
