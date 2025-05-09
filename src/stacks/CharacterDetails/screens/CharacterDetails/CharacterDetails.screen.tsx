import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View } from 'react-native';

import { CharacterDetailsStackParamList } from '../../CharacterDetails.routes';
import { styles } from './CharacterDetails.styled';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const { params } = useRoute<CharacterDetailsScreenRouteProp>();

  const { character } = params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: character?.image }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.label}>NAME</Text>
        <Text style={styles.name}>{character?.name}</Text>

        <View style={styles.detailsRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>STATUS</Text>
            <Text style={styles.detailText}>{character?.status}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>ORIGIN</Text>
            <Text style={styles.detailText}>{character?.origin.name}</Text>
          </View>
        </View>

        <View style={styles.detailsRow}>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>SPECIES</Text>
            <Text style={styles.detailText}>{character?.species}</Text>
          </View>
          <View style={styles.detailBox}>
            <Text style={styles.detailLabel}>GENDER</Text>
            <Text style={styles.detailText}>{character?.gender}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetailsScreen;
