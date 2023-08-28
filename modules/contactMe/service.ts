import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getConfig from '@/config/default';
import { CONTACT_ME_MODULE_NAME } from '@/modules/contactMe/index';

export const contactMeAPI = createApi({
  reducerPath: CONTACT_ME_MODULE_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: getConfig().productionServer, mode: 'cors' }),
  endpoints: (build) => ({
    fetchMessages: build.query({
      query: () => ({
        url: '/contact-me',
        method: 'GET',
      }),
    }),
    sendMessage: build.mutation({
      query: (payload) => ({
        url: '/contact-me',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});
