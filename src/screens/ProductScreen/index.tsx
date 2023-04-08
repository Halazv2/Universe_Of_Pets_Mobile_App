import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {QuantitySelector} from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarouasel from '../../components/ImageCarouasel';
import {useRoute} from '@react-navigation/native';
import {useGetProductQuery} from '../../store/apiSlice';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [quantity, setQuantity] = useState(1);
  const route = useRoute();
  const {id} = route.params;
  const {data, error, isLoading}: any = useGetProductQuery(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error);
  }

  if (data) {
    console.log(data);
  }

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
      <Picker selectedValue={selectedOption} onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}>
        {data[0].options.map((option: any) => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Add to cart button */}
      <Button
        title="Add to cart"
        onPress={() => console.warn('Add to cart')}
        containerStyle={{
          backgroundColor: '#e3c905',
        }}
      />
      <Button title="Buy Now" onPress={() => console.warn('Buy now')} />
    </ScrollView>
  );
};

export {ProductScreen};
