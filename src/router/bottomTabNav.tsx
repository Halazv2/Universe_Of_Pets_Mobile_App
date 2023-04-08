import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProductScreen} from '../screens/ProductScreen';
import HomeScreen from '../screens/Home';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
import MenuScreen from '../screens/MenuScreen';
import AuthenticationStack from './Authentication';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarActiveTintColor: '#e47911', tabBarInactiveTintColor: 'black'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{tabBarIcon: ({color, size}) => <Entypo name="home" color={color} size={size} />}}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{tabBarIcon: ({color, size}) => <FontAwesome name="user" color={color} size={size} />}}
      />
      <Tab.Screen
        name="Shoping Cart"
        component={ShoppingCartStack}
        options={{tabBarIcon: ({color, size}) => <FontAwesome name="shopping-cart" color={color} size={size} />}}
      />
      <Tab.Screen
        name="Product"
        component={AuthenticationStack}
        options={{tabBarIcon: ({color, size}) => <FontAwesome name="list" color={color} size={size} />}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
