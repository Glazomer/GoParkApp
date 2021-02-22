import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
// @ts-ignore
import DialogInput from 'react-native-dialog-input';

import { Spot } from './components';

const now = Date.now();
const getRand = (n: number) => Math.floor(Math.random() * n);
const presets = [
  () => ({ start: now, end: now }),
  (r = getRand(45e4)) => ({
    start: now + r - (getRand(3) + 1) * 36e5,
    end: now + r,
  }),
  (r = getRand(18e5) + 45e4) => ({
    start: now + r - (getRand(3) + 1) * 36e5,
    end: now + r,
  }),
];

const makeSpots = (n: number) =>
  new Array(n).fill(0).map(() => presets[Math.floor(Math.random() * 3)]());

export type SelectParkingSlotType = {};

export function SelectParkingSlot({ ...props }: SelectParkingSlotType) {
  const cols = useWindowDimensions().width > 480 ? 5 : 3;
  const [spots, setSpots] = useState(makeSpots(cols * 2));
  const [selected, setSelected] = useState<number | null>(null);

  const [disabled, setDisabled] = useState(false);
  function ResetBtn() {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 1e3);
    setSelected(null);
    setSpots(makeSpots(cols * 2));
  }

  const [promptId, setPromptId] = useState<number | null>(null);
  function HandleSubmit(submit: string) {
    const hours = parseInt(submit);
    if (promptId && 1 <= hours && hours <= 3) {
      const now = Date.now();
      spots[promptId] = { start: now, end: now + hours * 36e5 };

      const spotsSerialized = JSON.stringify(spots);
      setSpots(JSON.parse(spotsSerialized));
      setSelected(promptId);
      setPromptId(null);
    }
  }

  function CancelSelected() {
    if (selected) {
      const now = Date.now();
      spots[selected] = { start: now, end: now };

      const spotsSerialized = JSON.stringify(spots);
      setSpots(JSON.parse(spotsSerialized));
      setSelected(null);
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
        title='Reset to another parking'
        onPress={ResetBtn}
        disabled={disabled}
      />
      <View style={styles.parking}>
        <Text style={styles.door}>Exit</Text>
        <FlatList
          data={spots}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <Spot
              {...item}
              onPress={() => !selected && setPromptId(index)}
              id={index}
              selected={selected === index}
              style={styles.spot}
            />
          )}
          numColumns={cols}
          style={styles.list}
        />
        <Text style={[styles.door, { alignSelf: 'flex-end' }]}>Enter</Text>
      </View>

      <Button title='Cancel my parking' onPress={CancelSelected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  parking: { width: '100%', margin: 10, flexDirection: 'row' },
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
});
