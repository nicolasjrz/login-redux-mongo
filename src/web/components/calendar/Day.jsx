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
    isDiaSeleccionado,
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
            ? "green"
            : isTodayDate
            ? "#7c8cf7"
            : isPastDay
            ? "#e0dcdc"
            : isClosedDay
            ? "#f5b5bc"
            : isDisabledDate
            ? "#b3ffb3"
            : isDiaSeleccionado
            ? "green"
            : "#b5cef5",
          fontWeight: isTodayDate ? "bold" : "normal",
          // Agregar estilos condicionales al pasar el mouse por encima (hover)
          ...(buttonDisabled === false && {
            "&:hover": {
              backgroundColor: "blue",
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
