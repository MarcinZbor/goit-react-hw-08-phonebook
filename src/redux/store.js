import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlise';
import { filterReducer } from './contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// preloadedState: {
//   contacts: [],
//   filter: '',
// },
