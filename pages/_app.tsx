import '@/styles/global.scss';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC } from 'react';
import { Provider } from 'react-redux';

import MainLayout from '@/components/MainLayout/MainLayout';
import { wrapper } from '@/store';

const MyApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <MainLayout>
        <Component {...props.pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default MyApp;
