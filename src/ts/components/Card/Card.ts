import Component from "../Component/component.js";
import { IComponent, PokemonAtributes } from "../types/interfaces.js";

class PokemonCard extends Component implements IComponent {
  h2: string;

  li: HTMLElement;

  constructor(
    parent: HTMLElement,
    public pokemonAtributes: PokemonAtributes[]
  ) {
    super(parent, "pokemon", "article");

    this.render();
  }

  render(): void {
    const html = `
    <h2 class = "pokemon__title">${this.pokemonAtributes[0]}</h2>
    <ul class = "pokemon__atributes">
    <li class = "pokemon__img"><img src=${this.pokemonAtributes[3]} alt=${this.pokemonAtributes[0]}></li>
        <li class = "pokemon__exp"> experience:${this.pokemonAtributes[1]}</li>
        <li class = "pokemon__height">height:${this.pokemonAtributes[2]}</li> 
        <li class = "pokemon__type"> type: ${this.pokemonAtributes[4]}</li>

    <ul> `;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
