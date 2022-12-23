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
      return await addIncomeAPI(value);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIncome = createAsyncThunk(
  'transactions/getIncome',
  async (_, thunkAPI) => {
    try {
      return await getIncomeAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExpense = createAsyncThunk(
  'transactions/addExpense',
  async (value, thunkAPI) => {
    try {
      return await addExpenseAPI(value);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getExpenses = createAsyncThunk(
  'transactions/getExpenses',
  async (_, thunkAPI) => {
    try {
      return await getExpenseAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateBalance = createAsyncThunk(
  'transactions/updateBalance',
  async (value, thunkAPI) => {
    try {
      return await updateBalanceAPI(value);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (_, thunkAPI) => {
    try {
      return await fullUserInfoAPI();
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
