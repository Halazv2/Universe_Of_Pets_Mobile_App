import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    height: 150,
    flex: 2,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    gap: 5,
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontWeight: 'normal',
  },
});

export default ProductCard;
