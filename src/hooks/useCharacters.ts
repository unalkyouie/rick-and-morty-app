import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getCharacters } from '../services/api';
import useFilters from './useFilters';
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
    applied,
    filteredCharacters,
    isLoadingFiltered,
    isErrorFiltered,
    selectedStatus,
    selectedSpecies,
    selectedGender,
    onToggleStatus,
    onToggleSpecies,
    onToggleGender,
    onApply,
    onReset,
  } = useFilters();

  const {
    data: infiniteData,
    isLoading: isLoadingInfinite,
    isError: isErrorInfinite,
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
    if (searchQuery) return searchResults?.results ?? [];
    if (applied) return filteredCharacters ?? [];
    return infiniteData?.pages.flatMap((p) => p.results) ?? [];
  }, [searchQuery, searchResults, applied, filteredCharacters, infiniteData]);

  const isLoading =
    (searchQuery ? isLoadingSearchResults : false) ||
    (applied ? isLoadingFiltered : isLoadingInfinite);

  const isError =
    (searchQuery ? isErrorSearchResults : false) ||
    (applied ? isErrorFiltered : isErrorInfinite);

  return {
    characters,
    loadMore,
    isLoading,
    isError,
    searchQuery,
    setSearchQuery,
    filtersProps: {
      selectedStatus,
      selectedSpecies,
      selectedGender,
      onToggleStatus,
      onToggleSpecies,
      onToggleGender,
      onReset,
      onApply,
    },
  };
};

export default useCharacters;
