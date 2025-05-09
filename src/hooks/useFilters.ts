import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

import { searchCharacters } from '../services/api';
import {
  GenderOption,
  SpeciesOption,
  StatusOption,
} from '../services/api/types';

const useFilters = () => {
  const [selectedStatus, setSelectedStatus] = useState<StatusOption[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesOption[]>([]);
  const [selectedGender, setSelectedGender] = useState<GenderOption[]>([]);
  const [applied, setApplied] = useState(false);

  const onToggleStatus = useCallback(
    (opt: StatusOption) =>
      setSelectedStatus((prev) =>
        prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt],
      ),
    [],
  );
  const onToggleSpecies = useCallback(
    (opt: SpeciesOption) =>
      setSelectedSpecies((prev) =>
        prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt],
      ),
    [],
  );
  const onToggleGender = useCallback(
    (opt: GenderOption) =>
      setSelectedGender((prev) =>
        prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt],
      ),
    [],
  );

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [
      'searchByFilters',
      selectedStatus,
      selectedSpecies,
      selectedGender,
    ],
    queryFn: () =>
      searchCharacters({
        status: selectedStatus,
        species: selectedSpecies,
        gender: selectedGender,
      }),
    enabled: false,
    placeholderData: keepPreviousData,
  });

  const onApply = useCallback(() => {
    setApplied(true);
    refetch();
  }, [refetch]);

  const onReset = useCallback(() => {
    setSelectedStatus([]);
    setSelectedSpecies([]);
    setSelectedGender([]);
    setApplied(false);
  }, []);

  return {
    selectedStatus,
    selectedSpecies,
    selectedGender,
    onToggleStatus,
    onToggleSpecies,
    onToggleGender,
    onApply,
    onReset,
    applied,
    filteredCharacters: data?.results,
    isLoadingFiltered: isLoading,
    isErrorFiltered: isError,
  };
};

export default useFilters;
