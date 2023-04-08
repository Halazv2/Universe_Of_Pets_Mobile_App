import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useGetUserCartQuery} from '../../store/apiSlice';
import {Text, FlatList} from 'react-native';
import {CartProductItem} from '../../components/CartProductitem';
import {QuantitySelector} from '../../components/QuantitySelector';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {userSelector} from '../../store/UserSlice';
import {EmptyCart} from '../../assets';

const ShopingCartScreen = () => {
  const navigation = useNavigation();
  const selector = useSelector(userSelector);
  const {data, error, isLoading}: any = useGetUserCartQuery(selector.userid);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  // console.log('data', data);

  const totalPrice =
    data.length > 0
      ? data
          .map((item: any) => item.products.map((item: any) => item.price))
          .flat()
          .reduce((a: any, b: any) => a + b)
      : 0;

  const checkout = () => {
    navigation.navigate('Address');
  };
  // return;

  return (
    <View style={styles.page}>
      {/* Render Component*/}
      {data.length > 0 ? (
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
      ) : (
        <View>
          <Image
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/2762/2762885.png`,
            }}
          />
          <Text style={{fontSize: 16, textAlign: 'center'}}>Your cart is empty</Text>
        </View>
      )}
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
