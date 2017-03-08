import { APP_OPEN, APP_CLOSE } from '../constants/index';

export function openApp() {
  return {
    type: APP_OPEN
  }
}

export function closeApp() {
  return {
    type: APP_CLOSE
  }
}
