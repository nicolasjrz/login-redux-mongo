/* eslint-disable react/prop-types */
import { Button, Grid } from "@mui/material";
import { format } from "date-fns";

export const HeaderCalendar = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Button onClick={prevMonth}>atras</Button>
      </Grid>
      <Grid item xs>
        {format(currentDate, "LLLL yyyy")}
      </Grid>
      <Grid item xs>
        <Button onClick={nextMonth}>adelante</Button>
      </Grid>
    </Grid>
  );
};
