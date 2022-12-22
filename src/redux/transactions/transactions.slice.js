import { createSlice } from '@reduxjs/toolkit';
import { addIncome, getIncome } from './operations';

const initialState = {
  incomes: {},
  expences: {},
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addIncome.fulfilled, (state, action) => {
        console.log(state);
        console.log(action.payload);
      })
      .addCase(getIncome.fulfilled, (state, action) => {
        console.log('here', state);
        console.log('here2', action.payload);
      });
  },
});

export const transactionsReduser = transactionsSlice.reducer;
