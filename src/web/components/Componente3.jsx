/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onService } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

export const Componente3 = ({ servicio, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    servicio === "" ? setNext(true) : setNext(false);
  }, [servicio, setNext]);

  const handleServiceChange = (event) => {
    const nuevoServicio = event.target.value;
    dispatch(onService(nuevoServicio));
    setNext(false);
  };
  return (
    <StepperLayout>
      <Typography>Servicio: {servicio}</Typography>
      <TextField
        type="number"
        onChange={handleServiceChange}
        value={servicio}
      />
    </StepperLayout>
  );
};
