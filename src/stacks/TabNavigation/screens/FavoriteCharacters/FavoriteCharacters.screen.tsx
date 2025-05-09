import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import Filters from '../../../../components/Filters/Filters';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useDebounce from '../../../../hooks/useDebounce';
import useFavoriteFilter from '../../../../hooks/useFavoriteFilter';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './FavoriteCharacters.styled';

const FavoriteCharactersScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();
  const { filteredFavorites, filterProps } = useFavoriteFilter();

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 300);

  const list = useMemo<Character[]>(() => {
    if (!debouncedQuery) return filteredFavorites;
    const searchedItems = debouncedQuery.toLowerCase();
    return filteredFavorites.filter((item) =>
      item.name.toLowerCase().includes(searchedItems),
    );
  }, [filteredFavorites, debouncedQuery]);

  const navigateToCharacterDetails = (character: Character) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Liked Characters</Text>

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        <Filters {...filterProps} />

        {list.length === 0 ? (
          <Text style={styles.emptyText}>
            {searchQuery ||
            filterProps.selectedStatus.length ||
            filterProps.selectedSpecies.length ||
            filterProps.selectedGender.length
              ? 'No favorites match your criteria.'
              : 'No favorites yet!'}
          </Text>
        ) : (
          <CharacterList
            onPress={navigateToCharacterDetails}
            characters={list}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteCharactersScreen;
