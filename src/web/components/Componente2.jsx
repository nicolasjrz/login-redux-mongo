/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

export const Componente2 = ({ turno, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    turno === "" ? setNext(true) : setNext(false);
  }, [turno, setNext]);

  const handleTurnoChange = (event) => {
    const nuevoTurno = event.target.value;
    dispatch(onTurno(nuevoTurno));
    setNext(false);
  };

  return (
    <StepperLayout>
      <Typography>Turno : {turno}</Typography>
      <TextField type="number" onChange={handleTurnoChange} value={turno} />
    </StepperLayout>
  );
};
