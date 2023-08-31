import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import getConfig from '@/config/default';
import { Data } from '@/modules/skills/contracts/state';
import { SKILLS_MODULE_NAME } from '@/modules/skills/index';

export const skillsAPI = createApi({
  reducerPath: SKILLS_MODULE_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: getConfig().productionServer }),
  endpoints: (build) => ({
    fetchAllSkills: build.query<Data[], null>({
      query: () => ({
        url: '/skills',
        method: 'GET',
      }),
    }),
  }),
});
