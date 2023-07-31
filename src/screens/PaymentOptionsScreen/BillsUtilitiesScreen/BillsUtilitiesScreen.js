import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../component/HeaderComponent';
import BillIcon from '../../../../Assets/Icons/BillIcon';
import {useNavigation} from '@react-navigation/native';
import BackIcon from '../../../../Assets/Icons/BackIcon';
import SearchIcon from '../../../../Assets/Icons/SearchIcon';

const BillsUtilitiesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon fill={'white'} width={30} height={30} />}
        handleBack={() => navigation.navigate('Home')}
      />
      <View style={styles.optionHeaderWrapper}>
        <Text style={styles.optionHeaderText}>Bills & utilities</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('NewBillPayment')}>
        <View style={styles.option2Wrapper}>
          <View style={styles.billsIcons}>
            <BillIcon height={30} width={30} />
            <Text style={styles.optionsText}>New bill payment</Text>
          </View>
          <Text style={styles.optionsSecondText}>
            Pay your bills to 900+ companies in Pakistan
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.searchWrapper}>
        <View style={styles.searchIconWrapper}>
          <SearchIcon height={60} width={60} fill={'white'} />
        </View>
        <View style={styles.headerSearchTextWrapper}>
          <Text style={styles.headerText}> No recent bills </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.descriptionText}>
            Pay a new bill to view it here
          </Text>
        </View>
      </View>
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
  searchWrapper: {
    alignItems: 'center',
  },
  searchIconWrapper: {
    marginRight: '3%',
  },
  headerSearchTextWrapper: {
    margin: '3%',
  },
  headerText: {
    color: '#99DBF5',
    fontWeight: 'bold',
    fontSize: 15,
  },
  descriptionText: {
    color: 'white',
  },
});

export default BillsUtilitiesScreen;
