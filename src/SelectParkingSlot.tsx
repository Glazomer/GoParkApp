import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
// @ts-ignore
import DialogInput from 'react-native-dialog-input';

import { Spot } from './components';

import { StackParamList } from '../App';
import {
  Context,
  selectSpot,
  unselectSpot,
  resetSpots,
  getCols,
} from '../src/firebase';

type ProfileScreenNavigationProp = StackNavigationProp<
  StackParamList,
  'SelectParkingSlot'
>;
export type SelectParkingSlotType = { navigation: ProfileScreenNavigationProp };

export function SelectParkingSlot({ navigation }: SelectParkingSlotType) {
  const { spots, selected } = useContext(Context);
  const [disabled, setDisabled] = useState(false);

  function ResetBtn() {
    setDisabled(true);
    resetSpots();
    setTimeout(() => setDisabled(false), 500);
  }

  const [promptId, setPromptId] = useState<number | null>(null);

  function HandleSubmit(submit: string) {
    const hours = parseInt(submit);
    if (promptId !== null && 1 <= hours && hours <= 3) {
      setPromptId(null);
      selectSpot(promptId, hours);
    }
  }

  return (
    <View style={styles.container}>
      <DialogInput
        title='Enter how many hours you want to book:'
        hintInput='Enter from 1 to 3 hours'
        isDialogVisible={promptId !== null}
        closeDialog={() => setPromptId(null)}
        submitInput={HandleSubmit}
        textInputProps={{ keyboardType: 'number-pad' }}
      />
      <Button
        title='My booked parking'
        onPress={() => navigation.navigate('MyBookedParking')}
        disabled={selected === undefined}
      />
      <View style={styles.delimiter} />
      <Button
        title='Shuffle random parking'
        onPress={ResetBtn}
        disabled={disabled}
      />
      <View style={styles.parking}>
        <Text style={styles.door}>Exit</Text>
        <FlatList
          data={spots}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item: [start, end], index }) => (
            <Spot
              start={start}
              end={end}
              onPress={() => !selected && setPromptId(index)}
              id={index}
              selected={selected === index}
              style={styles.spot}
            />
          )}
          numColumns={getCols()}
          style={styles.list}
        />
        <Text style={[styles.door, { alignSelf: 'flex-end' }]}>Enter</Text>
      </View>
      <Button
        title='Cancel my booking'
        disabled={selected === undefined}
        onPress={() => selected !== undefined && unselectSpot(selected)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  parking: {
    backgroundColor: '#423F3C',
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  list: { margin: 10 },
  spot: { flex: 1 },
  door: {
    color: '#FFFFFF',
    fontSize: 24,
    width: 24,
    height: 180,
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 5,
    backgroundColor: '#5571C0',
    borderWidth: 2,
    borderColor: '#5B6E9D',
  },
  delimiter: { height: 20 },
});
