import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Clipboard,
  Alert,
  Switch,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import LogoIcon from '../../Assets/Icons/LogoIcon';
import FreezeIcon from '../../Assets/Icons/FreezeIcon';

const VirtualScreen = () => {
  const [view, setView] = useState(false);
  const [hide, setHide] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setIsFrozen(previousState => !previousState);
  };

  const handleView = () => {
    setView(true);
    setHide(false);
  };

  const handleHide = () => {
    setView(false);
    setHide(true);
  };
  const copyDetails = () => {
    const details = view
      ? 'Card Number: 1234 5678 9012 3456\nExpiration Date: 07/28\nCVC: 234'
      : 'Card Number: . . . . . . . . . . . . . . . . .\nExpiration Date: . . / . .\nCVC: . . .';
    Clipboard.setString(details);
    Alert.alert('Details copied to clipboard!');
  };
  return (
    <View style={styles.container}>
      <View style={[styles.card, isFrozen && styles.frozenCard]}>
        <View style={styles.logoCardDetailsWrapper}>
          <View style={styles.logoWrapper}>
            {isEnabled ? (
              <FreezeIcon height={50} width={50} fill={'white'} />
            ) : (
              <LogoIcon height={50} width={50} />
            )}
          </View>
          <View style={styles.detailWrapper}>
            {view ? (
              <>
                <Text style={styles.text}>1234</Text>
                <Text style={styles.text}>1234</Text>
                <Text style={styles.text}>1234</Text>
                <Text style={styles.text}>1234</Text>
              </>
            ) : hide ? (
              <>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
              </>
            ) : (
              <>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
                <Text style={styles.text}> . . . . </Text>
              </>
            )}

            <Text style={styles.text}>0900</Text>
          </View>
        </View>
        <View style={styles.expDateWrapper}>
          <View style={styles.expDate}>
            <Text style={styles.text}>Exp date</Text>
          </View>

          <View style={styles.expOption}>
            {view ? (
              <Text style={styles.text}> 07 / 28</Text>
            ) : hide ? (
              <Text style={styles.text}> . . / . .</Text>
            ) : (
              'sorry'
            )}
          </View>
        </View>
        <View style={styles.expDateWrapper}>
          <View style={styles.expDate}>
            <Text style={styles.text}>CVC</Text>
          </View>

          <View style={styles.expOption}>
            {view ? (
              <Text style={styles.text}> 234</Text>
            ) : hide ? (
              <Text style={styles.text}> . . .</Text>
            ) : (
              'sorry'
            )}
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleView}>
            {view ? (
              <Text style={styles.buttonText} onPress={handleHide}>
                Hide
              </Text>
            ) : (
              <Text style={styles.buttonText}>View</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={copyDetails}>
            <Text style={styles.buttonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.freezeCardWrapper}>
        <View style={styles.freezeCardIcon}>
          <FreezeIcon height={30} width={30} fill={'white'} />
        </View>
        <View style={styles.descriptionText}>
          <Text style={styles.freezeCardHeadingText}> Freeze card </Text>
          <Text>Lock this card temporarily</Text>
        </View>
        <View style={styles.switchWrapper}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%',
    borderWidth: 2,
    borderColor: 'white',
  },
  frozenCard: {
    borderColor: 'blue', // Change border color to indicate frozen state
    backgroundColor: 'darkblue', // Change background color to indicate frozen state
    transition: 'border-color 0.3s, background-color 0.3s', // Add transition for smooth animation
  },
  logoCardDetailsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  logoWrapper: {
    position: 'relative',
    right: '28%',
    top: -18,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  expDateWrapper: {
    flexDirection: 'row',
  },
  expOption: {
    marginLeft: '3%',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: '3%',
  },
  button: {
    backgroundColor: 'blue',
    marginHorizontal: '8%',
    marginVertical: '8%',
    borderRadius: 8,
    width: '40%',
    height: '70%',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: '20%',
    marginTop: '8%',
    fontSize: 15,
  },
  freezeCardWrapper: {flexDirection: 'row', marginTop: '8%'},
  freezeCardHeadingText: {
    color: 'white',
  },
  switchWrapper: {
    marginLeft: '8%',
  },
});

export default VirtualScreen;
