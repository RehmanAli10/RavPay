import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MobileTopUp from '../../Assets/Icons/MobileTopUp';
import BillIcon from '../../Assets/Icons/BillIcon';
import RequestMoneyIcon from '../../Assets/Icons/RequestMoneyIcon';
import {useNavigation} from '@react-navigation/native';

const BottomSheet = () => {
  const navigation = useNavigation();

  const navigateToMobileTopUpScreen = () => {
    navigation.navigate('MobileTopUpScreen');
    // closeBottomSheet();
  };

  const navigateToBillUtilities = () => {
    navigation.navigate('BillUtilities');
    // closeBottomSheet();
  };

  const navigateToMoneyRequest = () => {
    navigation.navigate('MoneyRequest');
    // closeBottomSheet();
  };
  return (
    <View style={styles.container}>
      <View style={styles.optionHeaderWrapper}>
        <Text style={styles.optionHeaderText}>Payments</Text>
      </View>

      <View>
        <TouchableOpacity onPress={navigateToMobileTopUpScreen}>
          <View style={styles.option1Wrapper}>
            <View style={styles.MobileTopUpIcon}>
              <MobileTopUp style={styles.icon} height={30} width={30} />
              <Text style={styles.optionsText}>Mobile top up</Text>
            </View>
            <Text style={styles.optionsSecondText}>
              Instantly top up your mobile
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity onPress={navigateToBillUtilities}>
          <View style={styles.option2Wrapper}>
            <View style={styles.billsIcons}>
              <BillIcon height={30} width={30} />
              <Text style={styles.optionsText}>Bills & utilities</Text>
            </View>
            <Text style={styles.optionsSecondText}>Pay for your utilities</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity onPress={navigateToMoneyRequest}>
          <View style={styles.option3Wrapper}>
            <View style={styles.moneyRequestIcon}>
              <RequestMoneyIcon height={30} width={30} />
              <Text style={styles.optionsText}>Money requests</Text>
            </View>
            <Text style={styles.optionsSecondText}>
              Review pending money requests
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: '50%',
    height: '50%',
    width: '100%',
  },
  optionHeaderWrapper: {
    marginBottom: 10,
  },
  optionHeaderText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  optionsText: {
    color: 'black',
    marginLeft: 10,
  },
  optionsSecondText: {
    color: 'black',
    marginLeft: 40,
  },
  option1Wrapper: {
    margin: 10,
  },
  option2Wrapper: {
    margin: 10,
  },
  option3Wrapper: {
    margin: 10,
  },
  MobileTopUpIcon: {
    flexDirection: 'row',
  },
  billsIcons: {
    flexDirection: 'row',
  },
  moneyRequestIcon: {
    flexDirection: 'row',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
});

export default BottomSheet;
