import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import QueryProvider from './src/services/QueryClientProvider';
import { MainStack } from './src/stacks/Main';

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </QueryProvider>
  );
}

export default App;
