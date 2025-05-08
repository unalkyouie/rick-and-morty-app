import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {MainStack} from './src/stacks/Main';
import QueryProvider from './src/services/QueryClientProvider';

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
