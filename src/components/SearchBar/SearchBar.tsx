import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';
import { styles } from './SearchBar.styled';

interface Props {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

//TOD0: Add search icon
const SearchBar: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  onClear,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Search...'}
        placeholderTextColor={colorPalette.darkGreen}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Text style={styles.clearText}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
