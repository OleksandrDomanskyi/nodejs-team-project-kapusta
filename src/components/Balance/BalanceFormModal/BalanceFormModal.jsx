import { createPortal } from "react-dom";
import s from "./balanceFormModal.module.scss";

import BgWrapper from "../../BgWrapper";
import ExpenseAndIncomeForm from "../../ExpenseAndIncomeForm";

import iconsSprite from "../../../images/icons.svg";

const modal = document.getElementById("modal");

const BalanceFormModal = ({ closeModal }) => {
  return createPortal(
    <div className={s.overlay}>
      <BgWrapper>
        <div className="container">
          <div className={s.btn} onClick={closeModal}>
            <svg className={s.arrow} width="24px" height="24px">
              <use href={`${iconsSprite}#icon-arrow`}></use>
            </svg>
          </div>
          <ExpenseAndIncomeForm />
        </div>
      </BgWrapper>
    </div>,
    modal
  );
};

export default BalanceFormModal;
