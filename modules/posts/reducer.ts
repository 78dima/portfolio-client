import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { POSTS_MODULE_NAME } from '.';
import { getPosts } from './action';
import { Posts, PostsLoadingState, PostState } from './contracts/state';

const initialState: PostState = {
  posts: [],
  loadingState: PostsLoadingState.NEVER,
};
export const postReducer = createSlice({
  name: POSTS_MODULE_NAME,
  initialState,
  reducers: {
    setDataPost: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state: PostState, action: PayloadAction<Posts[], string>) => {
        state.posts = action.payload;
        state.loadingState = PostsLoadingState.LOADED;
      })
      .addCase(getPosts.pending, (state: PostState) => {
        state.loadingState = PostsLoadingState.LOADING;
      })
      .addCase(getPosts.rejected, (state: PostState, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loadingState = PostsLoadingState.LOADED;
      });
  },
});
export const { setDataPost } = postReducer.actions;
export default postReducer.reducer;
