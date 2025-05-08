import {useNavigation} from '@react-navigation/native';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import {MainStackNavigationProp} from '../../../Main/Main.routes';
import { APIResponse, Character } from '../../../../services/api/types';
import { getCharacters } from '../../../../services/api';

import {styles} from './CharacterList.styled';

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
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
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
