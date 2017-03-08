import { APP_OPEN, APP_CLOSE } from '../constants/index';

const initialState = {
  open: false
}

export default function subApp(state = initialState, action) {
  switch (action.type) {
    case APP_OPEN:
      return {...state, open: true};

    case APP_CLOSE:
      return {...state, open: false};

    default:
      return state;
  }
}
