import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./containers/books/booksSlice";
import addBookReducer from "./containers/books/addBookForm/addBookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    addedBook: addBookReducer,
  },
});
