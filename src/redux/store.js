import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    auth: authReduser,
  },
});
