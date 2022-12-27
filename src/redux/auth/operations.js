import { createAsyncThunk } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';

import {
  loginAPI,
  logoutAPI,
  setAuthHeader,
  clearAuthHeader,
  fullUserInfoAPI,
} from 'services/apiAuth';

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await loginAPI(credentials);
      setAuthHeader(data.accessToken);

      return data;
    } catch (error) {
      if (error.response.status === 403) {
        Report.failure('Email or Password is wrong.');
      }

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await logoutAPI();
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    setAuthHeader(persistedToken);
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('немає токену');
    }
    try {
      const data = await fullUserInfoAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
