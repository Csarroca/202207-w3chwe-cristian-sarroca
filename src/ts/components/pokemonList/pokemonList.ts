const url = "https://pokeapi.co/api/v2/pokemon/1/";

const getPokemonsFromApi = async () => {
  const pokemons = await fetch(url);
  const data = await pokemons.json();
  return data;
};

export default getPokemonsFromApi;
