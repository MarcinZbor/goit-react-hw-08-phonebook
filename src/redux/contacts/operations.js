import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectContacts, addContact, deleteContact } from '../../api/api';

export const getContactsOperation = createAsyncThunk(
  'contacts/getContacts',

  async (_, thunkAPI) => {
    try {
      const { data } = await selectContacts();
      return data;
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const postContactOperation = createAsyncThunk(
  'contacts/postContact',

  async (contactInfo, thunkAPI) => {
    try {
      const { data } = await addContact(contactInfo);
      return data;
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactOperation = createAsyncThunk(
  'contacts/deleteContact',

  async (id, thunkAPI) => {
    try {
      const { data } = await deleteContact(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
