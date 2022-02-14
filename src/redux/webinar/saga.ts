import {callApiCarouselData} from '@api/api';
import {call, CallEffect, delay, put, takeLatest} from 'redux-saga/effects';
import {actions, types} from './state';
import {Action, CarouselData} from './type';

export function* requestCarouselData() {
  try {
    const data: CarouselData[] = yield call(callApiCarouselData);
    yield put(actions.setCarouselData(data));
  } catch (err) {
  } finally {
  }
}
export default function* watcher() {
  yield takeLatest(types.REQUEST_CAROUSEL_DATA, requestCarouselData);
}
