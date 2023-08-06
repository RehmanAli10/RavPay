import React, {useState, useEffect} from 'react';
import MoreScreen from '../../screens/MoreScreen/MoreScreen';
import {Discover} from '../../api/DiscoverData';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const MoreContainer = ({passDiscover}) => {
  // const userName = 'Rehman Ali';
  const navigation = useNavigation();
  const [userName, setUserName] = useState();
  const moneyLimit = 400000;
  const getUserData = async () => {
    try {
      const url = 'http://192.168.10.4:3000/users/2';
      let result = await fetch(url);
      result = await result.json();
      setUserName(result.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ScrollView>
      <MoreScreen
        userName={userName}
        moneyLimit={moneyLimit}
        discoverData={Discover}
        passDiscover={passDiscover}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default MoreContainer;
