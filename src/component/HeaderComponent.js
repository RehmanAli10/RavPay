import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

const HeaderComponent = ({firstIcon, handleBack}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
        {firstIcon}
      </TouchableOpacity>
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
    marginLeft: '2%',
  },
});

export default HeaderComponent;
