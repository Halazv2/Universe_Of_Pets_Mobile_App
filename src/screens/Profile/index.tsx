import Button from '../../components/Button';
import {userSelector} from '../../store/UserSlice';
import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthContext} from '../../context/AuthContext';
import {useGetOrderQuery} from '../../store/apiSlice';
import {UserOrders} from '../../components/UserOrders';
import {ScrollView} from 'react-native-gesture-handler';

const ProfileScreen = () => {
  const selector = useSelector(userSelector);
  const {logout} = useContext(AuthContext);
  const {data, isLoading} = useGetOrderQuery(selector.user.id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log(data);

  const onLogout = () => {
    logout();
  };

  const user = {
    profilePic: require('../../assets/logo.jpg'),
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Image style={styles.profilePic} source={user.profilePic} />
        <Text style={styles.name}>
          {selector.user.fist_name} {selector.user.last_name}
        </Text>
        <Text style={styles.email}>{selector.user.email}</Text>
        <SafeAreaView style={styles.logout}>
          <Button title="Sign out" onPress={onLogout} />
        </SafeAreaView>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: '100%',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#555'}}>
            My Orders: {data.length} {data.length > 1 ? 'items' : 'item'}
          </Text>
          {data.map((item: any, index: number) => (
            <UserOrders key={index} data={item} />
          ))}
        </View>
      </View>
    </ScrollView>
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
