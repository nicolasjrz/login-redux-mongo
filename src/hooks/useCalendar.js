import {
  add,
  endOfMonth,
  startOfMonth,
  sub,
  eachDayOfInterval,
  isBefore,
  isSameMonth,
  isAfter,
} from "date-fns";

export const useCalendar = (currentDate, onChange, cantMonth) => {
  const todayDate = new Date();

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const dayInit = startDate.getDay();
  const dayRestant = 6 - endDate.getDay();
  const allDays = eachDayOfInterval({ start: startDate, end: endDate });

  const prevMonth = () => {
    const newDate = sub(currentDate, { months: 1 });
    const esAnterior = isBefore(todayDate, newDate);
    const esMismoMes = isSameMonth(todayDate, newDate);
    if (esMismoMes) {
      onChange(todayDate);
    } else if (esAnterior) {
      onChange(newDate);
    }
  };

  const nextMonth = () => {
    const newDate = add(currentDate, { months: 1 });

    const maxDate = add(todayDate, { months: cantMonth });

    const esDespuesDelMaximo = isAfter(newDate, maxDate);
    if (esDespuesDelMaximo) return;
    onChange(newDate);
  };

  return {
    dayInit,
    dayRestant,
    allDays,
    prevMonth,
    nextMonth,
  };
};
