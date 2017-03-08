import { COIN_SELECT, INPUT_CALCULATE, VALUE_INCREMENT, VALUE_DECREMENT } from '../constants/index';

export function selectCoin(coin) {
  return {
    type: COIN_SELECT,
    coin
  }
}

export function calculateInput(value) {
  return {
    type: INPUT_CALCULATE,
    value
  }
}

export function incrementValue() {
  return {
    type: VALUE_INCREMENT,
  }
}

export function decrementValue() {
  return {
    type: VALUE_DECREMENT,
  }
}
