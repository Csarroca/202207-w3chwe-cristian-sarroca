import getPokemonsFromApi from "./utilities/pokemonList";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";

getPokemonsFromApi(url);
