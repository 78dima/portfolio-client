import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getConfig from '@/config/default';
import { Posts } from '@/modules/posts/contracts/state';
import { POSTS_MODULE_NAME } from '@/modules/posts/index';

export const postAPI = createApi({
  reducerPath: POSTS_MODULE_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: getConfig().productionServer }),
  endpoints: (build) => ({
    fetchAllPosts: build.query<Posts[], null>({
      query: () => '/about',
    }),
  }),
});
