/* eslint-disable react/prop-types */

import { StepperLayout } from "../layout/StepperLayout";
import { Typography } from "@mui/material";

export const Componente4 = ({ text }) => {
  return (
    <StepperLayout>
      <Typography>{text}</Typography>
    </StepperLayout>
  );
};
