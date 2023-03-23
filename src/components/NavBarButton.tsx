import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles';
import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import LoginInstance from '../api/LoginInstance';

const NavBarButton = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          navigation.navigate('Profile', {id: LoginInstance.user?.id});
        }}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBarButton;
