import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import BackSpaceIcon from '../../Assets/Icons/BackSpaceIcon';
import ThumbPrintIcon from '../../Assets/Icons/ThumbPrintIcon';

export default function CustomKeyboard({handleKeyPress}) {
  const renderButton = (value, index) => (
    <TouchableOpacity
      style={styles.circularButton}
      onPress={() => handleKeyPress(value, index)}
      key={index}>
      {value === 'backSpace' ? (
        <BackSpaceIcon height={30} width={30} />
      ) : (
        <Text style={styles.buttonText}>
          {value !== null ? value.toString() : ''}
        </Text>
      )}
    </TouchableOpacity>
  );
  return (
    <View style={styles.keyBoardWrapper}>
      <View style={styles.keyBoard}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress('1')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('2')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('3')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress('4')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('5')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('6')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleKeyPress('7')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('8')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('9')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={handleKeyPress}
            style={styles.circularButton}>
            <ThumbPrintIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('0')}
            style={styles.circularButton}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleKeyPress('backSpace')}
            style={styles.circularButton}>
            <BackSpaceIcon height={40} width={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyBoardWrapper: {
    width: '100%',
    marginTop: '10%',
    alignItems: 'center',
  },
  keyBoard: {
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circularButton: {
    borderRadius: 100,
    width: 60,
    height: 60,
    margin: 10,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
