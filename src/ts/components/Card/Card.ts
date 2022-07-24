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
    <h2>${this.pokemonAtributes[0]}</h2>
    <ul>
    <li><img src=${this.pokemonAtributes[3]} alt=${this.pokemonAtributes[0]}></li>
        <li> experience:${this.pokemonAtributes[1]}</li>
        <li>height:${this.pokemonAtributes[2]}</li> 
       <li> type: ${this.pokemonAtributes[4]}</li>

    <ul> `;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
