import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navi/Stack';
const App = () => {
  return (
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
  );
};
export default App;
