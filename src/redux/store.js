import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/auth.slice';
import { transactionsReduser } from './transactions/transactions.slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { reportsReducer } from './reports/reports.slice';
import { reportsQuerReducer } from './reportsQuery/reportsQuery.slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReduser),
    transactions: transactionsReduser,
    reports: reportsReducer,
    reportsQuery: reportsQuerReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          'your/action/type',
        ],
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),

  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
