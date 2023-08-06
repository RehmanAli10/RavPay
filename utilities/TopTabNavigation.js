import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import VirtualScreen from '../src/screens/VirtualScreen';
import PhysicalScreen from '../src/screens/PhysicalScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: styles.tabLabel,
        indicatorStyle: styles.tabIndicator,
        style: styles.tabBar,
      }}>
      <Tab.Screen name="Virtual" component={VirtualScreen} />
      <Tab.Screen name="Physical" component={PhysicalScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'black', // Background color of the tab bar
  },
  tabLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white', // Color of the tab labels
  },
  tabIndicator: {
    backgroundColor: 'blue', // Color of the tab indicator
  },
});

export default TopTabNavigation;
