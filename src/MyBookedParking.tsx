import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '../App';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'MyBookedParking'
>;

export type MyBookedParkingType = { navigation: ProfileScreenNavigationProp };

export function MyBookedParking({ navigation }: MyBookedParkingType) {
  return (
    <View style={styles.container}>
      <Button
        title='Check in'
        onPress={() => navigation.navigate('SuccessfullyBooked')}
      />
      <View style={styles.delimiter} />
      <Button
        title='Navigate to my screen'
        onPress={() => navigation.navigate('NavigateEntryA')}
      />
      <View style={styles.delimiter} />
      <Button
        title='Check out'
        onPress={() => navigation.navigate('NavigateEntryB')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, flex: 1, justifyContent: 'space-around' },
  delimiter: { height: 10 },
});
