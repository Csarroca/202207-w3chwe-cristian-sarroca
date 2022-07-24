import Component from "../Component/component.js";
import { IComponent } from "../types/interfaces.js";

class Container extends Component implements IComponent {
  constructor(parent: HTMLElement) {
    super(parent, "App-container", "div");

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokedex</h1>
    <div class= "card-list"> </div>
    `;
    this.element.innerHTML = html;
  }
}

export default Container;
