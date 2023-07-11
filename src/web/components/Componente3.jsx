/* eslint-disable react/prop-types */
import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onService } from "../../store/auth/turnoSlice";

export const Componente3 = ({ servicio, setNext }) => {
  const dispatch = useDispatch();

  const handleServiceChange = (event) => {
    const servicio = event.target.value;
    console.log(servicio);
    // if (servicio === 0) return console.log("por favor ingrese una fecha");

    setNext(false);
    dispatch(onService(servicio));
  };
  return (
    <StepperLayout>
      <Typography>Servicio: {servicio}</Typography>
      <TextField type="number" onChange={handleServiceChange} />
    </StepperLayout>
  );
};
