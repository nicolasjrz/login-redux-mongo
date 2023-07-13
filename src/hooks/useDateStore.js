import { useDispatch, useSelector } from "react-redux";
import { onChangeDaySelected, setCurrentDate } from "../store/auth/dateSlice";
import { onDate } from "../store/auth/turnoSlice";

export const useDateStore = () => {
  const { currentDate, initialDate, daySelected } = useSelector(
    (state) => state.date
  );

  const dispatch = useDispatch();

  const onChangeDate = (newDate) => {
    dispatch(setCurrentDate(newDate));
  };

  const startSelectDate = (newDate) => {
    dispatch(onChangeDaySelected(newDate));
    dispatch(onDate(newDate));
  };

  return {
    currentDate,
    initialDate,
    daySelected,
    onChangeDate,
    startSelectDate,
  };
};
