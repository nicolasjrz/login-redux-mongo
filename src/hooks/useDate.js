import {
  isBefore,
  isSameDay,
  isWeekend,
  setDate,
  setMonth,
  setYear,
} from "date-fns";
import { useDateStore } from "./useDateStore";

export const useDate = (day, mes, anio, disabledDates = []) => {
  const { daySelected } = useDateStore();
  const date = setDate(setMonth(setYear(new Date(), anio), mes - 1), day);

  const isTodayDate = isSameDay(date, new Date());
  const isWeekendDate = isWeekend(date);
  const isPastDay = isBefore(date, new Date());
  const isDisabledDate = disabledDates.some((disabledDate) =>
    isSameDay(date, disabledDate)
  );
  const isDiaSeleccionado = daySelected ? isSameDay(date, daySelected) : false;
  const buttonDisabled = isWeekendDate || isPastDay || isDisabledDate;

  return {
    date,
    isTodayDate,
    isWeekendDate,
    isPastDay,
    buttonDisabled,
    isDisabledDate,
    isDiaSeleccionado,
  };
};
