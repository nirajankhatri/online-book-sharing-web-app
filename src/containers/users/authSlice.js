import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    logoutSuccess: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export const { loginSuccess, startLoading, hasError, logoutSuccess } =
  authSlice.actions;
export default authSlice.reducer;
