import { POSTS_MODULE_NAME } from '@/modules/posts';

export type AuthState = {
  user: string;
  token: string;
  isAuth: boolean;
  loadingState: AuthLoadingState;
  error?: string;
};

export interface AuthAwareState {
  [POSTS_MODULE_NAME]: AuthState;
}

export enum AuthLoadingState {
  NEVER = 'NEVER',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}
