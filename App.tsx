import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';

import { SelectParkingSlot } from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <SelectParkingSlot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
