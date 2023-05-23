import { createSlice } from "@reduxjs/toolkit";
import { signInWithGoogle, signOutFromGoogle } from "../../configs/firebase-config";

const authorizationSlice = createSlice({
  name: "authorization",
  initialState: {
    loading: false,
    user: {},
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = false;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action.payload;
      })
      .addCase(signOutFromGoogle.pending, (state) => {
        state.loading = true;
        state.user = {};
        state.error = false;
      })
      .addCase(signOutFromGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = false;
      })
      .addCase(signOutFromGoogle.rejected, (state, action) => {
        state.loading = false;
        state.user = {};
        state.error = action.payload;
      });
  },
});

export default authorizationSlice.reducer;
