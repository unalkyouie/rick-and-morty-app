import { StyleSheet } from 'react-native';

import { colorPalette } from '../../../../styles/colorPalette';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colorPalette.lightGreen,
  },
  container: {
    backgroundColor: colorPalette.lightGreen,
    flex: 1,
    paddingHorizontal: 8,
    width: '100%',
  },
  filterToggle: {
    padding: 12,
    backgroundColor: colorPalette.primaryGreen,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
});
