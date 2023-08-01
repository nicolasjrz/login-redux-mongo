import { Box, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export const FillDays = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <Box key={index}>
          <Box
            p={1}
            sx={{
              margin: 1,
              textAlign: "center",
              marginTop: 1,
              marginLeft: 1.3,
            }}
            className="days"
          >
            <Typography className="days-text"></Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};
