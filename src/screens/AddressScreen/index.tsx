import {View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = React.useState(countries[0].code);
  const [values, setValues] = React.useState({
    fullName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
  });
  const [errors, setErrors] = React.useState({
    fullName: false,
    phoneNumber: false,
    addressLine1: false,
    addressLine2: false,
    city: false,
  });

  const validate = (field: string, value: string) => {
    switch (field) {
      case 'fullName':
        if (value.length === 0) {
          setErrors({...errors, fullName: true});
        } else {
          setErrors({...errors, fullName: false});
        }
        break;
      case 'phoneNumber':
        if (value.length === 0) {
          setErrors({...errors, phoneNumber: true});
        } else {
          setErrors({...errors, phoneNumber: false});
        }
        break;
      case 'addressLine1':
        if (value.length === 0) {
          setErrors({...errors, addressLine1: true});
        } else {
          setErrors({...errors, addressLine1: false});
        }
        break;
      case 'addressLine2':
        if (value.length === 0) {
          setErrors({...errors, addressLine2: true});
        } else {
          setErrors({...errors, addressLine2: false});
        }
        break;
      case 'city':
        if (value.length === 0) {
          setErrors({...errors, city: true});
        } else {
          setErrors({...errors, city: false});
        }
        break;
      default:
        break;
    }
  };

  const checkout = () => {
    // checke if there are any errors from the validation
    if (Object.values(errors).some((err: boolean) => err)) {
      Alert.alert('Please fill in all the fields');
      return;
    }

    Alert.alert('Success', 'Your order has been placed successfully');
  };

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}>
            {countries.map((country: {name: string; code: string}, index: number) => (
              <Picker.Item key={index} label={country.name} value={country.code} />
            ))}
          </Picker>
        </View>

        {/* Full Name (First and Last name) */}
        <View style={styles.row}>
          <Text style={styles.label}>Full Name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            value={values.fullName}
            onEndEditing={() => {
              validate('fullName', values.fullName);
            }}
            onChangeText={text => {
              setErrors({...errors, fullName: false});
              setValues({...values, fullName: text});
            }}
          />
          {errors.fullName && <Text style={styles.errorLabel}>Please enter your full name</Text>}
        </View>
        {/* Phone Number */}

        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 123 456 789"
            value={values.phoneNumber}
            onEndEditing={() => {
              validate('phoneNumber', values.phoneNumber);
            }}
            onChangeText={text => {
              setErrors({...errors, phoneNumber: false});
              setValues({...values, phoneNumber: text});
            }}
          />
          {errors.phoneNumber && <Text style={styles.errorLabel}>Please enter your phone number</Text>}
        </View>

        {/* Address Line 1 */}

        <View style={styles.row}>
          <Text style={styles.label}>Address Line 1</Text>
          <TextInput
            style={styles.input}
            placeholder="1234 Main St"
            value={values.addressLine1}
            onEndEditing={() => {
              validate('addressLine1', values.addressLine1);
            }}
            onChangeText={text => {
              setErrors({...errors, addressLine1: false});
              setValues({...values, addressLine1: text});
            }}
          />
          {errors.addressLine1 && <Text style={styles.errorLabel}>Please enter your address</Text>}
          <Text style={styles.label}>Address Line 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Apartment, studio, or floor"
            value={values.addressLine2}
            onEndEditing={() => {
              validate('addressLine2', values.addressLine2);
            }}
            onChangeText={text => {
              setErrors({...errors, addressLine2: false});
              setValues({...values, addressLine2: text});
            }}
          />
          {errors.addressLine2 && <Text style={styles.errorLabel}>Please enter your address</Text>}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="New York"
            value={values.city}
            onEndEditing={() => {
              validate('city', values.city);
            }}
            onChangeText={text => {
              setErrors({...errors, city: false});
              setValues({...values, city: text});
            }}
          />
          {errors.city && <Text style={styles.errorLabel}>Please enter your city</Text>}
        </View>

        <Button title="Checkout" onPress={() => checkout()} />
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export {AddressScreen};
