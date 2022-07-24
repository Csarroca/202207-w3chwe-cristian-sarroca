import Component from "../Component/component.js";
import { IComponent } from "../types/interfaces.js";
import PokemonList from "../PokemonList/PokemonList.js";
import { getPokemonDetail } from "../../services/index.js";
import Button from "../Button/Button.js";

class Container extends Component implements IComponent {
  private pokemons: any = [];

  constructor(parent: HTMLElement) {
    super(parent, "App-container", "div");
    (async () => {
      const response = await getPokemonDetail();
      this.pokemons = response;
      this.render();
    })();

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokedex</h1>
    <div class= "card-container"> </div>
    `;
    this.element.innerHTML = html;
    new PokemonList(
      this.element.querySelector(".card-container"),
      this.pokemons
    );
    new Button(this.element.querySelector(".card-container"), "button", () =>
      console.log("menjaAnus")
    );
    new Button(this.element.querySelector(".card-container"), "button", () =>
      console.log("menjaAnus")
    );
  }
}

export default Container;
