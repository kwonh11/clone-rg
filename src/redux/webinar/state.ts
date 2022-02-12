import {createReducer} from '../utilis';

export const types = {
  REQUEST_AD_IMAGE: 'shop/REQEUST_AD_IMAGE',
};

export const actions = {
  //   requestAdImage: (payload: string) => ({
  //     type: types.REQUEST_AD_IMAGE,
  //     payload,
  //   }),
};
export const INITIAL_STATE = {};

const reducer = createReducer(INITIAL_STATE, {
  //   [types.SET_AD_IMAGE]: (state: any, action: any) => {
  //     const {type, image} = action.payload;
  //     state.adImages[type] = image;
  //   },
});

export default reducer;
