import DatePicker from "react-datepicker";

import s from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ startDate, onHandleChange }) => {
  return (
    <div className={s.calendarWrapper}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        className={s.calendar}
        selected={startDate}
        onChange={onHandleChange}
        required
      />
    </div>
  );
};

export default Calendar;
