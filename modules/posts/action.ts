import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import getConfig from '@/config/default';

import { Posts } from './contracts/state';

export const getPosts = createAsyncThunk('post/getPosts', async (_, thunkAPI) => {
  try {
    const response = await axios.get<Posts[]>(`${getConfig().productionServer}/about`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('some error');
  }
});
