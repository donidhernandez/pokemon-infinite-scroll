export const getPokemons = async ({ url = null, offset = 0, limit = 20 }) => {
  const urlToFetch =
    url ?? `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const response = await fetch(urlToFetch);

  if (!response.ok) {
    throw new Error('No pudimos obtener los pokemons');
  }

  return response.json();
};
