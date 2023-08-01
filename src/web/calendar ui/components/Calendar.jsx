/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { useState } from "react";
import { Weekdays } from "./Weekdays";
import { MonthDays } from "./MonthDays";

import "../calendar.css";
import { HeaderCalendar } from "./HeaderCalendar";
import { useCalendar } from "../../../hooks/calendar/useCalendar";

export const Calendar = ({ currentDate = new Date(), onChange }) => {
  const [cantMonth] = useState(1);

  const { dayInit, dayRestant, allDays, prevMonth, nextMonth } = useCalendar(
    currentDate,
    onChange,
    cantMonth
  );

  return (
    <>
      <Grid
        container
        p={1}
        sx={{ bgcolor: "#f2f2f2", width: 450 }}
        columns={7}
        borderRadius={2}
      >
        <HeaderCalendar
          currentDate={currentDate}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
        />
        <Weekdays />
        <MonthDays
          dayInit={dayInit}
          allDays={allDays}
          dayRestant={dayRestant}
        />
      </Grid>
    </>
  );
};
