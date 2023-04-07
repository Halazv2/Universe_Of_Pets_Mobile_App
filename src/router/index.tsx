import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
