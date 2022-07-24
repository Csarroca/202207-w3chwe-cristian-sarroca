import Component from "../Component/component.js";
import { IComponent } from "../types/interfaces.js";

class Container extends Component implements IComponent {
  constructor(parent: HTMLElement) {
    super(parent, "container", "section");

    this.render();
  }

  render(): void {
    const html = `
    <h1 class="title">Pokedex</h1>
    `;
    this.element.innerHTML = html;
  }
}

export default Container;
