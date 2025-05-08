import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import {styles} from './CharacterList.styled';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../Main/Main.routes';
import { Character } from '../../../../services/api/types';
import { getCharacters } from '../../../../services/api';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();
  const [characters, setCharacters] = useState<Array<Character>>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['characters'],
    queryFn: () => getCharacters(),
  });

  useEffect(() => {
    if (data?.results) {
      setCharacters(data.results);
    }
  }, [data]);

  
  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Text>CharactersListScreen</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 8, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.status} - {item.species}</Text>
          </View>
        )}
      />
      <Button
        title="Navigate to Details screen"
        onPress={(): void => {
          navigate('CharacterDetailsStack', {
            screen: 'CharacterDetailsScreen',
          });
        }}
      />
    </View>
  );
};

export default CharacterListScreen;
