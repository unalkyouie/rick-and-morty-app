import { StyleSheet } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colorPalette.white,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colorPalette.primaryGreen,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colorPalette.darkGreen,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 8,
    color: colorPalette.darkGreen,
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  clearButtonPressed: {
    backgroundColor: colorPalette.lightGreen,
  },
  clearIcon: {
    fontSize: 18,
    color: colorPalette.primaryGreen,
  },
});
