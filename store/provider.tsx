'use client';

import { Provider } from 'react-redux';

import { setupStore } from '.';

const store = setupStore();
export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
