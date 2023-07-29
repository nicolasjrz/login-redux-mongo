/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid } from "@mui/material";
import { useDateStore } from "../../../hooks/useDateStore";
import { useDate } from "../../../hooks/calendar/useDate";

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
    <>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        minHeight={50}
        height={50}
        sx={{
          border: "1px solid #080808",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          backgroundColor: isCurrentDaySelected
            ? "orange" ///COLOR YA SELECCIONADO
            : isTodayDate
            ? "#82addc" ///COLOR DEL DIA DE HOY
            : isPastDay
            ? "#dbdbdb"
            : isClosedDay
            ? "#c00000" /// DIAS QUE NO SE PUEDE SELECCIONAR
            : isDisabledDate
            ? "#b3ffb3" /// DIAS DESABILITADOS
            : isSelectedDay
            ? "#9fe855" /// DIA CUANDO LO SELECCIONAS
            : "#ffffff",
          fontWeight: isTodayDate ? "bold" : "normal",
          // Agregar estilos condicionales al pasar el mouse por encima (hover)
          ...(buttonDisabled === false && {
            "&:hover": {
              backgroundColor: "#7fdf1e", // color cuando haces hover
              cursor: "pointer",
            },
          }),
        }}
        onClick={() => handleClickDate(date)}
        onBlur={resetSelection}
        component={"button"}
        disabled={buttonDisabled}
      >
        {day}
      </Grid>
    </>
  );
};
