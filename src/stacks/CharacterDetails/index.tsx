import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';
import { CharacterDetailsStackRoutes } from './CharacterDetails.routes';
import { CharacterDetailsScreen } from './screens';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorPalette.darkGreen,
        },
      }}
    >
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        children={CharacterDetailsScreen}
      />
    </Stack.Navigator>
  );
};
