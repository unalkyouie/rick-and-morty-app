import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getCharacters } from '../services/api';
import useSearchCharacters from './useSearchCharacters';

const useCharacters = () => {
  const {
    searchQuery,
    searchResults,
    setSearchQuery,
    isErrorSearchResults,
    isLoadingSearchResults,
  } = useSearchCharacters();
  
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: ({ pageParam = 1 }) => getCharacters(pageParam),
    getNextPageParam: (lastPage) => {
      const nextPageUrl = lastPage.info.next;
      if (!nextPageUrl) return undefined;

      const nextPage = parseInt(
        new URL(nextPageUrl).searchParams.get('page') || '1',
      );
      return isNaN(nextPage) ? undefined : nextPage;
    },
    initialPageParam: 1,
    staleTime: Infinity,
    placeholderData: keepPreviousData,
  });

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const characters = useMemo(() => {
    if (searchQuery) {
      return searchResults?.results ?? [];
    }
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data, searchResults, searchQuery]);
  return {
    characters,
    loadMore,
    isLoading: isLoading || isLoadingSearchResults,
    isError: isError || isErrorSearchResults,
    searchQuery,
    setSearchQuery,
  };
};

export default useCharacters;
