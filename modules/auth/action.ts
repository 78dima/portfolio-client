import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import $api from '@/http';

export const authLogin = createAsyncThunk('auth/login', async (data: { email: string; password: string }, thunkAPI) => {
  try {
    const response = await $api.post('/auth/login', data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('auth error');
  }
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:8000/auth/refresh', {
      withCredentials: true,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data.refresh_token;
  } catch (e) {
    return thunkAPI.rejectWithValue('auth error');
  }
});
