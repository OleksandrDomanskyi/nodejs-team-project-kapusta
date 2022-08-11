import { useState } from "react";

import s from "./exspenseAndIncomeForm.module.scss";

const ExpenseAndIncomeForm = () => {
  const [descr, setDescr] = useState("");

  const handleChange = (e) => {
    setDescr(e.target.value);
  };
  return (
    <form className={s.form}>
      <input
        className={s.input}
        value={descr}
        onChange={handleChange}
        name="description"
        placeholder="Product description"
        minLength={1}
        requared="true"
      />
      <select className={s.select} name="category">
        <option value="2121212121">2121212</option>
      </select>
      <input className={s.sum} name="sum" placeholder="00.00UAH" />
      <div className={s.btnWrapper}>
        <button className={s.inputBtn} type="submit">
          INPUT
        </button>
        <button className={s.clearBtn} type="button">
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default ExpenseAndIncomeForm;
