import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import HeaderComponent from '../../component/HeaderComponent';
import BackIcon from '../../../Assets/Icons/BackIcon';
import SendAndRequestKeyboard from './SendAndRequestkeyboard';

const SendAndRequestScreen = ({navigation, currentBalance}) => {
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  const handleKeyPress = value => {
    if (value === 'backSpace') {
      setTextValue(prevValue => prevValue.slice(0, -1));
    } else {
      setTextValue(prevValue => prevValue + value);
    }
  };

  const handleSend = () => {
    if (textValue) {
      if (textValue > currentBalance) {
        Alert.alert('Balance is insufficent');
      } else {
        Alert.alert('Work in progress :)');
      }
    } else {
      Alert.alert('Enter rupees');
    }
  };

  const handleRequest = () => {
    Alert.alert('Work in progress');
  };

  const formattedValue = Number(textValue).toLocaleString();

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent
        firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
        handleBack={() => navigation.navigate('Home')}
        text={'Current balance'}
        secondText={`Rs.${currentBalance}`}
      />
      <View style={styles.contentContainer}>
        <View style={styles.rupeesInputWrapper}>
          <View style={styles.rupeesWrapper}>
            <Text style={styles.rupeesText}>Rs.</Text>
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              value={formattedValue}
              style={styles.textInput}
              onChangeText={setTextValue}
              editable={false}
            />
          </View>
        </View>
        <SendAndRequestKeyboard handleKeyPress={handleKeyPress} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={handleRequest}>
            <Text style={styles.text}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWrapper} onPress={handleSend}>
            <Text style={styles.text}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rupeesInputWrapper: {
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  rupeesWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '30%',
  },
  rupeesText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textInputWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
  textInput: {
    fontSize: 30,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
  },
  buttonWrapper: {
    backgroundColor: 'blue',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: 'lightblue',
  },
});

export default SendAndRequestScreen;
