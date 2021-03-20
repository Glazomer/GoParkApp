import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { StackParamList } from '.';
import { Context } from '../src/firebase';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'Dashboard'
>;

function DashboardButton({
  style,
  children,
  bg,
  ...props
}: TouchableOpacity['props'] & { bg: string }) {
  const backgroundColor = props.disabled ? '#393960' : bg;
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor }, style]}
      {...props}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
}

export type DashboardProps = { navigation: ProfileScreenNavigationProp };

export function Dashboard({ navigation }: DashboardProps) {
  const { spots, selected } = useContext(Context);
  const activeSelected =
    selected !== undefined && Date.now() < spots[selected][1];
  return (
    <View style={styles.container}>
      <DashboardButton
        onPress={() => navigation.navigate('SelectParkingSlot')}
        bg='#3F69F0'>
        <Text>View Available Parking Slot</Text>
      </DashboardButton>
      <DashboardButton
        onPress={() => navigation.navigate('MyBookedParking')}
        bg='#484EF2'
        disabled={!activeSelected}>
        <Text>My Booked Parking Slot</Text>
      </DashboardButton>
      <DashboardButton onPress={() => navigation.navigate('FAQ')} bg='#774CEB'>
        <Text>Need Help?</Text>
      </DashboardButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 25, flex: 1, justifyContent: 'space-around' },
  btn: {
    height: 200,
    maxHeight: '25%',
    borderRadius: 25,
    padding: 25,
    justifyContent: 'space-around',
  },
  btnText: {
    fontSize: 24,
  },
});
