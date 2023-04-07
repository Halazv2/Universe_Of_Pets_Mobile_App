import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#474747',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#474747',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#474747',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
  image: {
    height: 300,
    resizeMode: 'contain',
  },
  priceRow: {
    flexDirection: 'row',
    display: 'flex',
    gap: 5,
    width: '100%',
    alignItems: 'center',
  },
  quantitySelectorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 120,
    borderWidth: 1,
    borderColor: '#e3e3e3',
    borderRadius: 5,
  },
  quantityLabel: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
