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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
