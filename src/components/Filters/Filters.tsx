import React, { useState } from 'react';
import { View, ViewStyle } from 'react-native';


import { colorPalette } from '../../styles/colorPalette';
import Button from '../Button/Button';
import { styles } from './Filters.styled';
import FiltersCard from './FiltersCard';
import { GenderOption, SpeciesOption, StatusOption } from '../../services/api/types';

interface Props {
  selectedStatus: StatusOption[];
  selectedSpecies: SpeciesOption[];
  selectedGender: GenderOption[];
  onToggleStatus: (opt: StatusOption) => void;
  onToggleSpecies: (opt: SpeciesOption) => void;
  onToggleGender: (opt: GenderOption) => void;
  onReset: () => void;
  onApply: () => void;
  style?: ViewStyle;
}

const Filters: React.FC<Props> = ({
  selectedStatus,
  selectedSpecies,
  selectedGender,
  onToggleStatus,
  onToggleSpecies,
  onToggleGender,
  onReset,
  onApply,
  style,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={[styles.wrapper, style]}>
      <Button
        variant="primary"
        label="Filters"
        icon={{
          name: visible ? 'chevron-up' : 'chevron-down',
          color: colorPalette.white,
        }}
        onPress={() => setVisible((v) => !v)}
        style={[
          styles.toggleButton,
          {
            backgroundColor: visible
              ? colorPalette.darkGreen
              : colorPalette.primaryGreen,
          },
        ]}
      />
      {visible && (
        <FiltersCard
          selectedStatus={selectedStatus}
          selectedSpecies={selectedSpecies}
          selectedGender={selectedGender}
          onToggleStatus={onToggleStatus}
          onToggleSpecies={onToggleSpecies}
          onToggleGender={onToggleGender}
          onReset={onReset}
          onApply={onApply}
        />
      )}
    </View>
  );
};

export default Filters;
