import React from 'react';
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colorPalette } from '../../styles/colorPalette';
import { styles } from './SearchBar.styled';

interface Props {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onClear: () => void;
}

const SearchBar: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  onClear,
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder || 'Search the characters'}
        placeholderTextColor={colorPalette.darkGreen}
        value={value}
        onChangeText={onChangeText}
      />
      {value.length > 0 && (
        <Pressable
          onPress={onClear}
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.clearButtonPressed,
          ]}
        >
          <Ionicons name="close-outline" size={20} style={styles.clearIcon} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
