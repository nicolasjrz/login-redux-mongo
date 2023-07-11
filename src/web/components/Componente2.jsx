/* eslint-disable react/prop-types */
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { StepperLayout } from "../layout/StepperLayout";
import { useDispatch } from "react-redux";
import { onTurno } from "../../store/auth/turnoSlice";
import { useEffect } from "react";

const horarios = [
  { id: 1, label: "12:00 - 13:00" },
  { id: 2, label: "13:00 - 14:00" },
  { id: 3, label: "14:00 - 15:00" },
  // Agrega más horarios según tus necesidades
];

export const Componente2 = ({ turno, setNext }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    turno === "" ? setNext(true) : setNext(false);
  }, [turno, setNext]);

  const handleHorarioChange = (event) => {
    const nuevoTurno = event.target.value;
    dispatch(onTurno(nuevoTurno));
    setNext(false);
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
          />
        ))}
      </RadioGroup>
    </StepperLayout>
  );
};
