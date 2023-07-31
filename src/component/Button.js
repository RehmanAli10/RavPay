import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({text, icon, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnWrapper}>
        <Text style={styles.btnContent}>{text}</Text>
        <View style={styles.icon}>{icon}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
});

export default Button;
