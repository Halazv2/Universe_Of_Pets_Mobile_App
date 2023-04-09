import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {ProductScreen} from '../screens/ProductScreen';
import ShopingCartScreen from '../screens/ShopingCartScreen';
import {AddressScreen} from '../screens/AddressScreen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

const Stack = createStackNavigator();

const HeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#e47911',
      }}>
      <View style={{padding: 10}}>
        <Text style={{color: 'white', fontSize: 20}}>Shopping Cart</Text>
      </View>
    </SafeAreaView>
  );
};

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent />,
      }}>
      <Stack.Screen component={ShopingCartScreen} name="shopingcart" options={{title: 'Shopping cart'}} />
      <Stack.Screen component={AddressScreen} name="Address" />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
