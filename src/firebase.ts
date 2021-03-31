import { useState, useEffect, createContext } from 'react';
import * as firebase from 'firebase';
import {
  modelName,
  modelId,
  designName,
  productName,
  totalMemory,
  deviceName,
} from 'expo-device';

var config = {
  apiKey:
    'AAAADMLns0Y:APA91bFv3ObKXcP9crbsyRbAE0zw9Tso4p5GYCFNr7iCuOo33LzKU3PiNqu8sQ1kyBdWx8mXNdUYw_6w7xiZg9Ctj-h4sCSp21yol_JITrgBO1o5E1Fh1CRl0XHr5cpOb7jo8bxKUDcZ',
  authDomain: 'goparkapp2021.firebaseapp.com',
  databaseURL: 'https://goparkapp21-default-rtdb.firebaseio.com/',
  storageBucket: 'goparkapp2021.appspot.com',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

// Get a reference to the database service
export const database = firebase.database();

const getRand = (n: number) => Math.floor(Math.random() * n);
const presets = [
  (now = Date.now()) => [now, now],
  (now = Date.now(), r = getRand(45e4)) => [
    now + r - (getRand(3) + 1) * 36e5,
    now + r,
  ],
  (now = Date.now(), r = getRand(18e5) + 45e4) => [
    now + r - (getRand(3) + 1) * 36e5,
    now + r,
  ],
];

export const getCols = () => 3;
export const getRows = () => 3;

export const newSpots = () =>
  new Array(getCols() * getRows()).fill(0).map(() => presets[getRand(3)]());

const dummySpots = new Array(getCols() * getRows()).fill(0).map(() => [0, 0]);
export const dummyState = { selected: undefined, spots: dummySpots };

export type Spots = ReturnType<typeof newSpots>;
export type State = {
  selected?: number;
  spots: Spots;
};

export const uniqueId =
  modelName + modelId + designName + productName + totalMemory + deviceName;

const h = 36e5;
export function selectSpot(id: number, hours: number) {
  const timestamp = Date.now();
  database.ref('spots/' + id).set([timestamp, timestamp + hours * h]);
  database.ref('users/' + uniqueId).set(id);
}

export function unselectSpot(id: number) {
  database.ref('spots/' + id).set([0, 0]);
  database.ref('users/' + uniqueId).remove();
}

export function resetSpots() {
  database.ref('spots').set(newSpots());
  database.ref('users').set({ '0': -1 });
}

export function useFirebase() {
  const [state, setState] = useState<State>(dummyState);
  useEffect(function () {
    database.ref('/').on('value', (a) => {
      const { spots, users } = a.val();
      setState({ spots, selected: users[uniqueId] });
    });
  }, []);
  return state;
}

export const Context = createContext<State>(dummyState);
