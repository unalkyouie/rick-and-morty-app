import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import Filters from '../../../../components/Filters/Filters';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useCharacters from '../../../../hooks/useCharacters';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();

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
        <Text style={styles.title}>Characters</Text>

        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />

        <Filters {...filtersProps} />
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
