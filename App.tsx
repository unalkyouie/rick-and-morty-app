import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { FavoritesProvider } from './src/context/FavoritesContext';
import QueryProvider from './src/services/QueryClientProvider';
import { MainStack } from './src/stacks/Main';

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
