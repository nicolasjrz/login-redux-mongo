/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { Fragment, useState } from "react";
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
    <Fragment>
      <HeaderCalendar
        currentDate={currentDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <Grid container p={2} sx={{ bgcolor: "#f2f2f2", width: 450 }}>
        <Weekdays />
        <MonthDays />
      </Grid>
    </Fragment>
  );
};
