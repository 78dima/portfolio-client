import { POSTS_MODULE_NAME } from '../index';

export type PostState = {
  posts: Posts[];
  loadingState: PostsLoadingState;
  error?: string;
};

export type Posts = {
  id: number;
  title: string;
  years: string;
  site: string;
  text: string;
  stacking: string[];
};

export interface PostAwareState {
  [POSTS_MODULE_NAME]: PostState;
}

export enum PostsLoadingState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}
