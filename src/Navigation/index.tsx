import React, {useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';
import HomeScreen from '../screens/Home';
import {ProductScreen} from '../screens/ProductScreen';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import Login from '../screens/Login';
import {AddressScreen} from '../screens/AddressScreen';

const Stack = createNativeStackNavigator();

const AppNav = () => {
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
        // <HomeScreen />
        // <ProductScreen />
        // <ShopingCartScreen />
        <AddressScreen />
      ) : (
        <Login />
      )}
    </>
  );
};

export default AppNav;
