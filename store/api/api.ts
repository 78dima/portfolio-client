import { contactMeAPI } from '@/modules/contactMe/service';
import { myWorksAPI } from '@/modules/myWorks/service';
import { postAPI } from '@/modules/posts/service';
import { skillsAPI } from '@/modules/skills/service';

export const APIQueries = [postAPI.middleware, skillsAPI.middleware, myWorksAPI.middleware, contactMeAPI.middleware];
