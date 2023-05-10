import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./containers/books/booksSlice";
import addBookReducer from "./containers/books/addBookForm/addBookSlice";
import authReducer from "./containers/users/authSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    addedBook: addBookReducer,
    auth: authReducer,
  },
});
