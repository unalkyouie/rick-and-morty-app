import { StyleSheet } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colorPalette.lightGreen,
    borderColor: colorPalette.primaryGreen,
    borderRadius: 24,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'space-between',
    margin: 8,
    padding: 12,
    shadowColor: colorPalette.darkGreen,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  info: {
    flex: 1,
    paddingRight: 8,
    maxWidth: '33%',
  },
  label: {
    fontSize: 12,
    color: colorPalette.mediumGreen,
  },
  name: {
    fontSize: 20,
    color: colorPalette.darkGreen,
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: colorPalette.primaryGreen,
    marginBottom: 16,
  },
  image: {
    borderRadius: 16,
    height: 100,
    marginLeft: 12,
    width: 100,
  },
  favorite: {
    fontSize: 24,
    marginLeft: 8,
  },
  favorited: {
    color: '#FFD700',
  },
});
