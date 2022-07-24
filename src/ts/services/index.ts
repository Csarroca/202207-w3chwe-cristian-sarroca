/* eslint-disable no-console */

const getPokemonsFromApi = async (offset: number, limit: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  let data: { [key: string]: any };
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    return error;
  }
  return data;
};

const getPokemonDetail = async (offset: number, limit: number) => {
  let resolvedPromises: { [key: string]: any }[];
  try {
    const { results } = await getPokemonsFromApi(offset, limit);
    resolvedPromises = await Promise.all(
      results.map(async (pokemon: { [key: string]: any }) => {
        const response = await fetch(pokemon.url);
        return response.json();
      })
    );
  } catch (error) {
    return error;
  }

  return resolvedPromises;
};

export { getPokemonsFromApi, getPokemonDetail };
