import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
  containerStyle?: {};
};

const Button = (props: ButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={[styles.root, props.containerStyle]}>
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 8,
    // shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
});

export default Button;
