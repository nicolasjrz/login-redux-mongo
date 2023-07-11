import { useTurnoStore } from "../../hooks/useTurnoStore";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Stack } from "@mui/material";
import { Componente1 } from "../components/Componente1";
import { Componente2 } from "../components/Componente2";
import { Componente3 } from "../components/Componente3";
import { StepperButtons } from "../components/stepper/StepperButtons";
import { StepperHeader } from "../components/stepper/StepperHeader";
import { StepperReset } from "../components/stepper/StepperReset";

const steps = [
  { label: "Paso 1", content: <Componente1 /> },
  { label: "Paso 2", content: <Componente2 /> },
  { label: "Paso 3", content: <Componente3 /> },
];

export const HomePage = () => {
  const { fecha, turno, usuario, servicio } = useTurnoStore();

  console.log({ fecha, turno, usuario, servicio });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 2;
  // };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Stack
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#c7d7f2", padding: 4 }}
    >
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <StepperReset handleReset={handleReset} />
          </React.Fragment>
        ) : (
          <>
            <StepperHeader content={steps[activeStep].content} />
            <StepperButtons
              steps={steps}
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </>
        )}
      </Box>
    </Stack>
  );
};
