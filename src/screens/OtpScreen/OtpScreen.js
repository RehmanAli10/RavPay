import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import BackIcon from '../../../Assets/Icons/BackIcon';
import OTPTextInput from 'react-native-otp-textinput';
import {useNavigation} from '@react-navigation/native';
import Button from '../../component/Button';

const OtpScreen = ({phoneNumber}) => {
  const navigation = useNavigation();
  const [otpInput, setOtpInput] = useState('');
  const [timer, setTimer] = useState(30);

  const originalOtp = '7865';

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (otpInput.length === 4) {
      if (otpInput === originalOtp) {
        navigation.navigate('Pin');
      } else {
        Alert.alert('Invalid OTP');
      }
      setOtpInput('');
    }
  }, [otpInput, originalOtp, navigation]);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  const handleBackClick = () => {
    navigation.navigate('StartUp');
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent
        firstIcon={<BackIcon fill={'white'} height={30} width={30} />}
        handleBack={handleBackClick}
      />
      <View style={styles.textContainer}>
        <Text style={styles.firstText}>Enter Verification Code</Text>
        <Text style={styles.secondText}>
          Code has been sent to {phoneNumber}
        </Text>
      </View>
      <View style={styles.otpContainer}>
        <OTPTextInput
          handleTextChange={text => setOtpInput(text)}
          inputCount={4}
          keyboardType="numeric"
          tintColor="white"
          textInputStyle={styles.otpInput}
          secureTextEntry={false}
          editable={timer > 0}
        />
        <View style={styles.timerWrapper}>
          <Text style={styles.timerText}>
            Code available in {formatTime(timer)}
          </Text>
        </View>
      </View>
      {timer === 0 && (
        <View style={styles.resendCodeWrapper}>
          <Button text={'Resend Code'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  otpContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstText: {
    color: 'white',
    fontSize: 30,
  },
  secondText: {
    color: 'white',
    fontSize: 17,
  },
  otpInput: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  timerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    color: 'white',
    fontSize: 18,
  },
  resendCodeWrapper: {
    marginBottom: '30%',
  },
});

export default OtpScreen;
