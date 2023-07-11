import { TextField, Typography } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";

import { useDispatch } from "react-redux";
import { onDate } from "../../store/auth/turnoSlice";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ fecha, setNext }) => {
  const dispatch = useDispatch();

  const handleFechaChange = (event) => {
    const fecha = event.target.value;

    // if (fecha === "") return console.log("por favor ingrese una fecha");

    setNext(false);
    dispatch(onDate(fecha));
  };

  return (
    <StepperLayout>
      <Typography>Fecha : {fecha}</Typography>
      <TextField type="date" onChange={handleFechaChange} />
    </StepperLayout>
  );
};
