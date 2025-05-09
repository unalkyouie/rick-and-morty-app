import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CharacterList from '../../../../components/CharactersList/CharactersList';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import useCharacters from '../../../../hooks/useCharacters';
import { Character } from '../../../../services/api/types';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { styles } from './CharacterList.styled';
import Filters from '../../../../components/Filters/Filters';

const CharacterListScreen = () => {
  const { navigate } = useNavigation<MainStackNavigationProp>();
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedSpecies, setSelectedSpecies] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const onToggleStatus = (option: string) => {
  };
  const onToggleSpecies = (option: string) => {
  };
  const onToggleGender = (option: string) => {
  };
  const onReset = () => {
  };
  const onApply = () => {
  };

  
  const {
    isLoading,
    isError,
    characters,
    loadMore,
    searchQuery,
    setSearchQuery,
  } = useCharacters();

  const navigateToCharacterDetails = (character: Character) =>
    navigate('CharacterDetailsStack', {
      screen: 'CharacterDetailsScreen',
      params: { character },
    });

  if (isError) return <Text>Error</Text>;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        <Filters
          selectedStatus={selectedStatus}
          selectedSpecies={selectedSpecies}
          selectedGender={selectedGender}
          onToggleStatus={onToggleStatus}
          onToggleSpecies={onToggleSpecies}
          onToggleGender={onToggleGender}
          onReset={onReset}
          onApply={onApply}
        />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <CharacterList
            onPress={navigateToCharacterDetails}
            characters={characters}
            loadMore={loadMore}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CharacterListScreen;
