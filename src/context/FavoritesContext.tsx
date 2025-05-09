import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { Character } from '../services/api/types';

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

  const toggleFavorite = useCallback((character: Character) => {
    setFavorites((favs) =>
      favs.some((f) => f.id === character.id)
        ? favs.filter((f) => f.id !== character.id)
        : [...favs, character],
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
