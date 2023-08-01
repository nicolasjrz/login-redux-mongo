import { Box, Grid, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const FillDays = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <Grid
          item
          key={index}
          //border={"1px solid black"}
        >
          <Box
            p={1}
            sx={{
              margin: 1,
              textAlign: "center",
              marginTop: 1,
            }}
            className="days"
          >
            <Typography className="days-text"></Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};
