const { createSlice } = require('@reduxjs/toolkit');

const reportQuerySlice = createSlice({
  name: 'reportsQuery',
  initialState: {
    reportsQuery: '',
    filteredData: [],
  },
  reducers: {
    reportsQueryAction(state, action) {
      state.reportsQuery = action.payload;
    },
    filteredDataAction(state, action) {
      state.filteredData = action.payload;
    },
  },
});

export const { reportsQueryAction, filteredDataAction } =
  reportQuerySlice.actions;
export const reportsQuerReducer = reportQuerySlice.reducer;
