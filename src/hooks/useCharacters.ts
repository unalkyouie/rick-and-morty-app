import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getCharacters } from '../services/api';

const useCharacters = () => {
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
    return data?.pages.flatMap((page) => page.results) ?? [];
  }, [data]);

  return {
    characters,
    loadMore,
    isLoading,
    isError,
  };
};

export default useCharacters;
