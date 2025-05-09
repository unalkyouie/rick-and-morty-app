import { APIResponse, Character } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const API = {
  get: async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}/${url}`);
      console.log(await response.json());
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
  return API.get<APIResponse<Character>>(`character/?name=${name}`);
};

export const searchCharacters = async (filters: {
  status?: string[];     
  species?: string[];  
  gender?: string[];    
}) => {
  const params = new URLSearchParams();
  if (filters.status) filters.status.forEach(item => params.append('status', item));
  if (filters.species)filters.species.forEach(item => params.append('species', item));
  if (filters.gender) filters.gender.forEach(item => params.append('gender', item));

  const query = params.toString();
  const url = query ? `character/?${query}` : 'character';
  return API.get<APIResponse<Character>>(url);
};