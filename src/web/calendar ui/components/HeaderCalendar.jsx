/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { ButtonHeader } from "./ButtonHeader";
export const HeaderCalendar = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Grid
        container
        sx={{ backgroundColor: "#4A55A2" }}
        justifyContent="space-between"
        alignItems="center"
        p={2}
        borderRadius={2}
      >
        <Grid item>
          <Typography variant="h5">
            {format(currentDate, "LLLL yyyy")}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <ButtonHeader fn={prevMonth} />
            <ButtonHeader fn={nextMonth} direction="next" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
