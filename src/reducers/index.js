import { combineReducers } from 'redux';
import safeReducer from './safeReducer';

export default combineReducers({
    safe: safeReducer,
});
