import React, { createContext, ReactNode, useState } from 'react';

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

  const toggleFavorite = (character: Character) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === character.id)) {
        return prevFavorites.filter((fav) => fav.id !== character.id);
      }
      return [...prevFavorites, character];
    });
  };

  const isFavorite = (character: Character) => {
    return favorites.some((item) => item.id === character.id);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
