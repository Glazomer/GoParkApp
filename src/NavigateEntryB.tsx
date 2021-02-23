import React, { useState, useContext } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Context } from '../src/reducer';

export function NavigateEntryB() {
  const [full, setFull] = useState(false);
  const { width, height } = useWindowDimensions();
  const [{ spots, selected }] = useContext(Context);
  const hours =
    selected !== null ? spots[selected].end - spots[selected].start : 0;
  return (
    <TouchableOpacity style={styles.container} onPress={() => setFull(!full)}>
      <QRCode
        value={JSON.stringify({ price: hours * 300 })}
        size={full ? Math.min(width, height) - 30 : 200}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  qr: { flex: 1 },
});
