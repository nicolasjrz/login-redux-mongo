import { StepperLayout } from "../layout/StepperLayout";
import { useEffect } from "react";
// import { Calendar } from "./Calendar";
import { useDateStore } from "../../hooks/useDateStore";
import { Calendar } from "../calendar ui/components/Calendar";

// eslint-disable-next-line react/prop-types
export const Componente1 = ({ setNext }) => {
  const { daySelected, onChangeDate, currentDate } = useDateStore();

  useEffect(() => {
    daySelected === "" ? setNext(true) : setNext(false);
  }, [daySelected, setNext]);

  return (
    <StepperLayout>
      <Calendar currentDate={currentDate} onChange={onChangeDate} />
    </StepperLayout>
  );
};
