import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./calendar.scss";

import iconsSprite from "../../images/icons.svg";

const Calendar = ({ startDate, onHandleChange }) => {
  return (
    <div className="calendarWrapper">
      <svg
        className="iconCalend"
        aria-label="calendar"
        width="20px"
        height="20px"
      >
        <use href={`${iconsSprite}#icon-calendar`}></use>
      </svg>
      <div>
        <DatePicker
          dateFormat="dd.MM.yyyy"
          className="calendar"
          selected={startDate}
          onChange={onHandleChange}
          required
        />
      </div>
    </div>
  );
};

export default Calendar;
