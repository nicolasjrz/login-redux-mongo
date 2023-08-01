import { Box, Grid } from "@mui/material";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export const FillDays = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <Grid item key={index} border={"1px  solid transparent"}>
          <Box
            p={1}
            sx={{
              // margin: 1.05,
              textAlign: "center",
              // marginTop: 1,
            }}
          >
            <FillDay disabled={true} />
          </Box>
        </Grid>
      ))}
    </>
  );
};

const FillDay = styled.button`
  /* Adapt the colors based on primary prop */

  color: black;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  /* border: 1px solid black; */
  border-style: none;
`;
