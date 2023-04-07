import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductScreen} from '../screens/ProductScreen';
import ShopingCartScreen from '@screens/ShopingCartScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
        <Tab.Screen name="ShopingCart" component={ShopingCartScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
