import { INPUT_CALCULATE, BADGE_CLEAR } from '../constants/index';
import calculate from '../util/calculate';

const initialState = {
  badge1: 0,
  badge2: 0,
  badge3: 0,
  badge4: 0,
};

export default function coinBadge(state = initialState, action) {
  switch (action.type) {
    case INPUT_CALCULATE: {
      const badgeObj = calculate.makeChange(action.input, action.coinSet);
      const badges = {
        badge1: badgeObj.coin1,
        badge2: badgeObj.coin2,
        badge3: badgeObj.coin3,
        badge4: badgeObj.coin4,
      };

      return { ...state, ...badges };
    }
    case BADGE_CLEAR: {
      const badges = {
        badge1: 0,
        badge2: 0,
        badge3: 0,
        badge4: 0,
      };

      return { ...state, ...badges };
    }
    default:
      return state;
  }
}
