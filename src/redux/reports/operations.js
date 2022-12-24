import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataAPI } from 'services/apiTransactions';

export const getReports = createAsyncThunk(
  'reports/getReports',
  async (value, thunkAPI) => {
    try {
      return await getPeriodDataAPI(value);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
