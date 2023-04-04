import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductCard} from '../../components/Product';

const HomeScreen = () => {
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
