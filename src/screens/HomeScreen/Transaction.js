import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ArrowDownIcon from '../../../Assets/Icons/ArrowDownIcon';
import LinearGradient from 'react-native-linear-gradient';

const Transaction = ({transactionTime}) => {
  return (
    <LinearGradient
      colors={['#3f5efb', '#fc466b']}
      style={styles.transactionWrapper}>
      <View style={styles.transactionWrapper}>
        <View style={styles.transSeeAll}>
          <TouchableOpacity>
            <Text style={styles.transactionsText}>Transactions</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.transactionsText}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconRs}>
          <View style={styles.arrowDownWrapper}>
            <ArrowDownIcon height={35} width={35} />
            <Text style={styles.time}>{transactionTime}</Text>
          </View>

          <Text style={styles.transactionsText}>+ Rs.1</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  transactionWrapper: {
    borderRadius: 11,
    margin: '2%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
  },
  transSeeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionsText: {
    color: 'white',
  },
  iconRs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowDownWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: 'white',
    fontSize: 10,
    marginLeft: '4%',
  },
  description: {
    color: 'white',
  },
});

export default Transaction;
