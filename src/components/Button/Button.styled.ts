import { StyleSheet } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 24,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: colorPalette.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  icon: {
    color: colorPalette.white,
  },
});
