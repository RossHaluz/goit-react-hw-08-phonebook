import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './operations';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  // isRefreshing: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      }
    }
})

export const authReducers = authSlice.reducer;