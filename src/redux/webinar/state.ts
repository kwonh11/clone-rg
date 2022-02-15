import {createReducer} from '../utilis';
import {CarouselData, WebinarState, Action, WebinarCollection} from './type';

export const types = {
  REQUEST_WEBINAR_HOME_DATA: 'webinar/REQUEST_CAROUSEL_DATA',

  SET_CAROUSEL_DATA: 'webinar/SET_CAROUSEL_DATA',
  SET_WEBINAR_COLLECTION_DATA: 'webinar/SET_WEBINAR_COLLECTION_DATA',
};

export const actions = {
  requestWebinarHomeData: () => ({
    type: types.REQUEST_WEBINAR_HOME_DATA,
  }),
  setCarouselData: (payload: CarouselData[]) => ({
    type: types.SET_CAROUSEL_DATA,
    payload,
  }),
  setWebinarCollectionData: (payload: WebinarCollection[]) => ({
    type: types.SET_WEBINAR_COLLECTION_DATA,
    payload,
  }),
};

export const INITIAL_STATE: WebinarState = {
  carouselList: [],
  webinarCollectionList: [],
};

const reducer = createReducer<WebinarState>(INITIAL_STATE, {
  [types.SET_CAROUSEL_DATA]: (
    state: WebinarState,
    action: Action<CarouselData[]>,
  ) => {
    state.carouselList = action.payload;
  },
  [types.SET_WEBINAR_COLLECTION_DATA]: (
    state: WebinarState,
    action: Action<WebinarCollection[]>,
  ) => {
    state.webinarCollectionList = action.payload;
  },
});

export default reducer;
