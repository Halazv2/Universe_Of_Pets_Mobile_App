import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import {AuthContext} from '../../../src/context/AuthContext';

const MenuScreen = () => {
  const {logout} = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  return (
    <SafeAreaView>
      <Button title="Sign out" onPress={onLogout} />
    </SafeAreaView>
  );
};

export default MenuScreen;
