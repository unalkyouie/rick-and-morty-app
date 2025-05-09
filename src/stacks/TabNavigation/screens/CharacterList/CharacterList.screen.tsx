import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useCharacters from '../../../../hooks/useCharacters';
import useSearchCharacters from '../../../../hooks/useSearchCharacters';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './CharacterList.styled';

const CharacterListScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();

  const { isLoading, isError, characters, loadMore, searchQuery, setSearchQuery } = useCharacters();

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
        placeholder="Enter character name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      { isLoading ? <ActivityIndicator size="large" /> :<FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            character={item}
            onPress={navigateToCharacterDetails}
          />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />}
    </View>
  );
};

export default CharacterListScreen;
