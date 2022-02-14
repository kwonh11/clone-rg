import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {logger} from './middlewares';
import rootReducer from './reducer';
import rootSaga from './saga';

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
