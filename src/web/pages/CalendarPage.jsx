import { Calendar } from "../calendar ui/components/Calendar";
import { useDateStore } from "../../hooks/useDateStore";
import { Stack } from "@mui/material";

export const CalendarPage = () => {
  const { daySelected, onChangeDate, currentDate } = useDateStore();
  return (
    <Stack
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#165eda" }}
    >
      <Calendar currentDate={currentDate} onChange={onChangeDate} />
    </Stack>
  );
};
