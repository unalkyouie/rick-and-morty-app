import { StyleSheet } from 'react-native';

import { colorPalette } from '../../../../styles/colorPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colorPalette.lightGreen,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: colorPalette.darkGreen,
    textAlign: 'center',
    marginTop: 20,
  },
});
