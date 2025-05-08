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
    origin: {
      name:string;
      url: string;
  };
  gender: string; 

  }
  