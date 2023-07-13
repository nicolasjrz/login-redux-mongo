import { StepperLayout } from "../layout/StepperLayout";
import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";
import { useDateStore } from "../../hooks/useDateStore";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ fecha, setNext }) => {
  // const dispatch = useDispatch();

  const { daySelected, onChangeDate, currentDate } = useDateStore();

  useEffect(() => {
    daySelected === "" ? setNext(true) : setNext(false);
  }, [daySelected, onChangeDate]);

  // const handleFechaChange = (event) => {
  //   const nuevaFecha = event.target.value;
  //   dispatch(onDate(nuevaFecha));
  //   setNext(false);
  // };

  return (
    <StepperLayout>
      {/* <Typography>Fecha : {fecha}</Typography>
      <TextField type="date" onChange={handleFechaChange} value={fecha} /> */}

      <Calendar
        currentDate={currentDate}
        onChange={onChangeDate}
        setNext={setNext}
      />
    </StepperLayout>
  );
};
