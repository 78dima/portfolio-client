import { Draft, produce } from 'immer';

import { PostActionUnion } from './actionCreators';
import { PostsActionsType } from './actionTypes';
import { PostsLoadingState, PostState } from './contracts/state';

const initialState: PostState = {
  posts: [],
  loadingState: PostsLoadingState.NEVER,
};
export const postReducer = produce((draft: Draft<PostState>, action: PostActionUnion) => {
  switch (action.type) {
    case PostsActionsType.SET_POSTS:
      draft.posts = action.payload;
      break;
    case PostsActionsType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;
  }
}, initialState);
