/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

export const Day = ({ day }) => {
  return (
    <Box
    //   bgcolor={"blue"}
    //marginLeft={0.16}
    // border={"1px solid black"}
    >
      <Box
        p={1}
        // bgcolor={"red"}
        sx={{ margin: 1, textAlign: "center" }}
        className="days"
      >
        <Typography className="days-text">{day}</Typography>
      </Box>
    </Box>
  );
};

// <Box bgcolor={"blue"}>
//       <Box p={1} sx={{ margin: 1, textAlign: "center" }} className="dias">
//         <Typography className="dias-text">{day}</Typography>
//       </Box>
//     </Box>
