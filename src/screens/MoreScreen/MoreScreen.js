import React, {memo} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import DiscoverList from '../../component/DiscoverList';
import PlayIcon from '../../../Assets/Icons/PlayIcon';
import ShareIcon from '../../../Assets/Icons/ShareIcon';
import ForwardIcon from '../../../Assets/Icons/ForwardIcon';
import ChatIcon from '../../../Assets/Icons/ChatIcon';
import ManageDevicesIcon from '../../../Assets/Icons/ManageDevicesIcon';
import LogOutIcon from '../../../Assets/Icons/LogOutIcon';
import UsersIcon from '../../../Assets/Icons/UsersIcon';
import BriefCaseIcon from '../../../Assets/Icons/BriefCaseIcon';
import Limit from './Limit';
import Info from './Info';
import ContentWrapper from '../../component/ContentWrapper';
import LinearGradient from 'react-native-linear-gradient';

const MoreScreen = memo(({userName, moneyLimit, passDiscover, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* User Info */}
      <ContentWrapper
        icon={<UsersIcon height={30} width={30} />}
        text={userName}
      />

      {/* Business Account */}
      <LinearGradient
        colors={['#FFD700', '#FFA500']}
        style={styles.userWrapper}>
        <View style={styles.icon}>
          <BriefCaseIcon height={30} width={30} />
        </View>
        <View style={styles.headerDescriptionWrapper}>
          <Text style={[styles.userName, {color: 'white'}]}>
            Open a business account
          </Text>
          <Text style={styles.descriptionText}>
            Receive instant payments from around the
          </Text>
          <Text style={styles.descriptionText}>world.</Text>
        </View>
      </LinearGradient>

      {/* Money Limit */}
      <Limit moneyLimit={moneyLimit} />

      {/* Rewards */}
      <View style={styles.rewardsWrapper}>
        <View style={styles.rewardsTextWrapper}>
          <Text style={styles.userName}>Rewards</Text>
        </View>
        <View style={styles.iconText}>
          <ShareIcon height={30} width={30} />
          <Text style={styles.descriptionText}>Invite Friends to SadaPay</Text>
          <ForwardIcon height={20} width={20} />
        </View>
      </View>

      {/* Discover */}
      {passDiscover && (
        <>
          <View style={styles.discover}>
            <Text style={styles.discoverText}>Discover</Text>
            <View style={styles.playIcon}>
              <PlayIcon height={30} width={30} fill={'white'} />
            </View>
          </View>
          <DiscoverList />
        </>
      )}

      {/* Chat with Support */}
      <ContentWrapper
        icon={<ChatIcon height={30} width={30} />}
        text={'Chat with Support'}
      />

      {/* Info */}
      <Info />

      {/* Manage Devices */}
      <ContentWrapper
        icon={<ManageDevicesIcon height={30} width={30} />}
        text={'Manage devices'}
        secondIcon={<ForwardIcon height={20} width={20} fill={'black'} />}
      />

      {/* Log out */}
      <ContentWrapper
        icon={<LogOutIcon height={30} width={30} />}
        text={'Log out'}
        handlePress={() => navigation.navigate('StartUp')}
      />
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContent: {
    paddingVertical: 20,
  },
  userWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 17,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
  },
  userName: {
    color: 'black',
    marginVertical: 8,
    fontSize: 18,
  },
  icon: {
    marginLeft: 10,
  },
  headerDescriptionWrapper: {
    marginLeft: '3%',
  },

  descriptionText: {
    color: 'black',
  },
  rewardsWrapper: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 8,
    borderWidth: 2,
  },
  rewardsTextWrapper: {
    marginLeft: '3%',
  },

  iconText: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  descriptionText: {
    fontWeight: 'bold',
    color: 'black',
  },

  chatWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 16,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: '10%',
  },
  chatDescriptionText: {
    color: 'black',
    margin: 10,
    fontSize: 18,
  },

  manageDevicesWrapper: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logOutWrapper: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discover: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
  },
  discoverText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  playIcon: {marginLeft: '5%'},
});

export default MoreScreen;
