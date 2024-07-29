import { View, Alert } from 'react-native';
import React from 'react';

import { logout } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import CustomButton from './CustomButton';

const LogOut = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogOut = async () => {
    try {
      const res = await dispatch(logout());
      if (res) {
        router.push('/login');
        Alert.alert('Logged Out Successfully');
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Failed to log out');
    }
  };

  const handleLogOutPress = () => {
    Alert.alert(
      'Are you sure you want to log out?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text: 'Log Out',
          onPress: handleLogOut
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <CustomButton
        title="Log Out"
        handlePress={handleLogOutPress}
        btnStyles="bg-red-800 hover:bg-red-400"
        textStyles="text-white"
      />
    </View>
  );
};

export default LogOut;
