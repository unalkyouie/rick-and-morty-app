export type StatusOption = 'Alive' | 'Dead' | 'Unknown';
export type SpeciesOption = 'Human' | 'Alien' | 'Humanoid' | 'Mythological';
export type GenderOption = 'Male' | 'Female' | 'Genderless' | 'unknown';

export interface APIResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<T>;
}

export interface Character {
  id: number;
  name: string;
  status: StatusOption;
  species: SpeciesOption;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  gender: GenderOption;
}
