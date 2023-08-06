import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ContentWrapper = ({icon, text, secondIcon, handlePress}) => {
  return (
    <View style={styles.userWrapper}>
      <View style={styles.icon}>{icon}</View>
      <TouchableOpacity style={styles.textWrapper} onPress={handlePress}>
        <Text style={styles.userName}>{text}</Text>
      </TouchableOpacity>
      {secondIcon && <View style={styles.secondIcon}>{secondIcon}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  userWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 17,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  secondIcon: {
    marginLeft: '15%',
  },
  userName: {
    color: 'black',
    marginVertical: 8,
    fontSize: 18,
  },
  textWrapper: {
    marginLeft: '3%',
  },
});

export default ContentWrapper;
