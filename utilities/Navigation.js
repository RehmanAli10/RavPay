import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigationContainer from '../src/container/HomeNavigationContainer';
import BillsUtilitiesScreen from '../src/screens/PaymentOptionsScreen/BillsUtilitiesScreen/BillsUtilitiesScreen';
import StartUpContainer from '../src/container/StartUpContainer';
import OtpContainer from '../src/container/OtpContainer';
import PinContainer from '../src/container/PinContainer';
import MobileTopUpScreen from '../src/screens/PaymentOptionsScreen/MobileTopUpScreen';
import MoneyRequestsScreen from '../src/screens/PaymentOptionsScreen/MoneyRequestsScreen';
import NewBillPayment from '../src/screens/PaymentOptionsScreen/BillsUtilitiesScreen/NewBillPayment';
import ConsumerNumber from '../src/screens/PaymentOptionsScreen/BillsUtilitiesScreen/ConsumerNumber';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="StartUp">
      <Stack.Screen
        name="StartUp"
        component={StartUpContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Otp"
        component={OtpContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pin"
        component={PinContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeNavigationContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MobileTopUpScreen"
        component={MobileTopUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BillUtilities"
        component={BillsUtilitiesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewBillPayment"
        component={NewBillPayment}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ConsumerNumber"
        component={ConsumerNumber}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MoneyRequest"
        component={MoneyRequestsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
