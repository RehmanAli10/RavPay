import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  Alert,
} from 'react-native';
import LogoIcon from '../../../Assets/Icons/LogoIcon';
import CustomKeyboard from '../../component/CustomKeyboard';
import {useNavigation} from '@react-navigation/native';

const PinScreen = () => {
  const inputRefs = useRef([]);
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const originalPin = 78654;

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    handleValidation();
  }, [pin]);

  const handleValidation = () => {
    if (pin.length === 5 && Number(pin) === originalPin) {
      navigation.navigate('Home');
    } else if (pin.length > 0 && pin.length < 5) {
      null;
    } else if (pin.length > 0) {
      setPin('');
      inputRefs.current[0].focus();
      Alert.alert('Invalid pin');
    }
  };

  const handleKeyPress = key => {
    if (key === 'backSpace') {
      if (pin.length > 0) {
        setPin(pin.slice(0, -1));
      }
    } else if (pin.length < 5) {
      setPin(pin + key);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.headWrapper}>
          <LogoIcon height={80} width={80} />
          <Text style={styles.text}>AVPAY</Text>
        </View>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            editable={pin.length === 0}
            value={pin[0]}
            ref={ref => (inputRefs.current[0] = ref)}
          />
          <TextInput
            style={styles.otpInputOne}
            editable={pin.length <= 1}
            value={pin[1]}
            ref={ref => (inputRefs.current[1] = ref)}
          />
          <TextInput
            style={styles.otpInputOne}
            editable={pin.length <= 2}
            value={pin[2]}
            ref={ref => (inputRefs.current[2] = ref)}
          />
          <TextInput
            style={styles.otpInputOne}
            editable={pin.length <= 3}
            value={pin[3]}
            ref={ref => (inputRefs.current[3] = ref)}
          />
          <TextInput
            style={styles.otpInputOne}
            editable={pin.length <= 4}
            value={pin[4]}
            ref={ref => (inputRefs.current[4] = ref)}
          />
        </View>
        <View style={styles.forgetPinWrapper}>
          <TouchableOpacity>
            <Text style={styles.timerText}>Forget Pin ?</Text>
          </TouchableOpacity>
        </View>
        <CustomKeyboard handleKeyPress={handleKeyPress} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otpInput: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  otpInputOne: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginLeft: 10,
  },
  forgetPinWrapper: {
    marginTop: '10%',
  },
});

export default PinScreen;
