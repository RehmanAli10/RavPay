import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const Limit = ({moneyLimit}) => {
  return (
    <View style={styles.incomingWrapper}>
      <Text style={styles.userName}>Limit</Text>
      <View style={styles.incomingPriceWrapper}>
        <Text style={styles.userName}>Incoming</Text>
        <Text style={styles.userName}>Rs. {moneyLimit} left</Text>
      </View>
      <Progress.Bar
        style={styles.progressBar}
        progress={moneyLimit <= 400000 ? moneyLimit / 400000 : 1}
        width={360}
        color={moneyLimit >= 400000 ? 'red' : '#00FF00'}
        borderRadius={10}
      />
      {moneyLimit >= 400000 && (
        <Text style={styles.userName}>
          Your Rs.400k monthly limit resets on the 1st of next month.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  incomingWrapper: {
    padding: 7,
    backgroundColor: 'white',
    margin: 17,
    borderRadius: 8,
    borderWidth: 2,
  },
  incomingPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  progressBar: {
    width: '100%',
    marginBottom: 10,
  },

  userName: {
    color: 'black',
    marginVertical: 8,
    fontSize: 18,
  },
});

export default Limit;
