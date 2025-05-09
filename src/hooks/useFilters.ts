import { useCallback, useState } from 'react';

export type StatusOption = 'Alive' | 'Dead' | 'Unknown';
export type SpeciesOption = 'Human' | 'Alien' | 'Humanoid' | 'Mythological';
export type GenderOption = 'Male' | 'Female' | 'Genderless' | 'unknown';

export default function useFilters() {
  const [selectedStatus, setSelectedStatus] = useState<StatusOption[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesOption[]>([]);
  const [selectedGender, setSelectedGender] = useState<GenderOption[]>([]);

  const onToggleStatus = useCallback((option: StatusOption) => {
    setSelectedStatus((prev) =>
      prev.includes(option)
        ? prev.filter((s) => s !== option)
        : [...prev, option],
    );
  }, []);

  const onToggleSpecies = useCallback((option: SpeciesOption) => {
    setSelectedSpecies((prev) =>
      prev.includes(option)
        ? prev.filter((s) => s !== option)
        : [...prev, option],
    );
  }, []);

  const onToggleGender = useCallback((option: GenderOption) => {
    setSelectedGender((prev) =>
      prev.includes(option)
        ? prev.filter((g) => g !== option)
        : [...prev, option],
    );
  }, []);

  const onReset = useCallback(() => {
    setSelectedStatus([]);
    setSelectedSpecies([]);
    setSelectedGender([]);
  }, []);

  const onApply = useCallback(() => {}, []);

  return {
    selectedStatus,
    selectedSpecies,
    selectedGender,
    onToggleStatus,
    onToggleSpecies,
    onToggleGender,
    onReset,
    onApply,
  };
}
