import React from 'react';
import { Text, View } from 'react-native';

import {
  GenderOption,
  SpeciesOption,
  StatusOption,
} from '../../hooks/useFilters';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import { styles } from './FiltersCard.styled';

interface Props {
  selectedStatus: StatusOption[];
  selectedSpecies: SpeciesOption[];
  selectedGender: GenderOption[];
  onToggleStatus: (option: StatusOption) => void;
  onToggleSpecies: (option: SpeciesOption) => void;
  onToggleGender: (option: GenderOption) => void;
  onReset: () => void;
  onApply: () => void;
}

const DEFAULT_STATUS: Array<StatusOption> = ['Alive', 'Dead', 'Unknown'];
const DEFAULT_SPECIES: Array<SpeciesOption> = [
  'Human',
  'Alien',
  'Humanoid',
  'Mythological',
];
const DEFAULT_GENDER: Array<GenderOption> = [
  'Male',
  'Female',
  'Genderless',
  'unknown',
];

export const FiltersCard: React.FC<Props> = ({
  selectedStatus,
  selectedSpecies,
  selectedGender,
  onToggleStatus,
  onToggleSpecies,
  onToggleGender,
  onReset,
  onApply,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Status</Text>
      <View style={styles.optionsRow}>
        {DEFAULT_STATUS.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selectedStatus.includes(opt)}
            onPress={() => onToggleStatus(opt)}
            style={styles.checkbox}
          />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Species</Text>
      <View style={styles.optionsRow}>
        {DEFAULT_SPECIES.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selectedSpecies.includes(opt)}
            onPress={() => onToggleSpecies(opt)}
            style={styles.checkbox}
          />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Gender</Text>
      <View style={styles.optionsRow}>
        {DEFAULT_GENDER.map((opt) => (
          <Checkbox
            key={opt}
            label={opt}
            checked={selectedGender.includes(opt)}
            onPress={() => onToggleGender(opt)}
            style={styles.checkbox}
            labelStyle={styles.optionLabel}
          />
        ))}
      </View>
      <View style={styles.buttonsRow}>
        <Button
          variant="secondary"
          label="RESET"
          onPress={onReset}
          style={styles.resetButton}
        />

        <Button
          variant="primary"
          label="APPLY"
          onPress={onApply}
          style={styles.applyButton}
        />
      </View>
    </View>
  );
};

export default FiltersCard;
