import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";

import { useDispatch } from "react-redux";
import { onDate } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ fecha, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fecha === "" ? setNext(true) : setNext(false);
  }, [fecha, setNext]);

  const handleFechaChange = (event) => {
    const nuevaFecha = event.target.value;
    dispatch(onDate(nuevaFecha));
    setNext(false);
  };

  return (
    <StepperLayout>
      <Typography>Fecha : {fecha}</Typography>
      <TextField type="date" onChange={handleFechaChange} value={fecha} />
    </StepperLayout>
  );
};
