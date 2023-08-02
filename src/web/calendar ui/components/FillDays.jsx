import { Box, Grid } from "@mui/material";
import { styled } from "styled-components";

// eslint-disable-next-line react/prop-types
export const FillDays = ({ amount }) => {
  return (
    <>
      {Array.from({ length: amount }, (_, index) => (
        <Grid
          item
          key={index}
          //border={"1px  solid black"}
          marginBottom={1}
        >
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
  /* background-color: red; */
  color: black;
  width: 25px; //35px;
  height: 25px;
  border-radius: 50px;
  /* border: 1px solid black; */
  border-style: none;
`;
