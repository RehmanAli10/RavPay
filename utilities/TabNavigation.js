import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  BackHandler,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../Assets/Icons/HomeIcon';
import HomeContainer from '../src/container/HomeContainer';
import MoreContainer from '../src/container/MoreContainer';
import PaymentIcon from '../Assets/Icons/PaymentIcon';
import MenuIcon from '../Assets/Icons/MenuIcon';
import BottomSheet from '../src/component/BottomSheet';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [passDiscover, setPassDiscover] = useState(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const toggleBottomSheet = () => {
    setBottomSheetVisible(prevState => !prevState);
  };

  const handleShowDiscover = show => {
    setPassDiscover(show);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  useEffect(() => {
    if (bottomSheetVisible) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          closeBottomSheet();
          return true;
        },
      );
      return () => {
        backHandler.remove();
      };
    }
  }, [bottomSheetVisible]);

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen
          name="HomeScreen"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <HomeIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}>
          {() => <HomeContainer handleShowDiscover={handleShowDiscover} />}
        </Tab.Screen>

        <Tab.Screen
          name="PaymentScreen"
          component={''}
          listeners={({navigation}) => ({
            tabPress: e => {
              e.preventDefault();
              toggleBottomSheet();
            },
          })}
          options={{
            tabBarIcon: ({focused}) => (
              <PaymentIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="MoreScreen"
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <MenuIcon
                height={25}
                width={25}
                fill={focused ? 'red' : 'black'}
              />
            ),
          }}>
          {() => <MoreContainer passDiscover={passDiscover} />}
        </Tab.Screen>
      </Tab.Navigator>

      {bottomSheetVisible && (
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <View style={styles.bottomSheet}>
            <BottomSheet />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {position: 'absolute', height: '100%', width: '100%'},
});

export default TabNavigation;
