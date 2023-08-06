import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import RequestImage from '../../Assets/Images/requestImage.png';
import Button from '../component/Button';
import ForwardIcon from '../../Assets/Icons/ForwardIcon';

const PhysicalScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={RequestImage} style={styles.image} />
      <View style={styles.descriptionWrapper}>
        <Text style={styles.headerText}>Request your card</Text>
        <Text style={styles.subText}>
          RavPay offers the debit cards from the Matsercard and PayPak card
          networks.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          text={'continue'}
          icon={<ForwardIcon height={15} width={15} fill={'white'} />}
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
  image: {
    marginTop: '10%',
    height: '50%',
    width: '90%',
    marginLeft: '5%',
    borderRadius: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  descriptionWrapper: {
    margin: '5%',
  },
  subText: {
    marginTop: '3%',
    color: 'white',
  },
  buttonWrapper: {
    marginTop: '10%',
  },
});

export default PhysicalScreen;
