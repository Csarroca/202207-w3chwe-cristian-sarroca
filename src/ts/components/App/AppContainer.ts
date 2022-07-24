import Component from "../Component/component.js";
import { IComponent } from "../types/interfaces.js";
import PokemonList from "../PokemonList/PokemonList.js";
import { getPokemonDetail } from "../../services/index.js";
import Button from "../Button/Button.js";

class Container extends Component implements IComponent {
  private pokemons: any = [];

  private offset: number = 0;

  private limit: number = 22;

  constructor(parent: HTMLElement) {
    super(parent, "App-container", "div");
    (async () => {
      const response = await getPokemonDetail(this.offset, this.limit);
      this.pokemons = response;
      this.render();
    })();
  }

  async getPokemonsByPage(type: string): Promise<void> {
    if (type === "prev") {
      this.offset -= 20;
      this.limit -= 20;
      const response = await getPokemonDetail(this.offset, this.limit);
      this.pokemons = response;
    }
    if (type === "next") {
      this.offset += 20;
      this.limit += 20;
      const response = await getPokemonDetail(this.offset, this.limit);
      this.pokemons = response;
    }
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
    new Button(
      this.element.querySelector(".card-container"),
      "prev",
      () => this.offset > 0 && this.getPokemonsByPage("prev")
    );
    new Button(this.element.querySelector(".card-container"), "next", () =>
      this.getPokemonsByPage("next")
    );
  }
}

export default Container;
