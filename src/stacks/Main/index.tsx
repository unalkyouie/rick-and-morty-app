import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image } from 'react-native';

import { colorPalette } from '../../styles/colorPalette';
import { CharacterDetailsStack } from '../CharacterDetails';
import { TabNavigationStack } from '../TabNavigation';
import { MainStackRoutes } from './Main.routes';

const Tab = createNativeStackNavigator();

const HeaderLogo = () => (
  <Image
    source={require('../../assets/header.png')}
    style={{
      width: '100%',
      height: 80,
    }}
    resizeMode="contain"
  />
);

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colorPalette.primaryGreen,
        },
        headerTitle: () => <HeaderLogo />,
        headerTitleAlign: 'center',
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
