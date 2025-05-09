import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import useFavorites from '../../../../hooks/useFavorites';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './FavoriteCharacters.styled';
import useDebounce from '../../../../hooks/useDebounce';
import SearchBar from '../../../../components/SearchBar/SearchBar';

const FavoriteCharactersScreen = () => {
  const { favorites } = useFavorites();
  const { navigate } = useNavigation<MainStackNavigationProp>();


  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery,300);  
  
  const filteredFavorites = useMemo(() => {
    if (!debouncedQuery) return favorites;
    return favorites.filter((character: Character) =>
      character.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [favorites, searchQuery]);

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
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />
      <CharacterList
        onPress={navigateToCharacterDetails}
        characters={filteredFavorites}
      />
    </View>
  );
};

export default FavoriteCharactersScreen;
