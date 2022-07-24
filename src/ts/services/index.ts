/* eslint-disable no-console */
const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

const getPokemonsFromApi = async () => {
  let data: { [key: string]: any };
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    return error;
  }
  return data;
};

const getPokemonDetail = async () => {
  let resolvedPromises: { [key: string]: any }[];
  try {
    const { results } = await getPokemonsFromApi();
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
