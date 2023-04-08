import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNav from './bottomTabNav';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator, View} from 'react-native';
import LoginScreen from '../screens/Login';
import SignupScreen from '../screens/Login/Signup';

const Root = createStackNavigator();

const Router = () => {
  const {isLoading, userToken} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <>
      {userToken !== null ? (
        <Root.Navigator screenOptions={{headerShown: false}}>
          <Root.Screen component={BottomTabNav} name="HomeTabs" />
        </Root.Navigator>
      ) : (
        <Root.Navigator screenOptions={{headerShown: false}}>
          <Root.Screen component={LoginScreen} name="Login" options={{title: 'Login'}} />
          <Root.Screen component={SignupScreen} name="Signup" options={{title: 'Signup'}} />
        </Root.Navigator>
      )}
      {/* <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name="HomeTabs" />
        <Root.Screen component={LoginScreen} name="Login" options={{title: 'Login'}} />
      </Root.Navigator> */}
    </>
  );
};

export default Router;
