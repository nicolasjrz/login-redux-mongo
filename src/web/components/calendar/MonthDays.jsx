/* eslint-disable react/prop-types */

import { getDate, getMonth, getYear } from "date-fns";
import { Day } from "./Day";

export const MonthDays = ({ allDays = [],  }) => {
  const disabledDates = [
    new Date(2023, 5, 12),
    new Date(2023, 5, 15),
    new Date(2023, 5, 20),
  ];

  return (
    <>
      {allDays.map((fecha, index) => {
        const day = getDate(fecha);
        const month = getMonth(fecha) + 1;
        const year = getYear(fecha);

        return (
          <Day
            key={index}
            day={day}
            month={month}
            year={year}
            disabledDates={disabledDates}
            
          />
        );
      })}
    </>
  );
};
