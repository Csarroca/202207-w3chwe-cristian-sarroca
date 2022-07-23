export interface IComponent {
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

export interface IPokemonData {
  count: number;
  next: string;
  previous: null | string;
  results: {
    name: string;
    url: string;
  }[];
}
