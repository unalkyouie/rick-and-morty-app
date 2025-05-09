import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import QueryProvider from './src/services/QueryClientProvider';
import { MainStack } from './src/stacks/Main';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </QueryProvider>
    </SafeAreaProvider>
  );
}

export default App;
