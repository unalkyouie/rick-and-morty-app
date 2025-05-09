import { StyleSheet } from 'react-native';

import { colorPalette } from '../../../../styles/colorPalette';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colorPalette.lightGreen,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colorPalette.lightGreen,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    padding: 8,
  },
  backText: {
    color: colorPalette.primaryGreen,
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: colorPalette.primaryGreen,
  },
  infoContainer: {
    backgroundColor: colorPalette.white,
    borderRadius: 24,
    padding: 20,
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 16,
    shadowColor: colorPalette.darkGreen,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  label: {
    fontSize: 14,
    color: colorPalette.mediumGreen,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  name: {
    fontSize: 28,
    marginVertical: 8,
    color: colorPalette.darkGreen,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 8,
  },
  detailBox: {
    backgroundColor: colorPalette.lightGreen,
    padding: 12,
    borderRadius: 12,
    margin: 4,
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: colorPalette.primaryGreen,
    marginBottom: 4,
    letterSpacing: 2,
  },
  detailText: {
    fontSize: 16,
    color: colorPalette.darkGreen,
  },
  favoriteButton: {
    marginTop: 16,
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 20,
    width: '100%',
  },
});
