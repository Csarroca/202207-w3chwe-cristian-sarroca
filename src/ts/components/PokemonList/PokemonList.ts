import Component from "../Component/component.js";
import PokemonCard from "../Card/Card.js";
import { IComponent, PokemonAtributes } from "../types/interfaces.js";

class PokemonList extends Component implements IComponent {
  constructor(parent: HTMLElement, private pokemons: { [key: string]: any }[]) {
    super(parent, "card-list", "ul");
    this.render();
  }

  render(): void {
    this.pokemons.forEach((pokemon: { [key: string]: any }) => {
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
      } = pokemon;

      const pokemonName = forms[0].name;
      const pokemonType: string[][] = types.map(
        (type: { [key: string]: any }) => type.type.name
      );
      const pokemonAtributes: PokemonAtributes[] = [
        pokemonName,
        base_experience,
        height,
        front_default,
        pokemonType,
      ];

      new PokemonCard(this.element, pokemonAtributes);
    });
  }
}

export default PokemonList;
