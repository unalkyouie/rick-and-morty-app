import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import CharacterList from '../../../../components/CharactersList/CharactersList';
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
  } = useCharacters();

  const navigateToCharacterDetails = (character: Character) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });

  if (isError) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Text>Character List</Text>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

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
  );
};

export default CharacterListScreen;
