import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ForwardIcon from '../../../Assets/Icons/ForwardIcon';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';
import Button from '../../component/Button';

const StartUpScreen = ({phoneNumber, isValidPhoneNumber, setPhoneNumber}) => {
  const navigation = useNavigation();

  const handleContinue = () => {
    if (phoneNumber && isValidPhoneNumber) {
      navigation.navigate('Otp', {phoneNumber});
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.heading}>Let's get started!</Text>
        <Text style={styles.paragraph}>Please enter your mobile number</Text>
      </View>
      <View style={styles.phoneInput}>
        <PhoneInput
          value={phoneNumber}
          defaultCode="IN"
          onChangeFormattedText={setPhoneNumber}
          containerStyle={styles.phoneInputContainer}
          placeholder="P.no"
        />
      </View>
      <View style={styles.errorWrapper}>
        {isValidPhoneNumber ? null : (
          <Text style={styles.errorText}>Invalid phone number</Text>
        )}
      </View>

      <Button
        text={'continue'}
        icon={<ForwardIcon height={10} width={10} fill={'white'} />}
        onPress={handleContinue}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  paragraph: {
    color: 'white',
    fontSize: 15,
  },
  btnWrapper: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    width: '30%',
    alignSelf: 'center',
  },
  btnContent: {
    color: 'white',
    fontSize: 15,
    marginLeft: 5,
  },
  icon: {
    marginLeft: 10,
  },
  phoneInput: {
    marginBottom: 20,
  },
  phoneInputContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorWrapper: {
    marginBottom: '10%',
  },
  errorText: {
    color: 'red',
    marginLeft: '60%',
    fontSize: 13,
    marginBottom: '2%',
  },
});

export default StartUpScreen;
