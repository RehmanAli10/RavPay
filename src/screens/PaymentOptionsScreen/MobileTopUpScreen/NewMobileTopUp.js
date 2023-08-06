import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../../component/HeaderComponent';
import BackIcon from '../../../../Assets/Icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../component/Button';
import ForwardIcon from '../../../../Assets/Icons/ForwardIcon';
import Options from './Options';
import NetworkOperatorIcon from '../../../../Assets/Icons/NetworkOperatorIcon';

const NewMobileTopUp = () => {
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectOptions, setSelectOptions] = useState(false);
  const [passedOperator, setPassedOperator] = useState();

  const handlePhoneNumber = value => {
    setMobileNumber(value);
  };

  const handleOptions = () => {
    setSelectOptions(true);
    Keyboard.dismiss();
    setBottomSheetVisible(true);
  };

  const handleOperator = value => {
    setPassedOperator(value);
    setBottomSheetVisible(false);
  };
  const handleSheetClose = () => {
    setBottomSheetVisible(false);
  };

  const handleContinue = () => {
    if (!mobileNumber || mobileNumber.length !== 11) {
      Alert.alert('Enter a valid 11-digit Mobile Number');
    } else if (!passedOperator) {
      Alert.alert('Please select a Network Operator');
    } else {
      Alert.alert('Work in Progress :)');
    }
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
        handleBack={() => navigation.navigate('MobileTopUpScreen')}
        text={'Mobile top up'}
      />
      <>
        <View style={styles.headingWrapper}>
          <Text style={styles.headingText}>Mobile Number</Text>
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            value={mobileNumber}
            onChangeText={handlePhoneNumber}
            placeholder="03xxxxxxxxx"
          />
        </View>
      </>

      <TouchableOpacity onPress={handleOptions} style={styles.selectionWrapper}>
        <View style={styles.networkWrapper}>
          <View style={styles.iconWrapper}>
            <NetworkOperatorIcon height={28} width={28} />
          </View>
          <View style={styles.textWrapper}>
            {passedOperator ? (
              <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>
                {passedOperator}
              </Text>
            ) : (
              <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold'}]}>
                Network Operator
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.selectWrapper}
            onPress={handleOptions}>
            {passedOperator ? (
              <Text style={[styles.text, {color: 'orange'}]}>Edit</Text>
            ) : (
              <Text style={[styles.text, {color: 'orange'}]}>Select</Text>
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {bottomSheetVisible && (
        <TouchableWithoutFeedback onPress={handleSheetClose}>
          <View style={styles.bottomSheet}>
            <Options handleOperator={handleOperator} />
          </View>
        </TouchableWithoutFeedback>
      )}

      <View style={styles.buttonWrapper}>
        <Button
          text={'continue'}
          icon={<ForwardIcon height={15} width={15} fill={'white'} />}
          onPress={handleContinue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headingWrapper: {
    margin: '4%',
  },
  headingText: {
    fontSize: 15,
  },
  inputWrapper: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'white',
    margin: '3%',
  },
  buttonWrapper: {
    marginTop: '10%',
  },
  selectionWrapper: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: '8%',
  },
  networkWrapper: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  text: {
    color: 'black',
  },
  iconWrapper: {
    margin: '3%',
    marginRight: 0,
    marginLeft: 0,
  },
  textWrapper: {
    margin: '4%',
    marginLeft: 0,
  },
  selectWrapper: {
    marginTop: '4%',
  },
  bottomSheet: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
});

export default NewMobileTopUp;
