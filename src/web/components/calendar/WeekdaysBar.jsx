import { Grid, Typography } from "@mui/material";

const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

export const WeekdaysBar = () => {
  return (
    <>
      {days.map((elem, index) => (
        <Grid
          item
          key={index}
          mb={1}
          xs={1}
          sm={1}
          md={1}
          lg={1}
          minHeight={30}
          bgcolor={"yellow"}
          pt={0.3}
          sx={{
            border: "1px solid #080808",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{elem}</Typography>
        </Grid>
      ))}
    </>
  );
};
