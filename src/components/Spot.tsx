import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

const TimeLeftToColor = (minutesLeft: number) =>
  minutesLeft <= 0 ? 'green' : minutesLeft <= 15 ? 'yellow' : 'red';

const toLocaleTimeString = (time: number) =>
  new Date(time).toLocaleTimeString(navigator.language).replace(/:\d+$/, '');

export type SpotType = TouchableOpacityProps & {
  id: number;
  start: number;
  end: number;
  selected: boolean;
};

export function Spot({ id, start, end, selected, style, ...props }: SpotType) {
  const getColor = () => TimeLeftToColor((end - Date.now()) / 6e4);
  const [color, setColor] = useState<ReturnType<typeof TimeLeftToColor>>(
    getColor()
  );

  useEffect(
    function () {
      setColor(getColor());
      const intId = setInterval(
        () => setColor(TimeLeftToColor((end - Date.now()) / 6e4)),
        1e3
      );
      return () => clearInterval(intId);
    },
    [start, end]
  );

  return (
    <TouchableOpacity
      style={[style, styles.base, styles[color]]}
      disabled={color !== 'green'}
      {...props}>
      <Text>{id + 1}</Text>
      {color !== 'green' && <Text>Start: {toLocaleTimeString(start)}</Text>}
      {color !== 'green' && <Text>End: {toLocaleTimeString(end)}</Text>}
      {selected && <Text style={styles.selected}>BOOKED</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 140,
    padding: 10,
    borderWidth: 2,
    borderColor: '#5B6E9D',
  },
  green: {
    backgroundColor: '#00FF00',
  },
  yellow: {
    backgroundColor: '#FFFF00',
  },
  red: {
    backgroundColor: '#FF0000',
  },
  selected: {
    color: '#0055FF',
  },
});
