const { createSlice } = require('@reduxjs/toolkit');

const reportQuerySlice = createSlice({
  name: 'reportsQuery',
  initialState: {
    reportsQuery: '',
  },
  reducers: {
    reportsQueryAction(state, action) {
      state.reportsQuery = action.payload;
    },
  },
});

export const { reportsQueryAction } = reportQuerySlice.actions;
export const reportsQuerReducer = reportQuerySlice.reducer;
