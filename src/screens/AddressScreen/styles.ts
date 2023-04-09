import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    // marginVertical: 5,
    marginTop: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  errorLabel: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});

export default styles;
