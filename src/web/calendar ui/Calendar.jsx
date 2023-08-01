import { Fragment } from "react";
import { HeaderCalendar } from "../calendar ui/components/HeaderCalendar";
import { BodyCalendar } from "./components/BodyCalendar";

export const Calendar = () => {
  return (
    <Fragment>
      <HeaderCalendar />
      <BodyCalendar></BodyCalendar>
    </Fragment>
  );
};
