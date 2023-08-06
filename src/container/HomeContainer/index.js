import React, {useEffect, useState} from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {useNavigation} from '@react-navigation/native';

const HomeContainer = ({handleShowDiscover}) => {
  const navigation = useNavigation();
  const [showDiscover, setShowDiscover] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const [rupees, setRupess] = useState('');
  const [transactionTime, setTransactionTime] = useState();
  const time = '1:36Am';

  const getUserData = async () => {
    try {
      const url = 'http://192.168.10.4:3000/users/1';
      let result = await fetch(url);
      result = await result.json();
      setRupess(result.currentBalance);
      setTransactionTime(result.transaction?.time);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <HomeScreen
      rupees={rupees}
      time={time}
      handleClose={handleShowDiscover}
      showDiscover={showDiscover}
      setShowDiscover={setShowDiscover}
      showMsg={showMsg}
      setShowMsg={setShowMsg}
      transactionTime={transactionTime}
      navigation={navigation}
    />
  );
};

export default HomeContainer;
