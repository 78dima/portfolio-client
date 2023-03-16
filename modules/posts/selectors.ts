import { createSelector } from 'reselect';

import { PostAwareState, PostsLoadingState, PostState } from './contracts/state';
import { POSTS_MODULE_NAME } from './index';

const postsSelector = (state: PostAwareState): PostState => state[POSTS_MODULE_NAME];
export const postsLoadingStateSelector = (state: PostAwareState): PostsLoadingState =>
  state[POSTS_MODULE_NAME].loadingState;

export const isPostsLoadedSelector = createSelector(
  postsLoadingStateSelector,
  (loadingState: PostsLoadingState): boolean => loadingState === PostsLoadingState.LOADED,
);
