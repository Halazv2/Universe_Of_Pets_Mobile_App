import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {QuantitySelector} from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Product Screen</Text>
      {/* image corousel */}

      {/* Options slecetion */}

      {/* Price */}
      <View style={styles.priceRow}>
        <Text style={styles.price}>$29.99</Text>
        <Text style={styles.oldPrice}>$39.99</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque officiis reiciendis quae qui neque illo odit ipsum quibusdam iure ratione aliquam expedita tempora, aut
        iste. Mollitia beatae ratione odit eos!
      </Text>

      {/*  selector */}
      <Picker selectedValue={selectedOption} onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
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
    </View>
  );
};

export {ProductScreen};
