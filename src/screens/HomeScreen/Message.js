import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Message = () => {
  return (
    <View style={styles.msgWrapper}>
      <Text style={styles.msgHeader}>Welcome to RavPay!</Text>
      <Text style={styles.msgParagraph}>
        Welcome to the app that'll make you want to give up cash forever.
        Because who needs paper when you can have RavPay?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  msgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10%',
    marginTop: '23%',
  },
  msgHeader: {
    color: '#99DBF5',
    fontWeight: 'bold',
    fontSize: 30,
  },
  msgParagraph: {
    color: 'white',
    textAlign: 'center',
    marginTop: '3%',
  },
});

export default Message;
