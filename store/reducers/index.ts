import { POSTS_MODULE_NAME } from '@/modules/posts';
import { postReducer } from '@/modules/posts/reducer';
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  [POSTS_MODULE_NAME]: postReducer
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;