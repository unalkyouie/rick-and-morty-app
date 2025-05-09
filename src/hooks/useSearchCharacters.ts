import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { searchCharactersByName } from '../services/api';
import useDebounce from './useDebounce';

export type Filters = {
  name: string;
  status: string;
  species: string;
};



const useSearchCharacters = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const debouncedQuery = useDebounce(searchQuery);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchCharacters', debouncedQuery],
    queryFn: () => searchCharactersByName(debouncedQuery),
    enabled: !!debouncedQuery,
  });

  return {
    searchQuery,
    setSearchQuery,
    searchResults: data,
    isLoadingSearchResults: isLoading,
    isErrorSearchResults: isError,
  };
};

export default useSearchCharacters;
