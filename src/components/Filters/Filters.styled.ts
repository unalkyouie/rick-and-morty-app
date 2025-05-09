import { StyleSheet } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colorPalette.white,
    borderRadius: 16,
    padding: 20,
    margin: 16,
    shadowColor: colorPalette.darkGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colorPalette.darkGreen,
    marginBottom: 8,
  },
  optionLabel: {
    fontSize: 14,
    color: colorPalette.darkGreen,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkbox: {
    marginRight: 12,
    marginBottom: 12,
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: colorPalette.lightGreen,
    marginRight: 8,
  },
  applyButton: {
    backgroundColor: colorPalette.primaryGreen,
    marginLeft: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  resetText: {
    color: colorPalette.darkGreen,
  },
  applyText: {
    color: colorPalette.white,
  },
});
