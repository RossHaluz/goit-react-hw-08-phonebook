import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://connections-api.herokuapp.com"

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const {data} = await axios.post('/contacts', credentials);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const {data} = await axios.delete(`/contacts/${contactId}`);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
