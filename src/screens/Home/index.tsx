import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ProductCard} from '../../components/Product';
import {useGetProductsQuery} from '../../store/apiSlice';
import {Text, FlatList} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/UserSlice';

const HomeScreen = ({searchValue}: {searchValue: string}) => {
  const {data, error, isLoading}: any = useGetProductsQuery();
  const selector = useSelector(userSelector);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  // React.useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);
  console.log(selector);

  return (
    <View style={styles.page}>
      <Text>{searchValue}</Text>
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
