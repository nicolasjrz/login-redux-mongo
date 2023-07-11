/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";

export const Componente2 = ({ turno, setNext }) => {
  const dispatch = useDispatch();

  const handleTurnoChange = (event) => {
    const turno = event.target.value;

    // if (event.target.value === 0)
    //   return console.log("por favor ingrese un turno");

    setNext(false);
    dispatch(onTurno(turno));
  };

  return (
    <StepperLayout>
      <Typography>Turno : {turno}</Typography>
      <TextField type="number" onChange={handleTurnoChange} />
    </StepperLayout>
  );
};
