import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import useFavorites from '../../hooks/useFavorites';
import { Character } from '../../services/api/types';
import { colorPalette } from '../../styles/colorPalette';
import Button from '../Button/Button';
import { styles } from './CharacterCard.styled';

interface Props {
  character: Character;
  onPress: (character: Character) => void;
}

const CharacterCard: React.FC<Props> = ({ character, onPress }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(character);

  const handleToggleFavorite = () => {
    toggleFavorite(character);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(character)}>
      <View style={styles.info}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.name}>{character.name}</Text>

        <Text style={styles.label}>STATUS</Text>
        <Text style={styles.details}>{character.status}</Text>

        <Text style={styles.label}>SPECIES</Text>
        <Text style={styles.details}>{character.species}</Text>
      </View>

      <Image source={{ uri: character.image }} style={styles.image} />

      <Button
        variant="secondary"
        label="LIKE"
        onPress={handleToggleFavorite}
        style={styles.likeButton}
        icon={{
          name: favorite ? 'star' : 'star-outline',
          color: favorite ? colorPalette.accent : undefined,
        }}
      />
    </TouchableOpacity>
  );
};

export default CharacterCard;
