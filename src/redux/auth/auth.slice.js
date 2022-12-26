import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { email: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoadingCurrentUser: false,
  isFetchingCurrentUser: false,
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
        console.log(action.payload);
        const { email, id, balance } = action.payload.userData;
        state.user = { email, id, newBalance: balance };
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
      .addCase(refreshUser.pending, (state, action) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isFetchingCurrentUser = false;
        state.user = { email: null, id: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReduser = authSlice.reducer;

export const { addAccessToken } = authSlice.actions;
