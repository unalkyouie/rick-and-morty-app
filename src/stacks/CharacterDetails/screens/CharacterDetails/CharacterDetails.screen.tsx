import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../../../components/Button/Button';
import useFavorites from '../../../../hooks/useFavorites';
import { colorPalette } from '../../../../styles/colorPalette';
import { MainStackNavigationProp } from '../../../Main/Main.routes';
import { CharacterDetailsStackParamList } from '../../CharacterDetails.routes';
import { styles } from './CharacterDetails.styled';

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterDetailsStackParamList,
  'CharacterDetailsScreen'
>;

const CharacterDetailsScreen = () => {
  const { params } = useRoute<CharacterDetailsScreenRouteProp>();

  const { character } = params;
  const { toggleFavorite, isFavorite } = useFavorites();
  const { goBack } = useNavigation<MainStackNavigationProp>();

  const favorite = isFavorite(character);
  const handleToggleFavorite = () => {
    toggleFavorite(character);
  };

  const buttonLabel = favorite ? 'REMOVE FROM LIKED' : 'ADD TO LIKED';
  const buttonIcon = {
    name: favorite ? 'star' : 'star-outline',
    color: favorite ? colorPalette.accent : undefined,
  };
  const backgroundColor = favorite
    ? colorPalette.darkGreen
    : colorPalette.primaryGreen;

  console.log(buttonLabel);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backText}>← Go back to Characters List</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Image source={{ uri: character?.image }} style={styles.image} />

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

          <Button
            variant="primary"
            label={buttonLabel}
            icon={buttonIcon}
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton,
              {
                backgroundColor,
              },
            ]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharacterDetailsScreen;
