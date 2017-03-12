import { COIN_SELECT, INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

export function selectCoin(coin) {
  return {
    type: COIN_SELECT,
    coin
  }
}

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
