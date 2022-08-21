import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { transactions } from "../../redux/transactions/transactions-selectors";
// import { currentBalance } from "../../redux/auth/auth-selectors";
// import { createBalance } from "../../redux/auth/auth-operations";
// import {
//   fetchAllTransactions,
//   deleteTransaction,
// } from "../../redux/transactions/transactions-operations";
import { fetchAllTransactions } from "../../redux/transactions/transactions-operations";
import NumberFormat from "react-number-format";
import DeleteButton from "../DeleteButton";

// import iconsSprite from "../../images/icons.svg";

import s from "./expenseAndIncomeTable.module.scss";

const ExpenseAndIncomeTable = ({ type }) => {
  const dispatch = useDispatch();
  // const balance = useSelector(currentBalance);
  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  const getTransactions = useSelector(transactions, shallowEqual);

  const filteredTransactions = getTransactions.filter(
    (item) => item.type === type
  );

  // const handleDelete = ({ id, value }) => {
  //   dispatch(deleteTransaction(id));
  //   let updatedBalance =
  //     type === "income" ? +balance - value : +balance + value;
  //   dispatch(createBalance(updatedBalance));
  // };

  return (
    <div className={s.tableWrapper}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={`${s.title} ${s.line}`}>
            <th className={s.date}>date</th>
            <th className={s.description}>description</th>
            <th className={s.category}>category</th>
            <th className={s.summa}>sum</th>
            <th className={s.delete}></th>
          </tr>
        </thead>
        <tbody className={s.tbody}>
          {filteredTransactions.length > 0 &&
            filteredTransactions.map((el) => (
              <tr key={el._id} className={s.line}>
                <td className={s.date}>{`${el.day}-${el.month}-${el.year}`}</td>
                <td className={s.description}>
                  <span>{el.description}</span>
                </td>
                <td className={s.category}>
                  <span>{el.category}</span>
                </td>
                <td className={s.sum}>
                  <NumberFormat
                    value={el.value}
                    displayType={"text"}
                    thousandSeparator={" "}
                    suffix={" грн."}
                    // prefix={"-"}
                    type="text"
                    decimalSeparator="."
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                </td>
                <td className={s.delete}>
                  <DeleteButton id={el._id} value={el.value} type />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseAndIncomeTable;
