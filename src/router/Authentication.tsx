import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={MenuScreen} name="Menu" options={{title: 'Login'}} />
      {/* <Stack.Screen component={MenuScreen} name="Address" /> */}
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
