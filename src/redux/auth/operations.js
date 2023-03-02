import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const removeAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ""
}

export const register = createAsyncThunk('auth/register', async (credentials, {rejectWithValue}) => {
    try {
    const { data } = await axios.post('/users/signup', credentials);
    setAuthHeader(data.token)
    return data;
    } catch (error) {
        return rejectWithValue(error.messege)
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, {rejectWithValue}) => {
   try {
     const { data } = await axios.post('/users/login', credentials);
    setAuthHeader(data.token)
    return data;
   } catch (error) {
   return rejectWithValue(error.messege)
   }
})

export const logout = createAsyncThunk('auth/logout', async (_, {rejectWithValue}) => {
   try {
       await axios.post('/users/logout')
       removeAuthHeader()
       
   } catch (error) {
    return rejectWithValue(error.messege)
   }
})