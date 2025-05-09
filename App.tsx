import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QueryProvider from './src/services/QueryClientProvider';
import { MainStack } from './src/stacks/Main';
import { FavoritesProvider } from './src/context/FavoritesContext';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryProvider>
      <FavoritesProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
        </FavoritesProvider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}

export default App;
