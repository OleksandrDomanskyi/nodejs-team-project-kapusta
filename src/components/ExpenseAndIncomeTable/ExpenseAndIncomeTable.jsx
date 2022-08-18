import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { transactions } from "../../redux/transactions/transactions-selectors";
import { fetchAllTransactions } from "../../redux/transactions/transactions-operations";
import NumberFormat from "react-number-format";

import iconsSprite from "../../images/icons.svg";

import s from "./expenseAndIncomeTable.module.scss";

const ExpenseAndIncomeTable = ({ type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
  }, [dispatch]);

  const getTransactions = useSelector(transactions, shallowEqual);

  const filteredTransactions = getTransactions.filter(
    (item) => item.type === type
  );

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
                    value={el.sum}
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
                  <svg
                    className={s.deleteIcon}
                    aria-label="delete"
                    width="18px"
                    height="18px"
                  >
                    <use href={`${iconsSprite}#icon-trash`}></use>
                  </svg>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* {children} */}
    </div>
  );
};

export default ExpenseAndIncomeTable;
