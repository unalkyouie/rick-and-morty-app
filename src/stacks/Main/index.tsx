import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { colorPalette } from '../../styles/colorPalette';
import { CharacterDetailsStack } from '../CharacterDetails';
import { TabNavigationStack } from '../TabNavigation';
import { MainStackRoutes } from './Main.routes';

const Tab = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorPalette.primaryGreen,
        },
      }}
    >
      <Tab.Screen
        name={MainStackRoutes.TabNavigationStack}
        component={TabNavigationStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={MainStackRoutes.CharacterDetailsStack}
        component={CharacterDetailsStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
