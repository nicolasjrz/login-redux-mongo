/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

const horarios = [
  { id: 1, label: "12:00 - 13:00", ocupado: true },
  { id: 2, label: "13:00 - 14:00", ocupado: false },
  { id: 3, label: "14:00 - 15:00", ocupado: false },
  // Agrega más horarios según tus necesidades
];

export const Componente2 = ({ turno, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setNext(!turno); // Si el turno está vacío, se deshabilita el botón "Next"
  }, [turno, setNext]);

  const handleHorarioChange = (event) => {
    const nuevoTurno = event.target.value;
    dispatch(onTurno(nuevoTurno));
    setNext(false); // Se activa el botón "Next" después de seleccionar un turno
  };

  return (
    <StepperLayout>
      {/* <Typography>Turno : {turno}</Typography>
      <TextField type="number" onChange={handleTurnoChange} value={turno} /> */}
      <RadioGroup value={turno} onChange={handleHorarioChange}>
        {horarios.map((horario) => (
          <FormControlLabel
            key={horario.id}
            value={horario.id}
            control={<Radio />}
            label={horario.label}
            disabled={horario.ocupado}
          />
        ))}
      </RadioGroup>
    </StepperLayout>
  );
};
