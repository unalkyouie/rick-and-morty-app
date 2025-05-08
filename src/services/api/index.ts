import { APIResponse, Character } from "./types";

const BASE_URL = 'https://rickandmortyapi.com/api';


export const API = {
    get: async <T>(endpoint: string): Promise<APIResponse<T>> => {
      try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
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
  
  export const getCharacters = async (url: string = 'character/') => {
    return API.get<APIResponse<Array<Character>> >(url);
  };