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
import { useStepper } from "../../hooks/stepper/useStepper";
import { Componente1 } from "../components/Componente1";
import { Componente2 } from "../components/Componente2";
import { Componente3 } from "../components/Componente3";
import { Calendar } from "../calendar ui/Calendar";

export const HomePage = () => {
  const { fecha, turno, servicio } = useTurnoStore();
  const { next, setNext, activeStep, handleNext, handleBack, handleReset } =
    useStepper();

  const steps = [
    {
      label: "Paso 1",
      content: <Componente1 fecha={fecha} setNext={setNext} />,
    },
    {
      label: "Paso 2",
      content: <Componente2 turno={turno} setNext={setNext} />,
    },
    {
      label: "Paso 3",
      content: <Componente3 servicio={servicio} setNext={setNext} />,
    },
  ];

  console.log({ fecha, turno, servicio });

  return (
    <Stack
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#c7d7f2", padding: 4 }}
    >
      {/* <Box sx={{ width: "100%" }}>
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
              next={next}
            />
          </>
        )}
      </Box> */}

      <Calendar />
    </Stack>
  );
};
