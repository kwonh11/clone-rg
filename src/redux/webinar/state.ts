import {createReducer} from '../utilis';
import {CarouselData, WebinarState, Action} from './type';

export const types = {
  REQUEST_CAROUSEL_DATA: 'webinar/REQUEST_CAROUSEL_DATA',
  SET_CAROUSEL_DATA: 'webinar/SET_CAROUSEL_DATA',
};

export const actions = {
  requestCarouselData: () => ({
    type: types.REQUEST_CAROUSEL_DATA,
  }),
  setCarouselData: (payload: CarouselData[]) => ({
    type: types.SET_CAROUSEL_DATA,
    payload,
  }),
};

export const INITIAL_STATE: WebinarState = {
  list: [],
};

const reducer = createReducer<WebinarState>(INITIAL_STATE, {
  [types.SET_CAROUSEL_DATA]: (state: any, action: Action<CarouselData>) => {
    state.list = action.payload;
  },
});

export default reducer;
