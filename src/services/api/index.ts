import { APIResponse, Character } from './types';

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
  return API.get<APIResponse<Character>>(`character/?name=${name}`);
};

export const searchCharacters = async (filters: {
  name?: string;
  status?: string;
  species?: string;
}) => {
  const params = new URLSearchParams();
  if (filters.name) params.append('name', filters.name);
  if (filters.status) params.append('status', filters.status);
  if (filters.species) params.append('species', filters.species);

  const queryString = params.toString();
  const url = queryString ? `character/?${queryString}` : `character/`;
  return API.get<APIResponse<Character>>(url);
};
