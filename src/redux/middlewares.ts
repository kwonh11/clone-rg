import {Middleware} from 'redux';
import {RootState} from './store';

export const logger: Middleware<{}, RootState> = store => next => action => {
  // console.log(store.getState())
  if (__DEV__) {
    console.log('   ' + action?.type);
  }
  next(action);
};
