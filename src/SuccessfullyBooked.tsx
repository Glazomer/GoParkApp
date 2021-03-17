import React, { useState, useContext } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { Context } from '../src/firebase';

export function SuccessfullyBooked() {
  const [full, setFull] = useState(false);
  const { width, height } = useWindowDimensions();
  const { spots, selected } = useContext(Context);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setFull(!full)}>
      <QRCode
        value={
          selected !== undefined
            ? JSON.stringify(spots[selected])
            : 'Not selected!'
        }
        size={full ? Math.min(width, height) - 30 : 200}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  qr: { flex: 1 },
});
