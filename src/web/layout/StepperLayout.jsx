/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

export const StepperLayout = ({ children }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgcolor={"silver"}
      height={480}
      mt={3}
      mb={1}
    >
      <Grid item>{children}</Grid>
    </Grid>
  );
};
