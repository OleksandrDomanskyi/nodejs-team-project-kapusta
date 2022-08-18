import React from "react";
import { useSelector } from "react-redux/es/exports";
import { transactions } from "../../redux/transactions/transactions-selectors";
import s from "./summary.module.scss";
import testData from "./testData";
import initialState from "./initialState";

const Summary = ({ type }) => {
  const allTransactions = useSelector(transactions);
  const typedTransactions = allTransactions.filter(
    (item) => item.type === type
  );

  const summaryArray = [...initialState];

  typedTransactions.forEach((transaction) => {
    summaryArray.forEach((month) => {
      if (month.id === transaction.month) {
        month.value += transaction.value;
      }
    });
  });

  console.log("summaryArray", summaryArray);
  console.log("initialState", initialState);

  return (
    <div className={s.summary__wrap}>
      <h4 className={s.summary__title}>SUMMARY</h4>
      <ul className={s.summary__list}>
        {testData.map((item) => (
          <li key={item.monce} className={s.summary__item}>
            <p>{item.monce.toUpperCase()}</p>
            <p>{item.value.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
