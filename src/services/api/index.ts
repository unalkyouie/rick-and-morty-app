import { APIResponse, Character } from "./types";

const BASE_URL = 'https://rickandmortyapi.com/api';


export const API = {
    get: async <T>(url: string): Promise<T> => {
      try {
        const response = await fetch(`${BASE_URL}/${url}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error('API Fetch Error:', error);
        throw error;
      }
    },
  };
  
  export const getCharacters = async (page: number = 1) => {
    return API.get<APIResponse<Character>>(`character/?page=${page}`);
  }; 

  export const searchCharactersByName = async (name: string) => {
    return API.get<APIResponse<Character>>(`character/?name=${encodeURIComponent(name)}`);
  };
  