import produce from 'immer';

interface Action<T> {
  type: string;
  payload: T;
}

export function createReducer<S>(initialState: S, handlerMap: any) {
  return function (state = initialState, action: Action<any>) {
    return produce(state, (draft: any) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
