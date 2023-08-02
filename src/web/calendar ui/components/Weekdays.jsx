/* eslint-disable react/prop-types */

import { Grid, Typography } from "@mui/material";

export const Weekdays = () => {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  // const days = ["D", "L", "M", "M", "J", "V", "S"];
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
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "black",
              // fontSize: "20px",
              padding: "5px 8px 8px 5px",
              fontWeight: 100,
            }}
          >
            {dayName}
          </Typography>
        </Grid>
      ))}
    </>
  );
};
