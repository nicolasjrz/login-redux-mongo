/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";

export const Weekdays = () => {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

  return (
    <>
      {days.map((dayName, index) => (
        <Grid
          item
          mb={1}
          xs={1}
          sm={1}
          md={1}
          lg={1}
          key={index}
          // border={"1px solid black"}
          // bgcolor={"red"}
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // className={"seven-space"}
        >
          <Typography className="weeks-text">{dayName}</Typography>
        </Grid>
      ))}
    </>
  );
};
