import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import iconsSprite from "../../images/icons.svg";

import { currentBalance } from "../../redux/auth/auth-selectors";
import { createBalance } from "../../redux/auth/auth-operations";

import s from "../ExpenseAndIncomeTable/expenseAndIncomeTable.module.scss";

import { deleteTransaction } from "../../redux/transactions/transactions-operations";

import Modal from "../Modal/Modal";



const DeleteButton = ({id, value, type}) => {
  const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const balance = useSelector(currentBalance);
    
  const handleDelete = () => {
    dispatch(deleteTransaction(id));
    let updatedBalance =
      type === "income" ? +balance - value : +balance + value;
    dispatch(createBalance(updatedBalance));
  };
  return (
    <>
      {showModal && (
        <Modal
          text="Are tou sure?"
          close={() => {
            setShowModal(false);
          }}
          onSubmit={handleDelete}
        />
      )}

      <div className={s.deleteWrap}>
        <svg
            onClick={() => {
            setShowModal(true);
            }}
          className={s.deleteIcon}
          aria-label="delete"
          width="18px"
          height="18px"
        >
          <use href={`${iconsSprite}#icon-trash`}></use>
        </svg>
      </div>
    </>
  );
};

export default DeleteButton;
