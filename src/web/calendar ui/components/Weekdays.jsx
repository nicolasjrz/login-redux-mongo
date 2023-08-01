/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";

export const Weekdays = () => {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  return (
    <Grid container sx={{ display: "flex" }}>
      {days.map((day, index) => (
        <Grid
          item
          key={index}
          sx={{ textAlign: "center" }}
          className={"seven-space"}
        >
          <Typography className="weeks-text">{day}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};
