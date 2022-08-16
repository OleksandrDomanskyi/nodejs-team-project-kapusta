import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { currentBalance } from "../../redux/auth/auth-selectors";
import { Link } from "react-router-dom";

import iconsSprite from "../../images/icons.svg";
import s from "./balance.module.scss";

import BalanceForm from "./BalanceForm";
import BalanceModal from "./BalanceModal";
import BalanceFormModal from "./BalanceFormModal";

const Balance = ({ type }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const getCurrentBalance = useSelector(currentBalance, shallowEqual);

  const openModal = () => {
    setModalOpen((prev) => !prev);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      {modalOpen && (
        <BalanceFormModal closeModal={openModal} transactionType={type} />
      )}
      <div className={s.balanceWrapper}>
        {!getCurrentBalance && <BalanceModal />}
        <Link to="/reports" className={s.reportsWrapper}>
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
        <BalanceForm openModal={openModal} />
      </div>
    </>
  );
};

export default Balance;
