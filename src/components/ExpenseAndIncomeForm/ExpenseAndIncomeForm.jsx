import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { createTransaction } from "../../redux/transactions/transactions-operations";
import { createBalance } from "../../redux/auth/auth-operations";
import { currentBalance } from "../../redux/auth/auth-selectors";
import { useMediaQuery } from "react-responsive";

import Select from "react-select";
import NumberFormat from "react-number-format";

import s from "./exspenseAndIncomeForm.module.scss";

import Calendar from "../Calendar";

import iconsSprite from "../../images/icons.svg";

import { options } from "./options";
import { customStyles } from "./styles";

const ExpenseAndIncomeForm = ({ type, closeModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const handleDateChange = (date) => setStartDate(date);

  const dispatch = useDispatch();
  const balance = useSelector(currentBalance);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const onSubmit = (e) => {
    e.preventDefault();
    const { description, sum, category } = e.target.elements;
    const arrayOfValue = sum.value.split(" ");
    arrayOfValue.pop();
    const normilizedValue = arrayOfValue.join("");
    const transaction = {
      type,
      value: +normilizedValue,
      category: category.value,
      description: description.value,
      date: startDate,
    };
    dispatch(createTransaction(transaction));
    let updatedBalance =
      type === "income"
        ? +balance + +normilizedValue
        : +balance - +normilizedValue;
    dispatch(createBalance(updatedBalance));
    e.target.reset();
    if (isMobile) closeModal();
  };

  const handleResetForm = () => {
    document.getElementById("create-transaction-form").reset();
  };

  const chooseOptions = () =>
    type === "expenses" ? options.expenses : options.income;

  return (
    <form className={s.form} onSubmit={onSubmit} id="create-transaction-form">
      <div className={s.inputsWrapper}>
        <div className={s.calendWrapper}>
          <Calendar startDate={startDate} onHandleChange={handleDateChange} />
        </div>
        <label htmlFor="description">
          <input
            className={s.input}
            // value={descr}
            // onChange={handleChange}
            name="description"
            placeholder="Product description"
            minLength={1}
            requared="true"
          />
        </label>
        <label htmlFor="category" className={s.selectLabel}>
          <Select
            className={s.select}
            options={chooseOptions()}
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
            <use href={`${iconsSprite}#icon-calculator`}></use>
          </svg>
        </label>
      </div>
      <div className={s.btnWrapper}>
        <button className={s.inputBtn} type="submit">
          INPUT
        </button>
        <button onClick={handleResetForm} className={s.clearBtn} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default ExpenseAndIncomeForm;
