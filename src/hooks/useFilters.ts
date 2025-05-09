import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import { searchCharacters } from '../services/api';

export type StatusOption = 'Alive' | 'Dead' | 'Unknown';
export type SpeciesOption = 'Human' | 'Alien' | 'Humanoid' | 'Mythological';
export type GenderOption = 'Male' | 'Female' | 'Genderless' | 'unknown';

const  useFilters=()=> {
  const [selectedStatus, setSelectedStatus] = useState<StatusOption[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesOption[]>([]);
  const [selectedGender, setSelectedGender] = useState<GenderOption[]>([]);
  const [applyFilters, setApplyFilters] = useState<boolean>(false);

  const onToggleStatus = useCallback((opt: StatusOption) =>
    setSelectedStatus(prev =>
      prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]
    )
  , []);

  const onToggleSpecies = useCallback((opt: SpeciesOption) =>
    setSelectedSpecies(prev =>
      prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]
    )
  , []);

  const onToggleGender = useCallback((opt: GenderOption) =>
    setSelectedGender(prev =>
      prev.includes(opt) ? prev.filter(x => x !== opt) : [...prev, opt]
    )
  , []);

  const onReset = useCallback(() => {
    setSelectedStatus([]);
    setSelectedSpecies([]);
    setSelectedGender([]);
  }, []);

  const query = useQuery({
    queryKey: ['searchByFilters', selectedStatus, selectedSpecies, selectedGender],
    queryFn: () =>
      searchCharacters({
        status: selectedStatus,
        species: selectedSpecies,
        gender: selectedGender,
      }),
    enabled: applyFilters,
    placeholderData: keepPreviousData,
  });

  const onApply = useCallback(() => {
setApplyFilters(true);
query.refetch()
  }, [query]);

  return {
    selectedStatus,
    selectedSpecies,
    selectedGender,
    onToggleStatus,
    onToggleSpecies,
    onToggleGender,
    onReset,
    onApply,
    filteredCharacters: query.data?.results,
    isFetchingFilteredCharacters: query.isLoading,
    isErrorFilteredCharacters: query.isError,
  };
};

export default useFilters;
