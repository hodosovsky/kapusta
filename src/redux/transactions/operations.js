import { createAsyncThunk } from '@reduxjs/toolkit';
import { fullUserInfoAPI } from 'services/apiAuth';
import {
  addIncomeAPI,
  getIncomeAPI,
  addExpenseAPI,
  getExpenseAPI,
  updateBalanceAPI,
  deleteTransactionAPI,
} from 'services/apiTransactions';

export const addIncome = createAsyncThunk(
  'transactions/addIncome',
  async (value, thunkAPI) => {
    try {
      const data = await addIncomeAPI(value);
      return data;
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

export const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (value, thunkAPI) => {
    try {
      const data = await addExpenseAPI(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenses = createAsyncThunk(
  'transactions/getExpenses',
  async (_, thunkAPI) => {
    try {
      const data = await getExpenseAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'transactions/updateBalance',
  async (value, thunkAPI) => {
    try {
      const data = await updateBalanceAPI(value);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      const data = await fullUserInfoAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const { newBalance } = await deleteTransactionAPI(id);
      return { newBalance, id };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
