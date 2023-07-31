import {StyleSheet, TextInput, View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../../component/HeaderComponent';
import BackIcon from '../../../../Assets/Icons/BackIcon';
import {useNavigation} from '@react-navigation/native';
import ForwardIcon from '../../../../Assets/Icons/ForwardIcon';
import Button from '../../../component/Button';

const ConsumerNumber = () => {
  const navigation = useNavigation();
  const [consumerNumber, setConsumerNumber] = useState();
  const validConsumerNumber = 7865;

  const handleChange = value => {
    setConsumerNumber(value);
  };

  const handleConsumerNumberValidation = () => {
    if (Number(consumerNumber)) {
      if (Number(consumerNumber) === validConsumerNumber) {
        Alert.alert('Valid consumer number');
      } else {
        Alert.alert('Invalid consumer number');
        setConsumerNumber('');
      }
    } else {
      Alert.alert('Enter consumer number');
    }
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
        handleBack={() => navigation.navigate('NewBillPayment')}
      />
      <View style={styles.ConsumerNumberWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}> Enter Consumer Number </Text>
        </View>
        <View style={styles.textInputWrapper}>
          <TextInput
            onChangeText={handleChange}
            value={consumerNumber}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          text={'continue'}
          icon={<ForwardIcon height={15} width={15} fill={'white'} />}
          onPress={handleConsumerNumberValidation}
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
  headerWrapper: {
    margin: '4%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  textInputWrapper: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    margin: '3%',
  },
  textInput: {
    fontSize: 20,
  },
  buttonWrapper: {
    marginTop: '10%',
  },
});

export default ConsumerNumber;
