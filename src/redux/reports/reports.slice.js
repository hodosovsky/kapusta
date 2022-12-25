import { createSlice } from '@reduxjs/toolkit';
import { getReports } from './operations';

const initialState = {
  reports: [],
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getReports.pending, handlePending)
      .addCase(getReports.fulfilled, (state, action) => {
        state.reports = action.payload;
        state.isLoading = false;
      })
      .addCase(getReports.rejected, handleRejected);
  },
});

export const reportsReducer = reportsSlice.reducer;
