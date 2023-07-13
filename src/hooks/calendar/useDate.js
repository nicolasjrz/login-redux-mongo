import { isBefore, isSameDay, setDate, setMonth, setYear } from "date-fns";
import { useDateStore } from "../useDateStore";

export const useDate = (day, mes, anio, disabledDates = []) => {
  const { daySelected } = useDateStore();
  const date = setDate(setMonth(setYear(new Date(), anio), mes - 1), day);

  const isTodayDate = isSameDay(date, new Date());
  //const isWeekendDate = date.getDay() === 0; // Deshabilita si es domingo (0 representa domingo, 1 representa lunes, etc.)
  //   const closedDays = [0, 1]; // Array que contiene los números de los días a deshabilitar (0 para domingo, 1 para lunes, etc.)
  // const isClosedDay = closedDays.includes(date.getDay()); // Verifica si el número del día de la semana está en el array de días cerrados

  const isClosedDay = date.getDay() === 0 || date.getDay() === 1; // Deshabilita si es domingo o lunes
  const isPastDay = isBefore(date, new Date());
  const isDisabledDate = disabledDates.some((disabledDate) =>
    isSameDay(date, disabledDate)
  );
  const isDiaSeleccionado = daySelected ? isSameDay(date, daySelected) : false;
  const buttonDisabled = isClosedDay || isPastDay || isDisabledDate;

  return {
    date,
    isTodayDate,
    isClosedDay,
    isPastDay,
    buttonDisabled,
    isDisabledDate,
    isDiaSeleccionado,
  };
};
