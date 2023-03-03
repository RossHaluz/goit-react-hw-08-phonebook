import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contacts/slice';
import { filterSlice } from './filterSlice/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducers } from './auth/slice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: 'token',
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(persistConfig, authReducers),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
