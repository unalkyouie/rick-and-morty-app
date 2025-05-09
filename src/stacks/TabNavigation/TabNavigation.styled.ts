import { StyleSheet } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';

export const styles = StyleSheet.create({
  tabBar: {
    paddingBottom: 10,
    backgroundColor: colorPalette.darkGreen,
    borderWidth:0,
    elevation: 0,
    height: 80,
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
