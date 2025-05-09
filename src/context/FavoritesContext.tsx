import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Character } from '../services/api/types';
import { getStoredFavorites, saveFavorites } from '../services/Storage';

type FavoritesContextType = {
  favorites: Character[];
  toggleFavorite: (character: Character) => void;
  isFavorite: (character: Character) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    getStoredFavorites()
      .then(setFavorites)
      .catch(err => {
        console.error('Failed to load favorites', err);
        setFavorites([]); 
      });
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);


 const toggleFavorite = useCallback((character: Character) => {
    setFavorites(prev =>
      prev.some(f => f.id === character.id)
        ? prev.filter(f => f.id !== character.id)
        : [...prev, character]
    );
  }, []);

  const isFavorite = useCallback(
    (character: Character) => {
      return favorites.some((f) => f.id === character.id);
    },
    [favorites],
  );

  const contextValue = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites, toggleFavorite, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
