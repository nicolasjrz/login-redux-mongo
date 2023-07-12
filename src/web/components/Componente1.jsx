import { StepperLayout } from "../layout/StepperLayout";
import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ fecha, setNext }) => {
  // const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    fecha === "" ? setNext(true) : setNext(false);
  }, [fecha, setNext]);

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
        onChange={setCurrentDate}
        setNext={setNext}
      />
    </StepperLayout>
  );
};
