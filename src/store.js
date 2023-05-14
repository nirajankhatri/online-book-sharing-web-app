import { configureStore } from "@reduxjs/toolkit";

import booksReducer from "./containers/books/booksSlice";
import addBookReducer from "./containers/books/addBookForm/addBookSlice";
import authorizationReducer from "./containers/users/authorizationSlice";
import bookDetailsReducer from "./containers/books/bookDetails/bookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    addedBook: addBookReducer,
    authorization: authorizationReducer,
    bookDetails: bookDetailsReducer,
  },
});
