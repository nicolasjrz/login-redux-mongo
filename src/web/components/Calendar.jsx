/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

import {
  FillDays,
  HeaderCalendar,
  MonthDays,
  WeekdaysBar,
} from "../components";
import { useState } from "react";
import { useCalendar } from "../../hooks/useCalendar";

export const Calendar = ({ currentDate = new Date(), onChange, setNext }) => {
  const [cantMonth] = useState(1);

  const { dayInit, dayRestant, allDays, prevMonth, nextMonth } = useCalendar(
    currentDate,
    onChange,
    cantMonth
  );

  return (
    <>
      <Grid>
        <Grid container columns={7} mt={2}>
          <HeaderCalendar
            currentDate={currentDate}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
          />
          <WeekdaysBar />

          <FillDays amount={dayInit} />
          <MonthDays allDays={allDays} setNext={setNext} />
          <FillDays amount={dayRestant} />
        </Grid>
      </Grid>
    </>
  );
};
