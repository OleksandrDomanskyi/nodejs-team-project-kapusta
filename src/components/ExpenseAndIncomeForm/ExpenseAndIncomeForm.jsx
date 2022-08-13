import { useState } from "react";
import Select from "react-select";
import NumberFormat from "react-number-format";

import s from "./exspenseAndIncomeForm.module.scss";

import Calendar from "../Calendar";

import iconsSprite from "../../images/icons.svg";

import { options } from "./options";
import { customStyles } from "./styles";

const ExpenseAndIncomeForm = () => {
  const [descr, setDescr] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (e) => {
    setDescr(e.target.value);
  };

  const handleDateChange = (date) => setStartDate(date);

  return (
    <form className={s.form}>
      <div className={s.inputsWrapper}>
        <div className={s.calendWrapper}>
          <Calendar startDate={startDate} onHandleChange={handleDateChange} />
        </div>
        <label htmlFor="description">
          <input
            className={s.input}
            value={descr}
            onChange={handleChange}
            name="description"
            placeholder="Product description"
            minLength={1}
            requared="true"
          />
        </label>
        <label htmlFor="category" className={s.selectLabel}>
          <Select
            className={s.select}
            options={options}
            name="category"
            placeholder="Product category"
            styles={customStyles}
            required
          />
        </label>
        <label htmlFor="sum" className={s.sumLabel}>
          <NumberFormat
            className={s.sum}
            name="sum"
            type="text"
            thousandSeparator=" "
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            suffix=" UAH"
            placeholder="00.00 UAH"
            minLength={1}
          />
          <svg className={s.iconSum} aria-label="calculator">
            <use href={`${iconsSprite}#icon-calc`}></use>
          </svg>
        </label>
      </div>
      <div className={s.btnWrapper}>
        <button className={s.inputBtn} type="submit">
          INPUT
        </button>
        <button className={s.clearBtn} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default ExpenseAndIncomeForm;
