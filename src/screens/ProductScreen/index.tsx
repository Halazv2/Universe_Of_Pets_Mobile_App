import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {QuantitySelector} from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarouasel from '../../components/ImageCarouasel';
import {useRoute} from '@react-navigation/native';
import {useAddProductToCartMutation, useGetProductQuery} from '../../store/apiSlice';
import {userSelector} from '../../store/UserSlice';
import {useSelector} from 'react-redux';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const {id} = route.params;
  const selector = useSelector(userSelector);
  const {data, error, isLoading}: any = useGetProductQuery(id);
  const [addToCart, {isLoading: addToCartLoading, error: addToCartError}] = useAddProductToCartMutation();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const onAddToCart = async () => {
    if (!selectedOption) {
      setSelectedOption(data[0].options[0]);
    }

    await addToCart({
      products: [id],
      quantity: quantity,
      options: selectedOption,
      user: selector.user.id,
    });

    console.log('data', id, quantity, selectedOption, selector.user.id);

    // addToCart({id, quantity, option: selectedOption});

    // fetch data from api and add to cart in redux
  };

  return (
    <ScrollView style={styles.root}>
      {/* image corousel */}

      <ImageCarouasel
        images={
          data[0].image
            ? data[0].image.map((image: any) => image)
            : [
                'https://m.media-amazon.com/images/I/718wOnWm7eL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/91NAgsuiSKL._AC_SL1500_.jpg',
                'https://m.media-amazon.com/images/I/81cfIFujiwL._AC_SL1500_.jpg',
              ]
        }
      />

      {/* Options slecetion */}

      {/* Price */}
      <View style={styles.priceRow}>
        <Text style={styles.price}>{data[0].price}</Text>
        <Text style={styles.oldPrice}>$39.99</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>{data[0].description}</Text>

      {/*  selector */}
      {data[0].options.length > 0 && (
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedOption(itemValue);
          }}>
          {data[0].options.map((option: any) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
      )}

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Add to cart button */}
      <Button
        title="Add to cart"
        onPress={() => onAddToCart()}
        containerStyle={{
          backgroundColor: '#e3c905',
        }}
      />
      <Button title="Buy Now" onPress={() => console.warn('Buy Now')} />
    </ScrollView>
  );
};

export {ProductScreen};
