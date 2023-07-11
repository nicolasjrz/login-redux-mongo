/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";
import { Componente4 } from "../Componente4";

export const StepperReset = ({ handleReset }) => {
  return (
    <>
      {/* <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - you&apos;re finished
      </Typography> */}
      <Componente4 text={" All steps completed -  finished"} />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleReset}>Reset</Button>
      </Box>
    </>
  );
};
