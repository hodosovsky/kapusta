import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut } from './operations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoadingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // login
      .addCase(logIn.fulfilled, (state, action) => {
        const { email, id } = action.payload.userData;
        state.user = { email, id };
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      // logout
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, id: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReduser = authSlice.reducer;
