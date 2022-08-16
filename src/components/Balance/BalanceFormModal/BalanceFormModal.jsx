import { createPortal } from "react-dom";
import s from "./balanceFormModal.module.scss";

import BgWrapper from "../../BgWrapper";
import ExpenseAndIncomeForm from "../../ExpenseAndIncomeForm";

import iconsSprite from "../../../images/icons.svg";

const modal = document.getElementById("modal");

const BalanceFormModal = ({ transactionType, closeModal }) => {
  return createPortal(
    <div className={s.overlay}>
      <BgWrapper>
        <div className="container">
          <div
            className={s.btn}
            onClick={() => {
              closeModal();
              document.body.style.overflow = "";
            }}
          >
            <svg className={s.arrow} width="24px" height="24px">
              <use href={`${iconsSprite}#icon-arrow-down`}></use>
            </svg>
          </div>
          <ExpenseAndIncomeForm
            closeModal={closeModal}
            type={transactionType}
          />
        </div>
      </BgWrapper>
    </div>,
    modal
  );
};

export default BalanceFormModal;
