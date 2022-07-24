import PokemonCard from "../components/Card/Card.js";
import {
  PokemonAtributes,
  IPokemonData,
} from "../components/types/interfaces.js";

const pokemonsIventori = async (urlInventori: string[]) => {
  urlInventori.forEach(async (pokemonUrl: string) => {
    const response = await fetch(pokemonUrl);
    const data = await response.json();

    const {
      forms,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      base_experience,
      height,
      sprites: {
        other: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          home: { front_default },
        },
      },
      types,
    } = data;

    const pokemonName = forms[0].name;
    const pokemonType: string[][] = types.map((type: any) => type.type.name);
    const pokemonAtributes: PokemonAtributes[] = [
      pokemonName,
      base_experience,
      height,
      front_default,
      pokemonType,
    ];

    new PokemonCard(document.querySelector(".App-container"), pokemonAtributes);
  });
};

const getPokemonsFromApi = async (apiUrl: string): Promise<void> => {
  const response = await fetch(apiUrl);
  const data: IPokemonData = await response.json();

  const pokemonsList: string[] = [];
  data.results.forEach(async (pokemon) => {
    pokemonsList.push(pokemon.url);
  });
  pokemonsIventori(pokemonsList);
};

export default getPokemonsFromApi;
