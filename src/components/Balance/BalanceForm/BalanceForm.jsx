import { useState } from "react";
import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";

import { setUserBalance } from "../../../shared/services/auth";

import Calendar from "../../Calendar";

import s from "./balanceForm.module.scss";

const BalanceForm = ({ openModal, setMainBalance }) => {
  const [balance, setBalance] = useState("1");
  const [startDate, setStartDate] = useState(new Date());

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleChange = (e) => {
    setBalance(e.target.value);
    setMainBalance(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMainBalance(e.target.value);

    if (balance) {
      const newBalance = await setUserBalance(
        parseFloat(balance.split(" ").join(""))
      );
      console.log(newBalance);
    }
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
