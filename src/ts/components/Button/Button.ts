import Component from "../Component/component.js";
import { IComponent } from "../types/interfaces.js";

class Button extends Component implements IComponent {
  constructor(
    parent: HTMLElement,
    private text: string,
    private action: (event: Event) => void
  ) {
    super(parent, "button", "button");

    this.render();
    this.addListeners();
  }

  render(): void {
    this.element.textContent = this.text;
  }

  addListeners(): void {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
