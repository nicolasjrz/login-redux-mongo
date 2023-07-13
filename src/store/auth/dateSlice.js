import { createSlice } from "@reduxjs/toolkit";

//const diaSeleccionado = new Date(2023, 6, 25); // Fecha del día seleccionado

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    // initialDate: new Date(),
    daySelected: "",
    currentDate: new Date(),
    //mesSelecionado: new Date(2023, 7, 25),
    mesSelecionado: new Date(), // Inicialmente nulo
  },

  reducers: {
    // funtionName: (state /*,action */) => {},
    onChangeDaySelected: (state, { payload }) => {
      state.daySelected = payload;
    },
    setCurrentDate: (state, { payload }) => {
      state.currentDate = payload;
    },
    setMesSelecionado: (state, { payload }) => {
      state.mesSelecionado = payload; // Actualiza mesSelecionado con el valor proporcionado
      //state.currentDate = state.mesSelecionado; // Actualiza currentDate con mesSelecionado
    },
  },
});
export const { onChangeDaySelected, setCurrentDate, setMesSelecionado } =
  dateSlice.actions;
