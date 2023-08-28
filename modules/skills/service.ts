import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Data } from '@/modules/skills/contracts/state';
import { SKILLS_MODULE_NAME } from '@/modules/skills/index';

export const skillsAPI = createApi({
  reducerPath: SKILLS_MODULE_NAME,
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000', mode: 'cors' }),
  endpoints: (build) => ({
    fetchAllSkills: build.query<Data[], null>({
      query: () => ({
        url: '/skills',
        method: 'GET',
      }),
    }),
  }),
});
