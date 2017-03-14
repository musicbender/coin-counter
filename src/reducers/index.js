import { combineReducers } from 'redux';
import coins from './reducer_coins';
import coinBadge from './reducer_coin-badge';

const rootReducer = combineReducers({
  coins,
  coinBadge,
});

export default rootReducer;
