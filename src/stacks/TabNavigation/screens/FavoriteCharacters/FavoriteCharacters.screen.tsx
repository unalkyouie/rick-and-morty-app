import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useDebounce from '../../../../hooks/useDebounce';
import useFavorites from '../../../../hooks/useFavorites';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './FavoriteCharacters.styled';
import useFilters from '../../../../hooks/useFilters';
import Filters from '../../../../components/Filters/Filters';

const FavoriteCharactersScreen = () => {
  const { favorites } = useFavorites();
  const { navigate } = useNavigation<MainStackNavigationProp>();

  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery, 300);


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

  const filtersProps = useFilters();
  const [applied, setApplied] = useState(false)

  const onFiltersApply = () => setApplied(true)
  const onFiltersReset = () => {
    setApplied(false);
    filtersProps.onReset();
  };

  const finalList = useMemo(() => {
    let list = favorites;
  
    if (debouncedQuery) {
      const q = debouncedQuery.toLowerCase();
      list = list.filter(item => item.name.toLowerCase().includes(q));
    }
  
    if (applied) {
      const { selectedStatus, selectedSpecies, selectedGender } = filtersProps;
      list = list.filter(item => {
        if (selectedStatus.length && !selectedStatus.includes(item.status)) return false;
        if (selectedSpecies.length && !selectedSpecies.includes(item.species)) return false;
        if (selectedGender.length && !selectedGender.includes(item.gender)) return false;
        return true;
      });
    }
  
    return list;
  }, [
    favorites,
    debouncedQuery,
    applied,
    filtersProps.selectedStatus,
    filtersProps.selectedSpecies,
    filtersProps.selectedGender,
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>Liked characters</Text>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        <Filters {...filtersProps} onApply={onFiltersApply} onReset={onFiltersReset}/>

        {finalList.length === 0 ? (
        <Text style={styles.emptyText}>No favorites match your criteria.</Text>
      ) : (
        <CharacterList
          onPress={navigateToCharacterDetails}
          characters={finalList}
        />
      )}
      </View>
    </SafeAreaView>
  );
};

export default FavoriteCharactersScreen;
