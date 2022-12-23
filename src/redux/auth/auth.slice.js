import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoadingCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addAccessToken: (state, action) => {
      state.token = action.payload;
    },
  },
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
      })
      // refresh user
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
      });
  },
});

export const authReduser = authSlice.reducer;

export const { addAccessToken } = authSlice.actions;
