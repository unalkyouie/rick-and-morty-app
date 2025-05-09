import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../../../components/Button/Button';
import CharacterList from '../../../../components/CharactersList/CharactersList';
import Filters from '../../../../components/Filters/Filters';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useCharacters from '../../../../hooks/useCharacters';
import { Character } from '../../../../services/api/types';
import { colorPalette } from '../../../../styles/colorPalette';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();

  const [showFilters, setShowFilters] = useState<boolean>(false);
  const {
    isLoading,
    isError,
    characters,
    loadMore,
    searchQuery,
    setSearchQuery,
    filtersProps,
  } = useCharacters();

  const navigateToCharacterDetails = (character: Character) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });

  if (isError) return <Text>Error</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        <Button
          variant="primary"
          label="FILTERS"
          onPress={() => setShowFilters((prev) => !prev)}
          style={[
            styles.filterToggle,
            {
              backgroundColor: showFilters
                ? colorPalette.darkGreen
                : colorPalette.primaryGreen,
            },
          ]}
          icon={{
            name: showFilters ? 'chevron-up' : 'chevron-down',
            color: colorPalette.white,
          }}
        />
        {showFilters && <Filters {...filtersProps} />}
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <CharacterList
            onPress={navigateToCharacterDetails}
            characters={characters}
            loadMore={loadMore}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CharacterListScreen;
