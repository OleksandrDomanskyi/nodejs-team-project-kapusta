import { useState } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useMediaQuery } from "react-responsive";

import iconsSprite from "../../images/icons.svg";
import s from "./balance.module.scss";

import Calendar from "../Calendar";
import BalanceModal from "./BalanceModal";
import BalanceFormModal from "./BalanceFormModal";

const Balance = () => {
  const [balance, setBalance] = useState("1");
  const [startDate, setStartDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const handleDateChange = (date) => setStartDate(date);

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const openModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {modalOpen && <BalanceFormModal closeModal={openModal} />}
      <div className={s.balanceWrapper}>
        {!balance && <BalanceModal />}
        <Link to="/report" className={s.reportsWrapper}>
          <span className={s.reports}>Reports</span>
          <svg
            className={s.iconReport}
            aria-label="reports"
            width="14px"
            height="14px"
          >
            <use href={`${iconsSprite}#icon-reports`}></use>
          </svg>
        </Link>
        <div className={s.formWrapper}>
          <span className={s.balance}>Balanсe:</span>
          <form className={s.form} onSubmit={handleSubmit}>
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
            <button className={s.btn} type="submit">
              Confirm
            </button>
          </form>
          {isMobile && (
            <div className={s.mobileCalend}>
              <Calendar
                startDate={startDate}
                onHandleChange={handleDateChange}
              />
              <button className={s.addBtn} onClick={openModal}>
                Add transaction
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Balance;
