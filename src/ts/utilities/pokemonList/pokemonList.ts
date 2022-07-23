import { IPokemonData } from "../../components/types/interfaces.js";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

const getPokemonsFromApi = async (): Promise<void> => {
  const response = await fetch(url);
  const data: IPokemonData = await response.json();

  const pokemonsList: object[] = [];
  data.results.forEach(async (pokemon) => {
    const response2 = await fetch(pokemon.url);
    const pokemonData = await response2.json();
    pokemonsList.push(pokemonData);
  });
  console.log(pokemonsList);
};

export default getPokemonsFromApi;
