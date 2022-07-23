export interface Component {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface IPokemon {
  name: string;
  number: number;
  imageUrl: string;
  types: string[];
}
