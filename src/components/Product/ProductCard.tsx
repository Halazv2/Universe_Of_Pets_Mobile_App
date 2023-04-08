import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {Host_Ubuntu, Host_Windows} from '../../../env';
import {useNavigation} from '@react-navigation/core';
type ProductCardProps = {
  product: {
    id: string;
    name: string;
    image: Array<string>;
    category?: Array<string>;
    description?: string;
    price: number;
  };
};

const ProductCard = ({product: {id, name, image, category, description, price}}: ProductCardProps) => {
  const imageUrl = `${Host_Ubuntu}/uploads/${image[0]}`;
  const navigation = useNavigation();

  const goToProductPage = () => {
    navigation.navigate('ProductDetails', {id: id});
  };

  return (
    <Pressable
      onPress={() => {
        goToProductPage();
      }}
      style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: `${imageUrl}`,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
          <FontAwesome style={styles.star} name={'star'} size={18} color={'#e47911'} />
          <FontAwesome style={styles.star} name={'star-half-full'} size={18} color={'#e47911'} />
          <FontAwesome style={styles.star} name={'star-o'} size={18} color={'#e47911'} />
          <Text>4.0 (23)</Text>
        </View>
        <Text style={styles.price}>
          from ${price * 0.8}
          <Text style={styles.oldPrice}>{price}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
