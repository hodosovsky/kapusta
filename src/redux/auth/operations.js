import { createAsyncThunk } from '@reduxjs/toolkit';
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
    try {
      // const state = thunkAPI.getState();
      // const persistedToken = state.auth.token;
      // console.log(persistedToken);
      // token.set(persistedToken);
      // if (!persistedToken) {
      //   return thunkAPI.rejectWithValue();
      // }
      return await fullUserInfoAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
