/* eslint-disable react/prop-types */
import { Grid, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { format } from "date-fns";
export const HeaderCalendar = ({ currentDate, prevMonth, nextMonth }) => {
  return (
    <Grid
      container
      width={450}
      sx={{ backgroundColor: "blue" }}
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Grid item>
        <Typography variant="h5">{format(currentDate, "LLLL yyyy")}</Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" alignItems="center">
          <Grid item padding={1}>
            <Typography
              component="button"
              onClick={prevMonth}
              sx={{
                borderRadius: "50%",
                padding: "8px",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0", // Cambia el color gris claro aquí
                },
              }}
            >
              <KeyboardArrowLeftIcon />
            </Typography>
          </Grid>

          <Grid item padding={1}>
            <Typography
              onClick={nextMonth}
              component="button"
              sx={{
                borderRadius: "50%",
                padding: "8px",
                border: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#f0f0f0", // Cambia el color gris claro aquí
                },
              }}
            >
              <KeyboardArrowRightIcon />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
