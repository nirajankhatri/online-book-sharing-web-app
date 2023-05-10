import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "./thunks";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    loading: false,
    book: {},
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.book = {};
        state.error = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
        state.error = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.book = {};
        state.error = action.payload;
      });
  },
});

export default booksSlice.reducer;
