/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { FillDays } from "./FillDays";
import { AllDays } from "./AllDays";

export const MonthDays = ({ allDays = [], dayInit, dayRestant }) => {
  return (
    <>
      <Grid
        item
        // border={"1px solid black"}
        sx={{ display: "flex" }}
        mb={1}
      >
        <Grid container justifyContent={"space-around"}>
          <FillDays amount={dayInit} />

          <AllDays allDays={allDays} />

          <FillDays amount={dayRestant} />
        </Grid>
      </Grid>
    </>
  );
};
