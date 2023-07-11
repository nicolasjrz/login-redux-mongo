import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";

export const Componente2 = ({ turno }) => {
  const dispatch = useDispatch();

  const handleTurnoChange = (event) => {
    const fecha = event.target.value;
    dispatch(onTurno(fecha));
  };

  return (
    <StepperLayout>
      <Typography>Componente2 : {turno}</Typography>
      <TextField type="number" onChange={handleTurnoChange} />
    </StepperLayout>
  );
};
