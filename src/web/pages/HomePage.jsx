import { useTurnoStore } from "../../hooks/useTurnoStore";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Stack } from "@mui/material";
import { StepperButtons } from "../components/stepper/StepperButtons";
import { StepperHeader } from "../components/stepper/StepperHeader";
import { StepperReset } from "../components/stepper/StepperReset";
import { useStepper } from "../../hooks/useStepper";
import { Componente1 } from "../components/Componente1";
import { Componente2 } from "../components/Componente2";
import { Componente3 } from "../components/Componente3";

const steps = [
  { label: "Paso 1", content: <Componente1 /> },
  { label: "Paso 2", content: <Componente2 /> },
  { label: "Paso 3", content: <Componente3 /> },
];

export const HomePage = () => {
  const { fecha, turno, usuario, servicio } = useTurnoStore();

  console.log({ fecha, turno, usuario, servicio });

  const { activeStep, handleNext, handleBack, handleReset } = useStepper();

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
