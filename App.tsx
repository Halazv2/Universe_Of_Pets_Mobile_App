import React from 'react';
import * as reactNative from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import AppNav from './src/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import Router from './src/router';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  const isDarkMode = reactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  setupListeners(store.dispatch);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <reactNative.StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Router />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
