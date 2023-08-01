/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";

// eslint-disable-next-line no-unused-vars
export const Day = ({ day, month, year, disabledDates = [] }) => {
  return (
    <Grid
      //   bgcolor={"blue"}
      //marginLeft={0.16}
      // border={"1px solid black"}
      item
      //   border={"1px solid black"}
    >
      <Box
        p={1}
        // bgcolor={"red"}
        sx={{
          margin: 1,
          textAlign: "center",
          "&:hover": {
            backgroundColor: "#b1d1f0", // color cuando haces hover
            cursor: "pointer",
          },
        }}
        className="days"
      >
        <Typography
          // className="days-text"
          color={"black"}
        >
          {day}
        </Typography>
      </Box>
    </Grid>
  );
};

// <Box bgcolor={"blue"}>
//       <Box p={1} sx={{ margin: 1, textAlign: "center" }} className="dias">
//         <Typography className="dias-text">{day}</Typography>
//       </Box>
//     </Box>
