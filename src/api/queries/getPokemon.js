export const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!response.ok) {
    throw new Error('No se encontró el pokemon');
  }

  return response.json();
};
