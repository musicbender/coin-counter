import { INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT, BADGE_CLEAR } from '../constants/index';

export function calculateInput(input, coinSet) {
  return {
    type: INPUT_CALCULATE,
    input,
    coinSet
  }
}

export function incrementValue(coin) {
  return {
    type: VALUE_INCREMENT,
    coin
  }
}

export function decrementValue(coin) {
  return {
    type: VALUE_DECREMENT,
    coin
  }
}

export function clearBadges(coin) {
  return {
    type: BADGE_CLEAR
  }
}
