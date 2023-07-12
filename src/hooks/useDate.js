import {
  format,
  isBefore,
  isSameDay,
  isWeekend,
  setDate,
  setMonth,
  setYear,
} from "date-fns";

import { useTurnoStore } from "./useTurnoStore";

function formatDate(fechaString) {
  const [day, month, year] = fechaString.split("/").map(Number);
  const diaSeleccionado = new Date(year, month - 1, day);
  return diaSeleccionado;
}

export const useDate = (day, mes, anio, disabledDates = []) => {
  //const diaSeleccionado = new Date(2023, 6, 25); // Fecha del día seleccionado
  const { fecha } = useTurnoStore();
  const fechaString = fecha;

  const diaSeleccionado = formatDate(fechaString);

  const date = setDate(setMonth(setYear(new Date(), anio), mes - 1), day);
  const dateFormat = format(date, "dd/MM/yyyy");

  const isTodayDate = isSameDay(date, new Date());
  const isWeekendDate = isWeekend(date);
  const isPastDay = isBefore(date, new Date());
  const isDisabledDate = disabledDates.some((disabledDate) =>
    isSameDay(date, disabledDate)
  );
  const isDiaSeleccionado = isSameDay(date, diaSeleccionado);
  const buttonDisabled = isWeekendDate || isPastDay || isDisabledDate;

  return {
    dateFormat,
    isTodayDate,
    isWeekendDate,
    isPastDay,
    buttonDisabled,
    isDisabledDate,
    isDiaSeleccionado, // Agregamos esta propiedad para identificar si el día es el día seleccionado
  };
};
