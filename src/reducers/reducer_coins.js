import { COIN_SELECT, INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

const initialState = {
  selectedCoin: null,
  coin1: 25,
  coin2: 10,
  coin3: 5,
  coin4: 1
}

export default function coinCounter(state = initialState, action) {
  switch (action.type) {
    case COIN_SELECT:
      return { ...state, selectedCoin: action.coin };

    case VALUE_INCREMENT:
    const newValue = action.coin + 1;
      return { ...state, [action.coin]: newValue };

    case VALUE_DECREMENT:
    const newValue = action.coin - 1;
      return { ...state, [action.coin]: newValue };

    default:
      return state;
  }
}
