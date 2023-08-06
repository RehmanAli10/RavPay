import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HeaderComponent from '../../../component/HeaderComponent';
import BackIcon from '../../../../Assets/Icons/BackIcon';
import MobileTopUp from '../../../../Assets/Icons/MobileTopUp';

const MobileTopUpScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon fill={'white'} width={30} height={30} />}
        handleBack={() => navigation.navigate('Home')}
      />
      <View style={styles.optionHeaderWrapper}>
        <Text style={styles.optionHeaderText}>Choose operator </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NewMobileTopUp');
        }}>
        <View style={styles.option2Wrapper}>
          <View style={styles.billsIcons}>
            <MobileTopUp height={30} width={30} />
            <Text style={styles.optionsText}>New mobile top up</Text>
          </View>
          <Text style={styles.optionsSecondText}>
            Top up any prepaid mobile network operator
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  option2Wrapper: {
    backgroundColor: 'white',
    margin: '3%',
    borderRadius: 10,
    height: '30%',
  },
  billsIcons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  optionsText: {
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  optionsSecondText: {
    color: 'black',
    marginLeft: 40,
  },
  optionHeaderWrapper: {
    margin: 10,
    marginLeft: 16,
  },
  optionHeaderText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MobileTopUpScreen;
