import { createPortal } from "react-dom";
import s from "./balanceModal.module.scss";

const modal = document.getElementById("modal");

const BalanceModal = () => {
  return createPortal(
    <div className={s.modal}>
      <p className={s.text}>
        Hello! To get started, enter the current balance of your account!
      </p>
      <p className={s.subtext}>You can't spend money until you have it :)</p>
    </div>,
    modal
  );
};

export default BalanceModal;
