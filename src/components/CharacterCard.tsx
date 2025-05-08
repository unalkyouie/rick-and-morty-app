import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

import { Character } from '../services/api/types';
import { colorPalette } from '../styles/colorPalette';

interface Props {
  character: Character;
  onPress: (id: number)=>void;
}

const CharacterCard: React.FC<Props> = ({ character, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>onPress(character.id)}>
    <View style={styles.info}>
      <Text style={styles.label}>NAME</Text>
      <Text style={styles.name}>{character.name}</Text>

      <Text style={styles.label}>STATUS</Text>
      <Text style={styles.details}>{character.status}</Text>

      <Text style={styles.label}>SPECIES</Text>
      <Text style={styles.details}>{character.species}</Text>
    </View>

    <Image source={{ uri: character.image }} style={styles.image} />
  </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: colorPalette.lightGreen,
    borderColor: colorPalette.primaryGreen,
    borderRadius: 24,
    borderWidth: 1,
    elevation: 4,
    flexDirection: 'row',
    flex:3,
    justifyContent: 'space-between',
    margin: 8,
    padding: 12,
    shadowColor: colorPalette.darkGreen,
    shadowOffset: { width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  info: {
    flex:1,
    paddingRight: 8,
    maxWidth: '33%'
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
    width: 100
  },
});
