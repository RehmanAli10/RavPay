import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DiscoverList from '../../component/DiscoverList';
import Discover from './Discover';
import Message from './Message';
import Transaction from './Transaction';
import LinearGradient from 'react-native-linear-gradient';
import ForwardIcon from '../../../Assets/Icons/ForwardIcon';
import DownArrowIcon from '../../../Assets/Icons/DownArrowIcon';
import RightTopIcon from '../../../Assets/Icons/RightTopIcon';

const HomeScreen = memo(
  ({
    rupees,
    time,
    handleClose,
    showDiscover,
    setShowDiscover,
    showMsg,
    setShowMsg,
    transactionTime,
    navigation,
  }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CurrentBalance')}>
            <LinearGradient
              colors={['#A0C49D', '#C2DEDC']}
              style={styles.currentBalanceWrapper}>
              <View style={styles.currentBalanceWrapper}>
                <Text style={styles.currentBalanceText}>Current Balance</Text>
                <Text style={styles.rupees}>Rs.{rupees}</Text>
                <View style={styles.currentBalanceIcon}>
                  <ForwardIcon height={25} width={25} fill={'white'} />
                </View>
              </View>
            </LinearGradient>
          </TouchableOpacity>

          <View style={styles.otherCards}>
            <TouchableOpacity onPress={() => navigation.navigate('LoadMoney')}>
              <LinearGradient
                colors={['#C2DEDC', '#99DBF5']}
                style={styles.loadMoney}>
                <Text style={styles.money}>Load</Text>
                <Text style={styles.money}>Money</Text>
                <View style={styles.lodMoneyIcon}>
                  <DownArrowIcon height={40} width={40} fill={'white'} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SendAndRequest')}>
              <LinearGradient
                colors={['#eeaeca', '#94bbe9']}
                style={styles.sendRequest}>
                <Text style={styles.sendText}>Send & </Text>
                <Text style={styles.sendText}>Request</Text>
                <View style={styles.sendRequestIcon}>
                  <RightTopIcon height={15} width={15} fill={'white'} />
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <Transaction transactionTime={transactionTime} />

        {showDiscover && (
          <>
            <Discover
              setShowDiscover={setShowDiscover}
              setShowMsg={setShowMsg}
              handleClose={handleClose}
            />

            <DiscoverList />
          </>
        )}
        {showMsg && <Message />}
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '40%',
    marginTop: '5%',
  },
  currentBalanceWrapper: {
    borderRadius: 11,
    width: '110%',
    height: '90%',
    marginTop: '3%',
    marginBottom: '10%',
    alignItems: 'center',
  },
  currentBalanceText: {
    marginTop: '10%',
    color: 'black',
    fontSize: 20,
  },
  rupees: {
    fontSize: 30,
    color: 'black',
  },
  otherCards: {
    flexDirection: 'column',
    height: '50%',
    marginLeft: '3%',
  },
  loadMoney: {
    height: '90%',
    width: '100%',
    marginTop: '3%',
    marginRight: '30%',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  money: {
    fontSize: 20,
    color: 'black',
  },
  sendRequest: {
    marginTop: '3%',
    width: '100%',
    marginRight: '30%',
    height: '90%',
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendText: {
    fontSize: 20,
    color: 'black',
  },
  currentBalanceIcon: {
    position: 'relative',
    top: '55%',
    left: '30%',
  },
  lodMoneyIcon: {
    position: 'absolute',
    left: '1%',
    top: 0,
    marginTop: '5%',
  },
  sendRequestIcon: {
    position: 'relative',
    top: '-60%',
    left: '40%',
  },
});

export default HomeScreen;
