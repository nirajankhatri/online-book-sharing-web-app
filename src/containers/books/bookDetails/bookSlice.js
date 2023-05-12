import { createSlice } from "@reduxjs/toolkit";
import { fetchBookDetails } from "./bookThunks";

const bookSlice = createSlice({
  name: "book",
  initialState: {
    loading: false,
    book: {},
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.loading = true;
        state.book = {};
        state.error = false;
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
        state.error = false;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.loading = false;
        state.book = {};
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
