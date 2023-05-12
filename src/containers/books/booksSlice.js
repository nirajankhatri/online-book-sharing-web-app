import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksThunks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    loading: false,
    books: [],
    error: false,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.books = [];
        state.error = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
        state.error = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
