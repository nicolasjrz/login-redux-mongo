/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { FillDays } from "./FillDays";
import { AllDays } from "./AllDays";

export const MonthDays = ({ allDays = [], dayInit, dayRestant }) => {
  return (
    <>
      <Grid
        item
        // border={"1px solid blue"}
        // sx={{ display: "flex" }}
        // mb={2}
        // className="seven-space"
      >
        <Grid
          container
          justifyContent={"space-between"}
          //
          columnGap={0.5}
          columns={7}
        >
          <FillDays amount={dayInit} />

          <AllDays allDays={allDays} />

          <FillDays amount={dayRestant} />
        </Grid>
      </Grid>
    </>
  );
};
