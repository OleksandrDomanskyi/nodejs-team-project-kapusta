import DatePicker from "react-datepicker";

import s from './calendar.module.scss'

const Calendar = ({startDate, onHandleChange}) => {
    return ( <>
    <DatePicker
        dateFormat="dd.MM.yyyy"
        className={s.calendar}
        selected={startDate}
        onChange={onHandleChange}
        required
        /></> );
}

export default Calendar;