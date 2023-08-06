import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const HeaderComponent = ({firstIcon, handleBack, text, secondText}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
        {firstIcon}
      </TouchableOpacity>
      {text && secondText ? (
        <View style={styles.headerWrapper}>
          <Text style={styles.headingText}>{text}</Text>
          <Text style={styles.secondText}>{secondText}</Text>
        </View>
      ) : (
        <View style={styles.headerWrapper}>
          <Text style={styles.headingText}>{text}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    marginTop: '3%',
    marginLeft: '4%',
  },
  headerWrapper: {
    marginLeft: '16%',
    marginTop: '3%',
  },
  headingText: {
    fontSize: 20,
    color: 'white',
  },
  secondText: {
    fontSize: 20,
    color: 'white',
    marginLeft: '15%',
  },
});

export default HeaderComponent;
