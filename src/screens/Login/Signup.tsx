/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useSignupMutation} from '../../store/apiSlice';

const SignupScreen = () => {
  const [signup] = useSignupMutation();
  const [values, setValues] = React.useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  });
  const [error, setError] = React.useState(false);
  const navigation = useNavigation();

  const validateInput = () => {
    if (values.email === '' || values.password === '' || values.first_name === '' || values.last_name === '') {
      setError(true);
      return false;
    }
    return true;
  };

  const Signup = async (values: {email: string; first_name: string; last_name: string; password: string}) => {
    if (validateInput()) {
      signup(values);
      navigation.navigate('Login' as never);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/logo.jpg')} style={{width: 250, height: 200, marginBottom: 20}} />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={text => {
              setValues({...values, first_name: text});
            }}
            value={values.first_name}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={text => {
              setValues({...values, last_name: text});
            }}
            value={values.last_name}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => {
              setValues({...values, email: text});
            }}
            value={values.email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => {
              setValues({...values, password: text});
            }}
            value={values.password}
            secureTextEntry={true}
          />
          <Text style={{color: 'red', textAlign: 'left', width: '100%'}}>{error ? 'Please enter email and password' : ''}</Text>
        </KeyboardAvoidingView>
        <View style={{width: '100%'}}>
          <Button
            title="Sign Up"
            onPress={() => {
              Signup(values);
            }}
          />
          <Button
            title="Login"
            containerStyle={{
              backgroundColor: '#63aca8',
            }}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomColor: '#777',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    width: '100%',
    textAlign: 'center',
  },
});

export default SignupScreen;
