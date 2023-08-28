import { configureStore } from '@reduxjs/toolkit';

import { APIQueries } from '@/store/api/api';

import { rootReducer } from './reducers/index';

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...APIQueries),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
