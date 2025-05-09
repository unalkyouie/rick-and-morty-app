import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import useFavorites from '../../../../hooks/useFavorites';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const { favorites } = useFavorites();
  const { navigate } = useNavigation<MainStackNavigationProp>();

  const navigateToCharacterDetails = (character: Character) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No favorites yet!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <CharacterList
        onPress={navigateToCharacterDetails}
        characters={favorites}
      />
    </View>
  );
};

export default FavoriteCharactersScreen;
