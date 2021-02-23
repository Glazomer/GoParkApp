import { createContext } from 'react';
import { Dimensions } from 'react-native';

const getRand = (n: number) => Math.floor(Math.random() * n);
const presets = [
  (now = Date.now()) => ({ start: now, end: now }),
  (now = Date.now(), r = getRand(45e4)) => ({
    start: now + r - (getRand(3) + 1) * 36e5,
    end: now + r,
  }),
  (now = Date.now(), r = getRand(18e5) + 45e4) => ({
    start: now + r - (getRand(3) + 1) * 36e5,
    end: now + r,
  }),
];

export const getCols = () => (Dimensions.get('screen').width > 480 ? 5 : 3);
export const getRows = () => 2;
export type Spots = ReturnType<typeof newSpots>;
export const newSpots = (cols = getCols() * getRows()) =>
  new Array(cols).fill(0).map(() => presets[Math.floor(Math.random() * 3)]());

export type State = {
  selected: null | number;
  spots: Spots;
};

export type Action =
  | { type: 'reset' }
  | { type: 'select'; id: number; hours: number }
  | { type: 'unselect' };
export type Dispatch = React.Dispatch<Action>;
export type UseReducer = [State, Dispatch];

export const initialState = { selected: null, spots: newSpots() };

export function reducer(state: State, action: Action): State {
  const now = Date.now();
  switch (action.type) {
    case 'reset':
      state.selected = null;
      state.spots = newSpots();
      break;
    case 'select':
      if (!state.selected) {
        const { id, hours } = action;
        state.selected = id;
        state.spots[id] = { start: now, end: now + hours * 36e5 };
      } else {
        alert('Unselect booked parking slot to select new one');
      }
      break;
    case 'unselect':
      if (state.selected) {
        state.spots[state.selected] = { start: now, end: now };
        state.selected = null;
      }
      break;
    default:
      throw new Error();
  }
  return { ...state };
}

export const Context = createContext([initialState, () => {}] as UseReducer);
