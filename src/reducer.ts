const getRand = (n: number) => Math.floor(Math.random() * n);
const now = Date.now();
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

export type Spots = typeof newSpots;
const newSpots = (n: number) =>
  new Array(n).fill(0).map(() => presets[Math.floor(Math.random() * 3)]());

export type State = {
  selected: null | number;
  spots: Spots;
};

export type Types = '';
export type Action = { type: Types };
function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
