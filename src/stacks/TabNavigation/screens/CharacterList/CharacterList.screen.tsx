import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';

import {MainStackNavigationProp} from '../../../Main/Main.routes';
import CharacterCard from '../../../../components/CharacterCard/CharacterCard';
import { Character } from '../../../../services/api/types';
import useCharacters from '../../../../hooks/useCharacters';
import {styles} from './CharacterList.styled';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {isLoading, isError, characters, loadMore} = useCharacters();

const navigateToCharacterDetails = (character: Character)=>
  navigate('CharacterDetailsStack', {
    screen: 'CharacterDetailsScreen',
    params: { character },
  });
  
  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Text>Character List</Text>
      <FlatList
        data={characters}
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
