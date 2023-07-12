/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";

export const FillDays = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }).map((index) => (
        <Grid
          item
          key={Math.random()}
          xs={1}
          sm={1}
          md={1}
          lg={1}
          height={50}
          sx={{
            border: "1px solid #080808",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
          }}
          component={"button"}
          disabled={true}
        >
          {index}
        </Grid>
      ))}
    </>
  );
};
