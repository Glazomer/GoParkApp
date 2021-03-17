import 'react-native-gesture-handler';
import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  SelectParkingSlot,
  MyBookedParking,
  SuccessfullyBooked,
  NavigateEntryA,
  NavigateEntryB,
} from './src';

import { Context, useFirebase } from './src/firebase';

export type StackParamList = {
  SelectParkingSlot: undefined;
  MyBookedParking: undefined;
  SuccessfullyBooked: undefined;
  NavigateEntryA: undefined;
  NavigateEntryB: undefined;
};
const Stack = createStackNavigator<StackParamList>();

export default function App() {
  const state = useFirebase();
  return (
    <Context.Provider value={state}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}
