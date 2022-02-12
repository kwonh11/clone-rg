import {all, fork} from 'redux-saga/effects';
import webinarSaga from './webinar/saga';
export default function* rootSaga() {
  yield all([
    // 사가 입력
    fork(webinarSaga),
  ]);
}
