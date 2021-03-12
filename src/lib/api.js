const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'en-US',
    'x-musement-currency': 'EUR',
    'x-musement-version': '3.4.0'
  }
}

async function getDataFromApi () {
  const apiUrl = `https://sandbox.musement.com/api/v3/venues/164/activities?offset=0`;

  const response = await fetch(apiUrl, options)
    .then(res => res.json())
    .then(data => data);

  return response;
}

export default getDataFromApi;
