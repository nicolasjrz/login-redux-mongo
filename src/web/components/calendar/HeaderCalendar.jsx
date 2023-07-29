/* eslint-disable react/prop-types */
import { Button, Grid, Typography } from "@mui/material";
import { format } from "date-fns";

export const HeaderCalendar = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <Grid container textAlign={"center"}>
      <Grid item xs>
        <Button onClick={prevMonth}>atras</Button>
      </Grid>
      <Grid item xs>
        <Typography variant="h5">
          {" "}
          {format(currentDate, "LLLL yyyy")}
        </Typography>
      </Grid>
      <Grid item xs>
        <Button onClick={nextMonth}>adelante</Button>
      </Grid>
    </Grid>
  );
};
