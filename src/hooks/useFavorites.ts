import { useContext } from 'react';

import FavoritesContext from '../context/FavoritesContext';

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  const { favorites, toggleFavorite, isFavorite } = context;

  return { favorites, toggleFavorite, isFavorite };
};

export default useFavorites;
