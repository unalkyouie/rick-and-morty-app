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
    status: string;
    species: string;
    image: string;
  }
  
  export interface CharacterDetails {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    type: string;
    gender: string; 
    origin: {
        name:string;
        url: string;
    };
    localtion: {
        name:string;
        url: string;
    };
    episode: Array<string>;
    url: string;
    created: string;
  }
  