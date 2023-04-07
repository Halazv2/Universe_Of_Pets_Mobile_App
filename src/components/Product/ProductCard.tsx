import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {Host_Ubuntu, Host_Windows} from '../../../env';
type ProductCardProps = {
  product: {
    _id: string;
    name: string;
    image: Array<string>;
    brand?: string;
    category?: Array<string>;
    description?: string;
    price: number;
  };
};

const ProductCard = ({product: {_id, name, image, brand, category, description, price}}: ProductCardProps) => {
  const imageUrl = `${Host_Ubuntu}/uploads/${image[0]}`;

  return (
    <View style={styles.root}>
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
    </View>
  );
};

export default ProductCard;
