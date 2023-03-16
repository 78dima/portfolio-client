import { ActionsUnion, createAction } from '../../store/actionHelper/index';
import { PostsActionsType } from './actionTypes';
import { PostsLoadingState } from './contracts/state';

export const PostsPublicAction = {
  getPosts: () => createAction(PostsActionsType.GET_POSTS_REQUEST),
};

export const PostsReducerAction = {
  setPosts: (payload: any) => createAction(PostsActionsType.SET_POSTS, payload),
  setLoadingState: (payload: PostsLoadingState) => createAction(PostsActionsType.SET_LOADING_STATE, payload),
};

export type PostActionUnion = ActionsUnion<typeof PostsReducerAction>;
