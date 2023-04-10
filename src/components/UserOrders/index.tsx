import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {Host_Ubuntu, Host_Windows} from '../../../env';
import {QuantitySelector} from '../QuantitySelector';
import Button from '../../components/Button';
import {useCancelOrderMutation} from '../../store/apiSlice';
import {useNavigation} from '@react-navigation/core';

type UserOrdersItemProps = {
  data: {
    _id: string;
    quantity: number;
    option: string;
    products: [
      {
        _id: string;
        name: string;
        images: [
          {
            _id: string;
            path: string;
            contentType: string;
          },
        ];
        price: number;
        description: string;
        category: [string];
      },
    ];
    total: number;
    status: string;
    createdAt: string;
  };
};

const UserOrders = ({data}: UserOrdersItemProps) => {
  const imageUrl = `${Host_Ubuntu}/uploads/${data.products[0].images[0]?.path}`;
  const createdAtDate = new Date(data.createdAt);
  const now = new Date();
  const diffInMs = now - createdAtDate;
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

  const [cancelOrder] = useCancelOrderMutation();

  const onCancelOrder = (id: string) => {
    cancelOrder(id);
  };

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: `${imageUrl}`,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {data.products[0].name}
          </Text>
          <View style={styles.ratingContainer}>
            {
              // fake rating
              [0, 0, 0, 0, 0].map((el, i) => (
                <FontAwesome key={`${data._id}-${i}`} style={styles.star} name={'star'} size={18} color={'#e47911'} />
              ))
            }
            <Text>4.3</Text>
          </View>
          <Text style={styles.price}>{data.total.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>
          {data.quantity} x {data.option}
        </Text>
        {
          // cancel order if order hasn't passed 24 hours

          diffInHours < 24 ? (
            data.status === 'pending' ? (
              <Pressable style={styles.deleteButton} onPress={() => onCancelOrder(data._id)}>
                <FontAwesome style={styles.star} name={'trash-o'} size={18} color={'#e47911'} />
              </Pressable>
            ) : (
              <Text
                style={{
                  color: '#e47911',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginHorizontal: 10,
                }}>
                Order has been {data.status}
              </Text>
            )
          ) : (
            <Text
              style={{
                color: '#e47911',
                fontSize: 16,
                fontWeight: 'bold',
                marginHorizontal: 10,
              }}>
              Order has passed 24 hours
            </Text>
          )
        }
      </View>
    </View>
  );
};

export {UserOrders};
