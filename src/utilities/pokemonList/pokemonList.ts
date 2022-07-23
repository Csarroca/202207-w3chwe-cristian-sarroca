const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const getPokemonsFromApi = async (): Promise<void> => {
  const pokemons = await fetch(url);
  const data: Promise<object> = await pokemons.json();

  data.results.forEach(async (pokemon) => {
    const resolve = await fetch(pokemon.url);
    const pokemonData = await resolve.json();
  });
  return pokemonData;
};
getPokemonsFromApi();
export default getPokemonsFromApi;
