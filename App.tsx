import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { NavigationContainer } from '@react-navigation/native';

import { store } from './src/data/store';

import Routes from './src/main/routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
