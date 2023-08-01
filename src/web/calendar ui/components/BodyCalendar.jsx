import { Grid } from "@mui/material";
import { Fragment } from "react";
import { Weekdays } from "./Weekdays";
import { MonthDays } from "./MonthDays";

import "../calendar.css";

export const BodyCalendar = () => {
  return (
    <Fragment>
      <Grid container p={2} sx={{ bgcolor: "#f2f2f2", width: 450 }}>
        <Weekdays />
        <MonthDays />
      </Grid>
    </Fragment>
  );
};
