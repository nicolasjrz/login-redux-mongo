import { useDispatch, useSelector } from "react-redux";
import { onChangeDaySelected, setCurrentDate } from "../store/auth/dateSlice";
import { onDate } from "../store/auth/turnoSlice";
import { subDays } from "date-fns";

export const useDateStore = () => {
  const { currentDate, initialDate, daySelected } = useSelector(
    (state) => state.date
  );

  const dispatch = useDispatch();

  const onChangeDate = (newDate) => {
    dispatch(setCurrentDate(newDate));
  };

  const startSelectDate = (newDate) => {
    const fechaOriginal = newDate; // Fecha original
    const fechaRestada = subDays(fechaOriginal, 1);
    dispatch(onChangeDaySelected(newDate));
    dispatch(onDate(fechaRestada));
  };

  return {
    currentDate,
    initialDate,
    daySelected,
    onChangeDate,
    startSelectDate,
  };
};
