import React from 'react';
import LoadMoneyScreen from '../../screens/LoadMoneyScreen/LoadMoneyScreen';
import {useNavigation} from '@react-navigation/native';

const LoadMoneyContainer = () => {
  const navigation = useNavigation();
  const rupeesLimit = '400,000';
  const number = '03065004931';
  const ibanNumber = 'PK17 RAV 0000 0058 9876 7865';
  return (
    <LoadMoneyScreen
      navigation={navigation}
      rupeesLimit={rupeesLimit}
      number={number}
      ibanNumber={ibanNumber}
    />
  );
};

export default LoadMoneyContainer;
