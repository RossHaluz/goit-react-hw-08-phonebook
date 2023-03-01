import { configureStore } from '@reduxjs/toolkit';
import { authReducers } from './auth/slice';

export const store = configureStore({
    reducer: {
        auth: authReducers,
    }
})

