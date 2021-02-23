import React, { useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import { Spot } from './components';

import { getCols, Context } from '../src/reducer';

export type NavigateEntryAType = {};

export function NavigateEntryA({}: NavigateEntryAType) {
  const [{ spots, selected }] = useContext(Context);

  return (
    <View style={styles.container}>
      <Button title='Repeat' onPress={() => {}} disabled={selected === null} />
      <View style={styles.parking}>
        <Text style={styles.door}>Exit</Text>
        <FlatList
          data={spots}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <Spot
              {...item}
              id={index}
              disabled
              selected={selected === index}
              style={styles.spot}
            />
          )}
          numColumns={getCols()}
          style={styles.list}
        />
        <Text style={[styles.door, { alignSelf: 'flex-end' }]}>Enter</Text>
      </View>
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
