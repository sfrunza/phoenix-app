const API_URL = 'http://localhost:3001/api/v1/prices';

async function fetchAPI() {
  const res = await fetch(API_URL, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  const json = await res.json();

  console.log(res);
  if (json.errors) {
    console.log(json.errors);
    console.log('error details');
    throw new Error('Failed to fetch API');
  }
  return { gg: 'Asdasd' };
}

export async function getPrices() {
  const data = await fetchAPI();
  console.log(data);

  return { gg: 'Asdasd' };
}
