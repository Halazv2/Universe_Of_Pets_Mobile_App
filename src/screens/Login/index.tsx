/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet, Image, KeyboardAvoidingView, Platform} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {TextInput} from 'react-native';
import Button from '../../components/Button';

const LoginScreen = () => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const validateInput = () => {
    if (email === '' || password === '') {
      setError(true);
      return false;
    }
    return true;
  };

  const Login = async (email: string, password: string) => {
    if (validateInput()) {
      login(email, password);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../assets/logo.jpg')} style={{width: 250, height: 200, marginBottom: 20}} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
          <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} value={password} secureTextEntry={true} />
          <Text style={{color: 'red', textAlign: 'left', width: '100%'}}>{error ? 'Please enter email and password' : ''}</Text>
        </KeyboardAvoidingView>
        <View style={{width: '100%'}}>
          <Button
            title="Login"
            containerStyle={{color: '#fff'}}
            onPress={() => {
              Login(email, password);
            }}
          />
          <Button
            title="Sign Up"
            containerStyle={{
              backgroundColor: '#63aca8',
            }}
            onPress={() => {
              // login(email, password);
              console.log('Sign Up');
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

export default LoginScreen;
