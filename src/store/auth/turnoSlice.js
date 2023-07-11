import { createSlice } from "@reduxjs/toolkit";

export const turnoSlice = createSlice({
  name: "turno",
  initialState: {
    fecha: "",
    turno: 0,
    usuario: {},
    servicio: 0,
  },
  reducers: {
    onDate: (state, { payload }) => {
      state.fecha = payload;
    },
    onTurno: (state, { payload }) => {
      state.turno = payload;
    },
    onService: (state, { payload }) => {
      state.servicio = payload;
    },
    onUser: (state, { payload }) => {
      state.usuario = payload;
    },
    onClearData: (state /*,action */) => {
      state.fecha = "";
      state.turno = 0;
      state.servicio = 0;
      state.usuario = {};
    },
  },
});
export const { onDate, onTurno, onService, onUser, onClearData } =
  turnoSlice.actions;
