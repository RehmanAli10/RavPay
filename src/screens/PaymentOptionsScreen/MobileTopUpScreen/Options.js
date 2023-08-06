import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Options = ({handleOperator}) => {
  const handleOperatorAction = operator => {
    handleOperator(operator);
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionHeaderWrapper}>
        <Text style={styles.optionHeaderText}>Choose Operator</Text>
      </View>

      <TouchableOpacity onPress={() => handleOperatorAction('Warid')}>
        <View style={styles.option1Wrapper}>
          <View style={styles.MobileTopUpIcon}>
            <Text style={styles.optionsText}>Warid</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity onPress={() => handleOperatorAction('Jazz')}>
        <View style={styles.option2Wrapper}>
          <View style={styles.billsIcons}>
            <Text style={styles.optionsText}>Jazz</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity onPress={() => handleOperatorAction('Zong')}>
        <View style={styles.option3Wrapper}>
          <View style={styles.moneyRequestIcon}>
            <Text style={styles.optionsText}>Zong</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    top: '50%',
    height: '50%',
    width: '100%',
  },
  optionHeaderWrapper: {
    marginBottom: 10,
  },
  optionHeaderText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },

  optionsText: {
    color: 'black',
    marginLeft: 10,
  },
  optionsSecondText: {
    color: 'black',
    marginLeft: 40,
  },
  option1Wrapper: {
    margin: 10,
  },
  option2Wrapper: {
    margin: 10,
  },
  option3Wrapper: {
    margin: 10,
  },
  MobileTopUpIcon: {
    flexDirection: 'row',
  },
  billsIcons: {
    flexDirection: 'row',
  },
  moneyRequestIcon: {
    flexDirection: 'row',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
});

export default Options;
