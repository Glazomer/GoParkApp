import React, { useEffect, useRef, useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  Animated,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import { Spot, Button } from './components';

import { getCols, getRows, Context } from '../src/firebase';

import car from '../assets/car.png';

export type NavigateEntryAType = {};

export function NavigateEntryA({}: NavigateEntryAType) {
  const { spots, selected } = useContext(Context);
  const yStep = 150;
  const xStep = (useWindowDimensions().width - 114 - getCols() * 4) / getCols();
  const yPadding = 0;
  const xPadding = 46 + (xStep - 54) / 2;
  const rightOffset =
    -xPadding - xStep * (getCols() - ((selected || 0) % getCols()) - 1);
  const bottomOffset =
    -yPadding - yStep * Math.ceil(getRows() - (selected || 0) / getCols() - 1);

  const CarX = useRef(new Animated.Value(0)).current;
  const CarY = useRef(new Animated.Value(0)).current;

  const moveCar = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(CarY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(CarX, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(CarX, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(CarY, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const xVal = CarX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, rightOffset],
  });

  const yVal = CarY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bottomOffset],
  });

  const animStyle = {
    transform: [{ translateY: yVal }, { translateX: xVal }],
  };

  useEffect(moveCar, [navigator]);

  return (
    <View style={styles.container}>
      <Button onPress={moveCar} disabled={selected === null}>
        Repeat
      </Button>
      <View style={styles.parking}>
        <Text style={styles.door}>Exit</Text>
        <FlatList
          data={spots}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item: [start, end], index }) => (
            <Spot
              start={start}
              end={end}
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
        <Animated.Image
          source={car}
          style={[styles.car, animStyle]}
          resizeMode='center'
        />
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
  car: {
    height: 100,
    width: 54,
    right: 0,
    bottom: 45,
    position: 'absolute',
  },
});
