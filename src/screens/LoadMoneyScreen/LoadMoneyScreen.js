import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Clipboard,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../../component/HeaderComponent';
import BackIcon from '../../../Assets/Icons/BackIcon';
import CopyIcon from '../../../Assets/Icons/CopyIcon';

const LoadMoneyScreen = ({navigation, rupeesLimit, number, ibanNumber}) => {
  const copyDetails = () => {
    const detailsToCopy = `My SadaPay account number: ${number}\nIncoming limit left this month: Rs.${rupeesLimit}`;
    Clipboard.setString(detailsToCopy);
    Alert.alert('Details copied to clipboard!');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerComponentWrapper}>
        <HeaderComponent
          firstIcon={<BackIcon height={30} width={30} fill={'white'} />}
          handleBack={() => navigation.navigate('Home')}
        />
      </View>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}> Load money </Text>
        <Text style={styles.descriptionText}>
          <Text style={styles.text}>Rs.{rupeesLimit}</Text> incoming limit left
          this month
        </Text>
      </View>

      <TouchableOpacity style={styles.transfersWrapper} onPress={copyDetails}>
        <Text style={styles.transferHeaderText}>Receive local transfers</Text>
        <View style={styles.transferDescriptionWrapper}>
          <Text style={styles.descriptionText}>My RavPay account number</Text>
          <Text style={styles.numberText}>{number}</Text>
          <View style={styles.copyTextIconWrapper}>
            <View>
              <CopyIcon height={30} width={30} fill={'orange'} />
            </View>

            <View>
              <Text style={styles.text}>Copy</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.transfersWrapper, {marginTop: '3%'}]}
        onPress={copyDetails}>
        <Text style={styles.transferHeaderText}>
          Receive international transfers
        </Text>
        <View style={styles.transferDescriptionWrapper}>
          <Text style={styles.descriptionText}>My RavPay IBAN number</Text>
          <Text style={styles.numberText}>{ibanNumber}</Text>
          <View style={styles.copyTextIconWrapper}>
            <View>
              <CopyIcon height={30} width={30} fill={'orange'} />
            </View>

            <View>
              <Text style={styles.text}>Copy</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerWrapper: {
    margin: '6%',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  text: {
    color: 'orange',
  },
  transfersWrapper: {
    marginLeft: '8%',
  },
  transferHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  transferDescriptionWrapper: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 7,
    marginTop: '2%',
  },
  descriptionText: {
    margin: '3%',
  },
  numberText: {
    marginLeft: '3%',
  },
  copyTextIconWrapper: {
    flexDirection: 'row',
    margin: '3%',
  },
});

export default LoadMoneyScreen;
