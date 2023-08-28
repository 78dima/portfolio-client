import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authLogin, checkAuth } from '@/modules/auth/action';
import { AuthLoadingState, AuthState } from '@/modules/auth/contracts/state';
import { AUTH_MODULE_NAME } from '@/modules/auth/index';

const initialState: AuthState = { user: '', token: '', loadingState: AuthLoadingState.NEVER, isAuth: false };
const authReducer = createSlice({
  name: AUTH_MODULE_NAME,
  initialState,
  reducers: {
    setCredentials: (state: AuthState, action: PayloadAction<any>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.token = action.payload.access_token;
        state.user = action.payload.user;
        state.isAuth = true;
        localStorage.setItem('token', action.payload.access_token);
        state.loadingState = AuthLoadingState.LOADED;
      })
      .addCase(authLogin.pending, (state: AuthState) => {
        state.loadingState = AuthLoadingState.LOADING;
      })
      .addCase(authLogin.rejected, (state: AuthState, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loadingState = AuthLoadingState.LOADED;
      })
      .addCase(checkAuth.fulfilled, (state: AuthState, action: PayloadAction<any>) => {
        state.token = action.payload;
        localStorage.setItem('token', action.payload.access_token);
        state.isAuth = true;
        state.loadingState = AuthLoadingState.LOADED;
      })
      .addCase(checkAuth.pending, (state: AuthState) => {
        state.loadingState = AuthLoadingState.LOADING;
      })
      .addCase(checkAuth.rejected, (state: AuthState, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loadingState = AuthLoadingState.LOADED;
      });
  },
});

export default authReducer.reducer;
