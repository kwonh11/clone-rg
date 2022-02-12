import {
  callApiAdImage,
  callApiInspectCaroomDeal,
  callApiBeforeInspection,
} from '@api/api';
import {select} from '@redux/account/saga';
import {call, delay, put, takeLatest} from 'redux-saga/effects';
import {actions, types} from './state';
import {actions as commonActions} from '@redux/common/state';
import store from '@redux/store';
import {navigate} from '@utils/rootNavigation';
import openGlobalAlert from '@utils/openGlobalAlert';

export function* requestAdImage(action: any) {
  try {
  } catch (err) {
  } finally {
  }
}

export function* requestInspectCaroomDeal(action: any) {
  const dealData = action.payload;
  try {
    const _response = yield call(callApiBeforeInspection);
    if (_response.status === 200) {
      const response = yield call(callApiInspectCaroomDeal, dealData);
      if (response.status === 200) {
        yield openGlobalAlert('카룸딜 신청에 성공했습니다.');
      }
    }
  } catch (err) {
    yield openGlobalAlert(
      err.response.data?.message || '카룸딜 신청에 실패했습니다.',
    );
    yield put(
      commonActions.errorReport(
        `shop requestInspectCaroomDeal ${err.message || err}`,
      ),
    );
  } finally {
    navigate('Root', {screen: 'CaroomDeal'});
  }
}
export function* requestBeforeInspectionCaroomDeal(aciton: any) {
  try {
    const response = yield call(callApiBeforeInspection);
    if (response.status === 200) {
      navigate('BuyCaroomDeal');
    }
  } catch (err) {
    yield openGlobalAlert('이미 심사중인 카룸딜이 있습니다.');
  }
}

export default function* watcher() {
  yield takeLatest(types.REQUEST_AD_IMAGE, requestAdImage);
  yield takeLatest(types.REQUEST_INSPECT_CAROOMDEAL, requestInspectCaroomDeal);
  yield takeLatest(
    types.REQUEST_BEFORE_INSPECTION_CAROOMDEAL,
    requestBeforeInspectionCaroomDeal,
  );
}
