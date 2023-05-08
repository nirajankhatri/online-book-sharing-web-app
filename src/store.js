import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./containers/books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
