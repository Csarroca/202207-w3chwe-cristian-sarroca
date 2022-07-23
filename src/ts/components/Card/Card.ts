import Component from "../Component/Component.js";
import { Component as IComponent } from "../types/interfaces";

class PokemonCard extends Component implements IComponent {
  h2: string;

  li: HTMLElement;

  constructor(parent: HTMLElement, private pokemonAtributes: string[]) {
    super(parent, "pokemon", "li");
  }

  render(): void {
    const html = `
    <h2>${this.pokemonAtributes[0]}</h2>
    <ul>
        <li>${this.pokemonAtributes[1]}</li>
        <li>${this.pokemonAtributes[2]}</li>
        <li><img src=${this.pokemonAtributes[3]} alt=${this.pokemonAtributes[0]}></li>

    </ul>`;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
