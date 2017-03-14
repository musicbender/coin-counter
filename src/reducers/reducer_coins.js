import { VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

const initialState = {
  coin1: 25,
  coin2: 10,
  coin3: 5,
  coin4: 1,
};

export default function coins(state = initialState, action) {
  const value = state[action.coin];
  const min = 1;
  const max = 999;

  switch (action.type) {
    case VALUE_INCREMENT: {
      const newValue = value > max ? value : value + 1;
      return { ...state, [action.coin]: newValue };
    }
    case VALUE_DECREMENT: {
      const newValue = value <= min ? value : value - 1;
      return { ...state, [action.coin]: newValue };
    }
    default:
      return state;
  }
}
