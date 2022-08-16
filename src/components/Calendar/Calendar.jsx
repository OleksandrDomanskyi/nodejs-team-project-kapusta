import DatePicker from "react-datepicker";

import s from "./calendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";

import iconsSprite from "../../images/icons.svg";

const Calendar = ({ startDate, onHandleChange }) => {
  return (
    <div className={s.calendarWrapper}>
      <svg
        className={s.iconCalend}
        aria-label="calendar"
        width="20px"
        height="20px"
      >
        <use href={`${iconsSprite}#icon-calendar`}></use>
      </svg>
      <div>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          className={s.calendar}
          selected={startDate}
          onChange={onHandleChange}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;
