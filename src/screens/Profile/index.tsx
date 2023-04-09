import Button from '../../components/Button';
import {userSelector} from '../../store/UserSlice';
import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/AuthContext';

const ProfileScreen = () => {
  const selector = useSelector(userSelector);
  const {logout} = useContext(AuthContext);

  const onLogout = () => {
    logout();
  };

  const user = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    location: 'New York, NY',
    bio: 'Software engineer and music lover',
    profilePic: require('../../assets/logo.jpg'),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.profilePic} source={user.profilePic} />
      <Text style={styles.name}>
        {selector.user.fist_name} {selector.user.last_name}
      </Text>
      <Text style={styles.email}>{selector.user.email}</Text>
      <SafeAreaView style={styles.logout}>
        <Button title="Sign out" onPress={onLogout} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  username: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  logout: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    },
});

export default ProfileScreen;
