import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import BackIcon from '../../../Assets/Icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import SleepIcon from '../../../Assets/Icons/SleepIcon';

const MoneyRequestsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon fill={'white'} width={30} height={30} />}
        handleBack={() => navigation.navigate('Home')}
      />
      <View style={styles.optionHeaderWrapper}>
        <Text style={styles.optionHeaderText}>Money Requests</Text>
      </View>
      <View style={styles.NoPendingRequestsWrapper}>
        <View style={styles.iconWrapper}>
          <SleepIcon height={50} width={50} />
        </View>
        <View style={styles.headWrapper}>
          <Text style={styles.headerText}>No pending requests</Text>
        </View>
        <View style={styles.statementWrapper}>
          <Text style={styles.statementText}>
            Money requests from other RavPay users will appear here
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
  optionHeaderWrapper: {
    margin: 10,
    marginLeft: 16,
  },
  optionHeaderText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  NoPendingRequestsWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statementWrapper: {
    marginTop: '3%',
  },
  statementText: {
    color: 'white',
  },
});

export default MoneyRequestsScreen;
