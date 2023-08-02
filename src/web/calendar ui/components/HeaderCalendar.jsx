/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { ButtonHeader } from "./ButtonHeader";
export const HeaderCalendar = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Grid
        container
        // sx={{ backgroundColor: "#4A55A2" }}
        justifyContent="space-around"
        alignItems="center"
        // p={2}
        // borderRadius={2}
      >
        <Grid item xs={2}>
          <Grid container>
            <ButtonHeader fn={prevMonth} />
          </Grid>
        </Grid>
        <Grid item xs={8} textAlign={"center"}>
          <Typography variant="h6" color={"#585757"}>
            {format(currentDate, "LLLL yyyy")}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Grid container>
            <ButtonHeader fn={nextMonth} direction="next" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
