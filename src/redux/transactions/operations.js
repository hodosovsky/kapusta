import { createAsyncThunk } from '@reduxjs/toolkit';
import { addIncomeAPI, getIncomeAPI } from 'services/apiTransactions';

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (value, thunkAPI) => {
    try {
      const { data } = await addIncomeAPI(value);
      console.log('res', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    try {
      const data = await getIncomeAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
