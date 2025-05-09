import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { searchCharactersByName } from "../services/api";

const useSearchCharacters = ()=>{
    const [searchQuery, setSearchQuery] = useState<string>('');

    const { data, isLoading, isError } = useQuery({
      queryKey: ['searchCharacters', searchQuery],
      queryFn: () => searchCharactersByName(searchQuery),
      enabled: !!searchQuery,
    });
  
return {
    searchQuery,
    setSearchQuery, 
    searchResults: data, 
    isLoadingSearchResults: isLoading,
    isErrorSearchResults: isError
    }
}

export default useSearchCharacters;