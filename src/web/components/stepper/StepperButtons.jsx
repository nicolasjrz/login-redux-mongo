/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

export const StepperButtons = ({
  steps = 0,
  activeStep,
  handleBack,
  handleNext,
  next,
}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button>
      <Box sx={{ flex: "1 1 auto" }} />
      <Button onClick={handleNext} disabled={next}>
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </Box>
  );
};
