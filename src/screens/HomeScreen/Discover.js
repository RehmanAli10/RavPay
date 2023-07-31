import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PlayIcon from '../../../Assets/Icons/PlayIcon';
import CrossIcon from '../../../Assets/Icons/CrossIcon';

const Discover = ({handleClose, setShowDiscover, setShowMsg}) => {
  const handleDiscoverClose = () => {
    setShowDiscover(false);
    setShowMsg(true);
    handleClose(true);
  };
  return (
    <View style={styles.discoverWrapper}>
      <View style={styles.discover}>
        <Text style={styles.discoverText}>Discover</Text>
        <View style={styles.playIcon}>
          <PlayIcon height={30} width={30} fill={'white'} />
        </View>
      </View>
      <View style={styles.cancelWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleDiscoverClose}>
          <CrossIcon height={10} width={10} fill={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  discoverCrossWrapper: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  discoverWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
    marginTop: '3%',
  },
  discover: {
    marginRight: 'auto',
    flexDirection: 'row',
    marginTop: '5%',
    marginLeft: '3%',
  },
  cancelWrapper: {
    marginRight: '2%',
    marginTop: '5%',
  },
  button: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#353535',
  },

  discoverText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  playIcon: {
    marginLeft: '5%',
  },
});

export default Discover;
