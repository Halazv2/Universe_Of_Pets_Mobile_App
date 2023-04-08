import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {ProductScreen} from '../screens/ProductScreen';
import {Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({searchValue, setSearchValue}: HeaderComponentProps) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#e47911',
      }}>
      <View
        style={{
          margin: 10,
          padding: 2,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Feather name="search" size={20} />
        <TextInput style={{height: 40, marginLeft: 10}} placeholder="Search..." value={searchValue} onChangeText={setSearchValue} />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue} />,
      }}>
      <Stack.Screen name="HomeScreen" options={{title: 'Home'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
      
    </Stack.Navigator>
  );
};

export default HomeStack;
