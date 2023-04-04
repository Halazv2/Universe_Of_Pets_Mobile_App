/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductCard} from '../../components/Product';
import {useGetProductsQuery} from '../../store/apiSlice';
import {Text} from 'react-native';

const HomeScreen = () => {
  const {data, error, isLoading}: any = useGetProductsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <View style={styles.page}>
      {/* Render Component*/}
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
