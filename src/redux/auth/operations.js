import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerAPI } from 'services/apiAuth';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (user, thunkAPI) => {
    try {
      const data = await registerAPI(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
