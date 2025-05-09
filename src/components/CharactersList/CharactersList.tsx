import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { Character } from '../../services/api/types';
import CharacterCard from '../CharacterCard/CharacterCard';

type Props = {
  characters: Character[];
  onPress: (character: Character) => void;
  loadMore: () => void;
};

const CharacterList: React.FC<Props> = ({ characters, onPress, loadMore }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard character={item} onPress={() => onPress(item)} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export default CharacterList;
