import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductCard} from '../../components/Product';
import {useGetProductsQuery} from '../../store/apiSlice';
import {Text, FlatList} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

const HomeScreen = () => {
  const {data, error, isLoading}: any = useGetProductsQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.page}>
      {/* Render Component*/}
      <FlatList data={data} renderItem={({item}) => <ProductCard product={item} />} keyExtractor={item => item.id} />
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
