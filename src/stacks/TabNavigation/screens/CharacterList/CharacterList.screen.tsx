import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import {MainStackNavigationProp} from '../../../Main/Main.routes';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useCharacters from '../../../../hooks/useCharacters';
import useSearchCharacters from '../../../../hooks/useSearchCharacters';
import { Character } from '../../../../services/api/types';
import {styles} from './CharacterList.styled';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {isLoading, isError, characters, loadMore} = useCharacters();
  const {searchQuery, setSearchQuery, searchResults, isLoadingSearchResults, isErrorSearchResults} = useSearchCharacters();

const navigateToCharacterDetails = (character: Character)=>
  navigate('CharacterDetailsStack', {
    screen: 'CharacterDetailsScreen',
    params: { character },
  });
  
  if (isLoading || isLoadingSearchResults) return <ActivityIndicator size="large" />;
  if (isError || isErrorSearchResults) return <Text>Error</Text>;

const listData = searchQuery ? searchResults?.results ?? [] : characters;

  return (
    <View style={styles.container}>
      <Text>Character List</Text>

      <SearchBar
        placeholder="Enter character name"
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard character={item} onPress={navigateToCharacterDetails}/>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default CharacterListScreen;
