/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';

const LoginScreen = () => {
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.page}>
      <TouchableOpacity
        onPress={() => {
          login();
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 20,
            textAlign: 'center',
            padding: 10,
            backgroundColor: '#A40A',
            borderRadius: 10,
            width: '100%',
            color: '#fff',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    width: '100%',
    padding: 10,
  },
});

export default LoginScreen;
