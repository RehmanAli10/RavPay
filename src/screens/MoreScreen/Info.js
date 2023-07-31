import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrivacyIcon from '../../../Assets/Icons/PrivacyIcon';
import TermsConditions from '../../../Assets/Icons/TermsConditions';
import Schedule from '../../../Assets/Icons/Schedule';

const Info = () => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoHeaderWrapper}>
        <Text style={styles.userName}>Info</Text>
      </View>

      <View style={styles.infoOptionsWrapper}>
        <View style={styles.icon}>
          <PrivacyIcon height={30} width={30} />
        </View>
        <Text style={styles.chatDescriptionText}>Privacy policy</Text>
      </View>
      <View style={styles.infoOptionsWrapper}>
        <View style={styles.icon}>
          <TermsConditions height={30} width={30} />
        </View>
        <Text style={styles.chatDescriptionText}>Terms & conditions</Text>
      </View>
      <View style={styles.infoOptionsWrapper}>
        <View style={styles.icon}>
          <Schedule height={30} width={30} />
        </View>
        <Text style={styles.chatDescriptionText}>Schedule of charges</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: 'white',
    margin: 17,
    borderRadius: 8,
    borderWidth: 2,
  },
  infoOptionsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  chatDescriptionText: {
    color: 'black',
    margin: 5,
    fontSize: 18,
  },
  userName: {
    color: 'black',
    marginVertical: 8,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
  infoHeaderWrapper: {
    marginLeft: '3%',
  },
});

export default Info;
