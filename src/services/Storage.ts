import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from './api/types';

const FAVORITES_KEY = '@ramapp:favorites';

export const getStoredFavorites = async (): Promise<Character[]> => {
  try {
    const json = await AsyncStorage.getItem(FAVORITES_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('getStoredFavorites error', e);
    return [];
  }
};

export const saveFavorites = async (favorites: Character[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error('saveFavorites error', e);
  }
};
