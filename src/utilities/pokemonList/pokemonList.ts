/*
import { IPokemonData } from "../../ts/components/types/interfaces.js";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
const getPokemonsFromApi = async (): Promise<void> => {
  const pokemons = await fetch(url);
  const data: IPokemonData = await pokemons.json();

  const pokemonsList: object[] = [];
  Object.values(data.results).forEach(async (pokemon: object) => {
    const resolve = await fetch(pokemon.url);
    const pokemonData = await resolve.json();
    pokemonsList.push(pokemonData);
  });
};
getPokemonsFromApi();
export default getPokemonsFromApi;

return pokemonsList; */
