import {useNavigation} from '@react-navigation/native';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import React, { useMemo } from 'react';

import {MainStackNavigationProp} from '../../../Main/Main.routes';
import { getCharacters } from '../../../../services/api';

import {styles} from './CharacterList.styled';
import CharacterCard from '../../../../components/CharacterCard';

const CharacterListScreen = () => {
  const {navigate} = useNavigation<MainStackNavigationProp>();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn:  ({ pageParam = 1 }) => getCharacters(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage.info.next;
      if (!nextPageUrl) return undefined;

      const nextPage = parseInt(new URL(nextPageUrl).searchParams.get('page') || '1');
      return isNaN(nextPage) ? undefined : nextPage;
    },
    initialPageParam:1,
    staleTime: Infinity,
    placeholderData: keepPreviousData,

  });

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const characters = useMemo(() => {
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

const navigateToCharacterDetails = (id: number)=>
  navigate('CharacterDetailsStack', {
    screen: 'CharacterDetailsScreen',
    params: { id },
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
