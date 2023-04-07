import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {ProductScreen} from '../screens/ProductScreen';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import {AddressScreen} from '../screens/AddressScreen';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={ShopingCartScreen} name="cart" options={{title: 'Shopping cart'}} />
      <Stack.Screen component={AddressScreen} name="Address" />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
