import { useCallback, useMemo, useState } from 'react';

import { Character } from '../services/api/types';
import useFavorites from './useFavorites';
import useFilters from './useFilters';

const useFavoriteFilter = () => {
  const { favorites } = useFavorites();
  const {
    selectedStatus,
    selectedSpecies,
    selectedGender,
    onToggleStatus,
    onToggleSpecies,
    onToggleGender,
    onReset: resetFilters,
    onApply: applyFilters,
  } = useFilters();

  const [applied, setApplied] = useState(false);

  const onApply = useCallback(() => {
    applyFilters();
    setApplied(true);
  }, [applyFilters]);

  const onReset = useCallback(() => {
    resetFilters();
    setApplied(false);
  }, [resetFilters]);

  const filteredFavorites = useMemo<Character[]>(() => {
    if (!applied) return favorites;
    return favorites.filter((c) => {
      if (selectedStatus.length && !selectedStatus.includes(c.status))
        return false;
      if (selectedSpecies.length && !selectedSpecies.includes(c.species))
        return false;
      if (selectedGender.length && !selectedGender.includes(c.gender))
        return false;
      return true;
    });
  }, [applied, favorites, selectedStatus, selectedSpecies, selectedGender]);

  return {
    filteredFavorites,
    filterProps: {
      selectedStatus,
      selectedSpecies,
      selectedGender,
      onToggleStatus,
      onToggleSpecies,
      onToggleGender,
      onReset,
      onApply,
    },
  };
};

export default useFavoriteFilter;
