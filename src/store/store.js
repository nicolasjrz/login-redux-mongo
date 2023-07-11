import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { turnoSlice } from "./auth/turnoSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    turno: turnoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
