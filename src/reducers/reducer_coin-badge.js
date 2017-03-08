import { COIN_SELECT, INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

const initialState = {
  badge1: 0,
  badge2: 0,
  badge3: 0,
  badge4: 0
}

export default function coinCounter(state = initialState, action) {
  switch (action.type) {
    case INPUT_CALCULATE:
      return state;

    default:
      return state;
  }
}
