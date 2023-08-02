/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const Weekdays = () => {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  // const days = ["D", "L", "M", "M", "J", "V", "S"];
  return (
    <>
      {days.map((dayName, index) => (
        <Grid
          item
          mb={1}
          xs={1}
          sm={1}
          md={1}
          lg={1}
          key={index}
          mt={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DayName>{dayName}</DayName>
        </Grid>
      ))}
    </>
  );
};
const DayName = styled.text`
  color: black;
  font-size: 20px;
  font-weight: 100;
  padding: 5px 8px 8px 5px;
`;
