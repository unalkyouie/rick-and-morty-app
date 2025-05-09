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
    data, 
    isLoading,
    isError
    }
}

export default useSearchCharacters;