import { COIN_SELECT, INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';
import calculate from '../util/calculate';

const initialState = {
  badge1: 0,
  badge2: 0,
  badge3: 0,
  badge4: 0
}

export default function coinBadge(state = initialState, action) {
  switch (action.type) {
    case INPUT_CALCULATE: {
      const badgeArr = calculate.makeChange(action.input, action.coinSet);
      const badges = {
        badge1: badgeArr[0],
        badge2: badgeArr[1],
        badge3: badgeArr[2],
        badge4: badgeArr[3]
      }

      return { ...state, ...badges };
    }
    default:
      return state;
  }
}
