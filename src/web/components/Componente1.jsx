import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";

import { useDispatch } from "react-redux";
import { onDate } from "../../store/auth/turnoSlice";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ fecha }) => {
  const dispatch = useDispatch();

  const handleFechaChange = (event) => {
    const fecha = event.target.value;
    dispatch(onDate(fecha));
  };

  return (
    <StepperLayout>
      <Typography>Fecha : {fecha}</Typography>
      <TextField type="date" onChange={handleFechaChange} />
    </StepperLayout>
  );
};
