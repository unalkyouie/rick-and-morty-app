import {StyleSheet} from 'react-native';
import { colorPalette } from '../../../../styles/colorPalette';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colorPalette.lightGreen,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 24,
    marginBottom: 16,
  },
  infoContainer: {
    backgroundColor: colorPalette.white,
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    width: '90%',
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colorPalette.primaryGreen,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    color: colorPalette.darkGreen,
    marginVertical: 8,
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  detailBox: {
    backgroundColor: colorPalette.lightGreen,
    padding: 12,
    borderRadius: 12,
    margin: 4,
    alignItems: 'center',
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colorPalette.primaryGreen,
  },
  detailText: {
    fontSize: 16,
    color: colorPalette.darkGreen,
    marginTop: 4,
  },
  likeButton: {
    backgroundColor: colorPalette.primaryGreen,
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  likeText: {
    color: colorPalette.white,
    fontSize: 18,
    fontWeight: '600',
  },
});