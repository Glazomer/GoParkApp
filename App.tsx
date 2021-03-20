import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StackParamList,
  Dashboard,
  SelectParkingSlot,
  MyBookedParking,
  SuccessfullyBooked,
  NavigateEntryA,
  NavigateEntryB,
  FAQ,
} from './src';

import { Context, useFirebase } from './src/firebase';

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0a84ff',
    background: '#1C1C32',
    card: '#272644',
    text: '#e5e5e7',
    border: '#272729',
    notification: '#ff453a',
  },
};

const Stack = createStackNavigator<StackParamList>();

export default function App() {
  const state = useFirebase();
  return (
    <Context.Provider value={state}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen
            name='SelectParkingSlot'
            component={SelectParkingSlot}
          />
          <Stack.Screen name='MyBookedParking' component={MyBookedParking} />
          <Stack.Screen
            name='SuccessfullyBooked'
            component={SuccessfullyBooked}
          />
          <Stack.Screen name='NavigateEntryA' component={NavigateEntryA} />
          <Stack.Screen name='NavigateEntryB' component={NavigateEntryB} />
          <Stack.Screen name='FAQ' component={FAQ} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
