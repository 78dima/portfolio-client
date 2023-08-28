import { combineReducers } from 'redux';

import { AUTH_MODULE_NAME } from '@/modules/auth';
import authReducer from '@/modules/auth/reducer';
import { contactMeAPI } from '@/modules/contactMe/service';
import { myWorksAPI } from '@/modules/myWorks/service';
import { postAPI } from '@/modules/posts/service';
import { skillsAPI } from '@/modules/skills/service';

export const rootReducer = combineReducers({
  [postAPI.reducerPath]: postAPI.reducer,
  [skillsAPI.reducerPath]: skillsAPI.reducer,
  [myWorksAPI.reducerPath]: myWorksAPI.reducer,
  [contactMeAPI.reducerPath]: contactMeAPI.reducer,
  [AUTH_MODULE_NAME]: authReducer,
});
