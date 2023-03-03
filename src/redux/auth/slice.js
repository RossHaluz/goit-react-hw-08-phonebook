import { createSlice } from '@reduxjs/toolkit';
import * as authOperation from 'redux/auth/operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isUserLogin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperation.register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isUserLogin = true;
        },
        [authOperation.login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isUserLogin = true;
        },
        [authOperation.logout.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isUserLogin = false;
        },
        [authOperation.getCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isUserLogin = true;
        }
    }
    
})

export const authReducers = authSlice.reducer;