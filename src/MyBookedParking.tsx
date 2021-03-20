import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '.';
import { Button } from './components';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'MyBookedParking'
>;

export type MyBookedParkingType = { navigation: ProfileScreenNavigationProp };

export function MyBookedParking({ navigation }: MyBookedParkingType) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('SuccessfullyBooked')}>
        Check in
      </Button>
      <Button onPress={() => navigation.navigate('NavigateEntryA')}>
        Navigate to my screen
      </Button>
      <Button onPress={() => navigation.navigate('NavigateEntryB')}>
        Check out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, flex: 1, justifyContent: 'space-around' },
});
