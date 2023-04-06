/* eslint-disable react/jsx-no-undef */
import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductCard} from '../../components/Product';
import {useGetProductsQuery} from '../../store/apiSlice';
import {Text , TouchableOpacity} from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const HomeScreen = () => {
  const { logout } = useContext(AuthContext);
  // const {data, error, isLoading}: any = useGetProductsQuery();

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (data) {
  //   console.log(data);
  // }

  // if (error) {
  //   console.log(error);
  // }

  return (
    <View style={styles.page}>
      {/* Render Component*/}
      <View>
        <TouchableOpacity onPress={() => { logout(); }}>
          <Text 
              style={{  
                  fontWeight: '700',
                  fontSize: 20,
                  textAlign: 'center',
                  padding: 10,
                  backgroundColor: '#A40A',
                  borderRadius: 10,
                  width: '100%',
                  color: '#fff',
          }}> Logout</Text>
        </TouchableOpacity>
    </View>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
  },
});

export default HomeScreen;
