import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { turnoSlice } from "./auth/turnoSlice";
import { dateSlice } from "./auth/dateSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    turno: turnoSlice.reducer,
    date: dateSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
