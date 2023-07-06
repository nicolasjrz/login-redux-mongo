import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { status: "checking", user: {}, errorMessage: undefined },
  reducers: {
    // funtionName: (state /*,action */) => {},
    onChecking: (state /*,action */) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },

    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.user = {};
      state.errorMessage = payload;
    },
    clearErrorMessage: (state /*,action */) => {
      state.errorMessage = undefined;
    },
  },
});

export const { onChecking, onLogin, onLogout, clearErrorMessage } =
  authSlice.actions;
