import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useGetOrdersQuery} from '../../store/apiSlice';
import {Text, FlatList} from 'react-native';
import {CartProductItem} from '../../components/CartProductitem';
import {QuantitySelector} from '../../components/QuantitySelector';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';

const ShopingCartScreen = () => {
  const navigation = useNavigation();
  const {data, error, isLoading}: any = useGetOrdersQuery();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const totalPrice = data.reduce(
    (
      sum: number,
      item: {
        total: number;
        quantity: number;
      },
    ) => sum + item.total * item.quantity,
    0,
  );

  const checkout = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.page}>
      {/* Render Component*/}
      <FlatList
        data={data}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        keyExtractor={item => item._id}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 16}}>
              Total ({data.length} items):
              <Text style={{color: '#e47911'}}> ${totalPrice.toFixed(2)}</Text>
            </Text>

            <Button
              title="Proceed to checkout"
              onPress={() => checkout()}
              containerStyle={{backgroundColor: '#f7e300', borderColor: '#c7b702', width: '100%', borderRadius: 0}}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
  },
});

export default ShopingCartScreen;
