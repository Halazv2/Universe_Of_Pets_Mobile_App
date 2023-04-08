import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const QuantitySelector = ({quantity, setQuantity}: {quantity: number; setQuantity: (quantity: number) => void}) => {
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export {QuantitySelector};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    width: 125,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#e3e3e3',
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    color: '#e3c905',
    fontSize: 18,
    marginHorizontal: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    width: 125,
    justifyContent: 'space-between',
    padding: 10,
  },
});
