import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPeriodDataAPI } from 'services/apiTransactions';

export const getReports = createAsyncThunk(
  'reports/getReports',
  async (value, thunkAPI) => {
    try {
      const data = await getPeriodDataAPI(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
