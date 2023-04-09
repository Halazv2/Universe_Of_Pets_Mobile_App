import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 1,
    marginLeft: 5,
  },
  image: {
    height: 150,
    flex: 2,
    // resizeMode: 'contain',
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
  deleteButton: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    borderRadius: 5,
    marginRight: 20,
  },
});

export {styles};
