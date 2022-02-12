import {combineReducers} from 'redux';
import webinar from './webinar/state';

const rootReducer = combineReducers({
  webinar,
});

export default rootReducer;
