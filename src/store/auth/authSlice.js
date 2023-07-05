import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { status: "checking", user: {}, errorMessage: undefined },
  reducers: {
    // funtionName: (state /*,action */) => {},
    checking: (state /*,action */) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },

    onLogin: (state, payload) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = undefined;
    },
  },
});
export const { checking, onLogin } = authSlice.actions;
