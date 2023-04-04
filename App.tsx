import React from 'react';
import * as reactNative from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/Home';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

function App(): JSX.Element {
  const isDarkMode = reactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  setupListeners(store.dispatch);

  return (
    <Provider store={store}>
      <reactNative.SafeAreaView style={backgroundStyle}>
        <reactNative.StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <HomeScreen />
      </reactNative.SafeAreaView>
    </Provider>
  );
}

export default App;
