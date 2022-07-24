import getPokemonsFromApi from "./utilities/pokemonList.js";
import AppContainer from "./components/App/AppContainer.js";

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

getPokemonsFromApi(url);

new AppContainer(document.body);
