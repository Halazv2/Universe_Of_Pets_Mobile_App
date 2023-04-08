import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {Host_Ubuntu, Host_Windows} from '../../../env';
import {QuantitySelector} from '../QuantitySelector';
import Button from '../../components/Button';
import {useDeleteProductFromCartMutation} from '../../store/apiSlice';

type CartProductItemProps = {
  cartItem: {
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
  };
};

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const imageUrl = `${Host_Ubuntu}/uploads/${cartItem.products[0].images[0].path}`;
  const {quantity: quantityProp, option, products, total} = cartItem;

  const [quantity, setQuantity] = React.useState(quantityProp);
  const [deleteProductFromCart] = useDeleteProductFromCartMutation();

  const removeItem = () => {
    console.log('Remove Item' + cartItem._id);
    deleteProductFromCart(cartItem._id);
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
            {products[0].name}
          </Text>
          <View style={styles.ratingContainer}>
            <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
            <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
            <FontAwesome style={styles.star} name={'star-half-full'} size={18} color={'#e47911'} />
            <FontAwesome style={styles.star} name={'star-o'} size={18} color={'#e47911'} />
            <Text>4.0 (23)</Text>
          </View>
          <Text style={styles.price}>${products[0].price}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <Pressable onPress={removeItem} style={styles.deleteButton}>
          <FontAwesome style={styles.star} name={'trash-o'} size={18} color={'#e47911'} />
        </Pressable>
      </View>
    </View>
  );
};

export {CartProductItem};
