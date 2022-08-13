import React from "react";
import s from "./summary.module.scss";
import { testData } from "./testData";

const Summary = () => {
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
