import { useDispatch, useSelector } from "react-redux";
import {
  onChangeDaySelected,
  setCurrentDate,
  setMesSelecionado,
} from "../store/auth/dateSlice";

export const useDateStore = () => {
  const { currentDate, initialDate, daySelected } = useSelector(
    (state) => state.date
  );

  const dispatch = useDispatch();

  // function formatDate(fechaString) {
  //   const [day, month, year] = fechaString.split("/").map(Number);
  //   const diaSeleccionado = new Date(year, month - 1, day);
  //   return diaSeleccionado;
  // }

  // const onChangeDate = (value) => {
  //   //TODO hacer validaciones despues
  //   // const newDate = formatDate(value);
  //   dispatch(onChangeCurrentDate(value));
  // };

  const onChangeDate = (newDate) => {
    dispatch(setCurrentDate(newDate));
  };

  const startSelectDate = (newDate) => {
    dispatch(onChangeDaySelected(newDate));
  };

  const startChangeCurrrenteDate = (value) => {
    console.log("cambio la wea");
    dispatch(setMesSelecionado(value));
  };

  return {
    currentDate,
    initialDate,
    daySelected,
    onChangeDate,
    startSelectDate,
    startChangeCurrrenteDate,
  };
};
