import { combineReducers } from 'redux';
import authenticationReducer from './authetication.js';

const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;
