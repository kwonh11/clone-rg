import {callApiCarouselData, callApiWebinarCardCollectionList} from '@api/api';
import {call, CallEffect, delay, put, takeLatest} from 'redux-saga/effects';
import {actions, types} from './state';
import {Action, CarouselData, WebinarCollection} from './type';

export function* requestWebinarHomeData() {
  try {
    const carouselList: CarouselData[] = yield call(callApiCarouselData);
    yield put(actions.setCarouselData(carouselList));
    const webinarCollectionList: WebinarCollection[] = yield call(
      callApiWebinarCardCollectionList,
    );
    yield put(actions.setWebinarCollectionData(webinarCollectionList));
  } catch (err) {
  } finally {
  }
}
export default function* watcher() {
  yield takeLatest(types.REQUEST_WEBINAR_HOME_DATA, requestWebinarHomeData);
}
