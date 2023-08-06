import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopTabNavigation from '../../../utilities/TopTabNavigation';
import HeaderComponent from '../../component/HeaderComponent';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../Assets/Icons/BackIcon';

const CurrentBalanceNavigationContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent
        text={'My cards'}
        firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
        handleBack={() => navigation.navigate('Home')}
      />
      <TopTabNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default CurrentBalanceNavigationContainer;
