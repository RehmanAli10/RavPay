import React from 'react';
import SendAndRequestScreen from '../../screens/SendAndRequestScreen/SendAndRequestScreen';
import {useNavigation} from '@react-navigation/native';

const SendAndRequsetContainer = () => {
  const navigation = useNavigation();
  const currentBalance = 100;
  return (
    <SendAndRequestScreen
      navigation={navigation}
      currentBalance={currentBalance}
    />
  );
};

export default SendAndRequsetContainer;
