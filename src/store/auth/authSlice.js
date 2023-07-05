import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: { name: "nicolas" },
  reducers: {
    funtionName: (state /*,action */) => {},
  },
});
export const { funtionName } = authSlice.actions;
