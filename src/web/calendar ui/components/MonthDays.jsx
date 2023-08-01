import { Grid } from "@mui/material";

import { FillDays } from "./FillDays";
import { Day } from "./Day";

const days = Array.from({ length: 31 }, (_, index) => index + 1);

export const MonthDays = () => {
  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <FillDays amount={2} />

        {days.map((day, index) => (
          <Grid
            item
            key={index}
            sx={{ width: "calc(100% / 7)" }}
            textAlign={"center"}
          >
            <Day day={day} />
          </Grid>
        ))}

        <FillDays amount={2} />
      </Grid>
    </>
  );
};
