/* eslint-disable react/prop-types */
import { Box, Grid } from "@mui/material";
import { useDateStore } from "../../../hooks/useDateStore";
import { useState } from "react";
import { useDate } from "../../../hooks/calendar/useDate";

import { styled } from "styled-components";

// eslint-disable-next-line no-unused-vars
export const Day = ({ day, month, year, disabledDates = [] }) => {
  const {
    date,
    isTodayDate,
    isClosedDay,
    isPastDay,
    buttonDisabled,
    isDisabledDate,
    isSelectedDay,
  } = useDate(day, month, year, disabledDates);
  const { startSelectDate } = useDateStore();

  const [isCurrentDaySelected, setIsCurrentDaySelected] = useState(false);

  const handleClickDate = (date) => {
    startSelectDate(date);
    setIsCurrentDaySelected(true);
  };

  const resetSelection = () => {
    setIsCurrentDaySelected(false);
  };

  return (
    <Grid
      item
      //border={"1px  solid black"}
      marginBottom={1}
      // bgcolor={"red"}
    >
      <Box>
        <ButtonDay
          onClick={() => handleClickDate(date)}
          onBlur={resetSelection}
          disabled={buttonDisabled}
          bg={
            isCurrentDaySelected
              ? "#a0bfe0" ///COLOR YA SELECCIONADO
              : isTodayDate
              ? "#707acc" ///COLOR DEL DIA DE HOY
              : isPastDay
              ? "#dbdbdb"
              : isClosedDay
              ? "#f2f2f2" /// DIAS QUE NO SE PUEDE SELECCIONAR
              : isDisabledDate
              ? "#ffb3e8" /// DIAS DESABILITADOS
              : isSelectedDay
              ? "#C5DFF8" /// DIA CUANDO LO SELECCIONAS
              : "#f2f2f2"
          }
        >
          {day}
        </ButtonDay>
      </Box>
    </Grid>
  );
};
const ButtonDay = styled.button`
  /* Adapt the colors based on primary prop */

  color: ${(props) => (props.disabled ? "#c0bebe" : "black")};
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin: 8px 8px 8px 8px;

  /* border: 1px solid black; */
  border-style: none;
  /* Pasamos la prop backgroundColor para aplicar el color adecuado */
  background-color: ${(props) =>
    props.disabled ? props.bg || "#f2f2f2" : props.bg || "#ffffff"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  /* Estilo de hover amarillo solo cuando el botón no está deshabilitado */
  &:not(:disabled):hover {
    background-color: #adacaca6;
    /* color: red; */
  }
  /* font-weight: ${(props) => (props.isTodayDate ? "bold" : "normal")}; */
  font-weight: 300;
`;
