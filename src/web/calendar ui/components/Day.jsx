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
    <Grid item border={"1px  solid transparent"}>
      <Box className="days-button">
        <ButtonDay
          onClick={() => handleClickDate(date)}
          onBlur={resetSelection}
          disabled={buttonDisabled}
          backgroundColor={
            isCurrentDaySelected
              ? "yellow" ///COLOR YA SELECCIONADO
              : isTodayDate
              ? "blue" ///COLOR DEL DIA DE HOY
              : isPastDay
              ? "#dbdbdb"
              : isClosedDay
              ? "#f2f2f2" /// DIAS QUE NO SE PUEDE SELECCIONAR
              : isDisabledDate
              ? "#ffb3e8" /// DIAS DESABILITADOS
              : isSelectedDay
              ? "yellow" /// DIA CUANDO LO SELECCIONAS
              : "#ffffff"
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
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin: 8px 8px 8px 8px;
  /* border: 1px solid black; */
  border-style: none;
  /* Pasamos la prop backgroundColor para aplicar el color adecuado */
  background-color: ${(props) =>
    props.disabled
      ? props.backgroundColor || "#f2f2f2"
      : props.backgroundColor || "#ffffff"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  /* Estilo de hover amarillo solo cuando el botón no está deshabilitado */
  &:not(:disabled):hover {
    background-color: yellow;
  }
`;
