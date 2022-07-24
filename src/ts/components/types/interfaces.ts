export interface IComponent {
  element: HTMLElement;
  render?: () => void;
  addListeners?: () => void;
}

export interface PokemonAtributes {
  pokemonName: string;
  experience: number;
  height: number;
  img: string;
  types: any[];
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
