import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Data } from '@/modules/myWorks/contracts/state';
import { MY_WORKS_MODULE_NAME } from '@/modules/myWorks/index';

export const myWorksAPI = createApi({
  reducerPath: MY_WORKS_MODULE_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000', mode: 'cors' }),
  endpoints: (build) => ({
    fetchAllWorks: build.query<Data[], null>({
      query: () => ({
        url: '/my-work',
        method: 'GET',
      }),
    }),
  }),
});
