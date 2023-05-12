import { createSlice } from "@reduxjs/toolkit";
import { addBook } from "../booksThunks";

const addBookSlice = createSlice({
  name: "book",
  initialState: {
    loading: false,
    book: {},
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.loading = true;
        state.book = {};
        state.error = false;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
        state.error = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.loading = false;
        state.book = {};
        state.error = action.payload;
      });
  },
});

export default addBookSlice.reducer;
