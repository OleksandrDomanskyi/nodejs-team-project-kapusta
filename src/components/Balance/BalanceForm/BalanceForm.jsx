import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { currentBalance } from "../../../redux/auth/auth-selectors";
import { createBalance } from "../../../redux/auth/auth-operations";

import s from "./balanceForm.module.scss";

import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";

import Calendar from "../../Calendar";

const BalanceForm = ({ openModal }) => {
  const [balance, setBalance] = useState("");
  const getCurrentBalance = useSelector(currentBalance, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    setBalance(getCurrentBalance);
  }, [getCurrentBalance]);

  const [startDate, setStartDate] = useState(new Date());

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createBalance(parseFloat(balance.split(" ").join(""))));
  };

  const handleDateChange = (date) => setStartDate(date);

  return (
    <div className={s.formWrapper}>
      <span className={s.balance}>Balanсe:</span>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="balance">
          <NumberFormat
            className={s.input}
            name="balance"
            type="text"
            value={balance}
            onChange={handleChange}
            thousandSeparator=" "
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            suffix=" UAH"
            placeholder="00.00 UAH"
            minLength={1}
          />
        </label>
        <button className={s.btn} type="submit">
          Confirm
        </button>
      </form>
      {isMobile && (
        <div className={s.mobileCalend}>
          <button className={s.addBtn} onClick={openModal}>
            Add transaction
          </button>
          <Calendar startDate={startDate} onHandleChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};

export default BalanceForm;
