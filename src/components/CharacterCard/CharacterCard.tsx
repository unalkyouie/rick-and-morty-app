import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { Character } from '../../services/api/types';
import { styles } from './CharacterCard.styled';

interface Props {
  character: Character;
  onPress: (character: Character)=>void;
}

const CharacterCard: React.FC<Props> = ({ character, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>onPress(character)}>
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

