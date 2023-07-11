/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";

export const Componente2 = ({ turno }) => {
  const dispatch = useDispatch();

  const handleTurnoChange = (event) => {
    const turno = event.target.value;
    dispatch(onTurno(turno));
  };

  return (
    <StepperLayout>
      <Typography>Turno : {turno}</Typography>
      <TextField type="number" onChange={handleTurnoChange} />
    </StepperLayout>
  );
};
