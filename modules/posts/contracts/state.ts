import { Immutable } from 'immer';

import { POSTS_MODULE_NAME } from '../index';

export type PostState = Immutable<{
  posts: Posts[];
  loadingState: PostsLoadingState;
}>;

type Posts = {
  title: string;
  content: string;
  image: string;
};

export interface PostAwareState {
  [POSTS_MODULE_NAME]: PostState;
}

export enum PostsLoadingState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}
