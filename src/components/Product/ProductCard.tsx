import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

const ProductCard = () => {
  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.shopify.com/s/files/1/0086/0795/7054/products/litter_image.png?v=1662450549&width=533',
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          Cat Litter, 20 Lbs, Clumping, Multi-Cat, Unscented, 99.9% Dust Free -
          2 Pack (40 Lbs Total)
        </Text>
        <View style={styles.ratingContainer}>
          <FontAwesome
            style={styles.star}
            name={'star'}
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name={'star'}
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name={'star-half-full'}
            size={18}
            color={'#e47911'}
          />
          <FontAwesome
            style={styles.star}
            name={'star-o'}
            size={18}
            color={'#e47911'}
          />
          <Text>4.0 (23)</Text>
        </View>
        <Text style={styles.price}>
          from $13.99 <Text style={styles.oldPrice}>$19.99</Text>
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
