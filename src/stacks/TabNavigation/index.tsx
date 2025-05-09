import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import  Ionicons from 'react-native-vector-icons/Ionicons';

import { CharacterListScreen } from './screens/CharacterList';
import { FavoriteCharactersScreen } from './screens/FavoriteCharacters';
import { styles } from './TabNavigation.styled';
import { colorPalette } from '../../styles/colorPalette';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName: string, focused: boolean) => {
  const iconMap: Record<string, { active: string; inactive: string }> = {
    'All Characters': { active: 'people', inactive: 'people-outline' },
    'Liked Characters': { active: 'heart', inactive: 'heart-outline' },
  };

  const iconName = focused ? iconMap[routeName]?.active : iconMap[routeName]?.inactive;
  return <Ionicons name={iconName} size={20} color={colorPalette.lightGreen} />;
};


export const TabNavigationStack = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
      headerShown: false,   
      tabBarActiveBackgroundColor: colorPalette.primaryGreen,
      tabBarIcon: ({ focused }) => getTabIcon(route.name, focused),
      tabBarInactiveBackgroundColor: colorPalette.darkGreen,
      tabBarActiveTintColor: colorPalette.white,
      tabBarInactiveTintColor: colorPalette.lightGreen,
      tabBarStyle: styles.tabBar,
    })}>
      <Tab.Screen
        name="Characters"
        component={CharacterListScreen}
        options={{       
          tabBarLabel: 'All Characters'    }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteCharactersScreen}
        options={{         
          tabBarLabel: 'Liked characters'
       }}
      />
    </Tab.Navigator>
  );
};
