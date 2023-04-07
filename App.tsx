import React from 'react';
import * as reactNative from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import AppNav from './src/Navigation';
import {AuthProvider} from './src/context/AuthContext';
import Router from './src/router';

function App(): JSX.Element {
  const isDarkMode = reactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  setupListeners(store.dispatch);

  return (
    <Provider store={store}>
      <reactNative.SafeAreaView style={backgroundStyle}>
        <AuthProvider>
          <reactNative.StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          {/* <AppNav /> */}
          <Router />
        </AuthProvider>
      </reactNative.SafeAreaView>
    </Provider>
  );
}

export default App;
