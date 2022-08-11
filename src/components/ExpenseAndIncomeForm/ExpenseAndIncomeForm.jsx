import { useState } from "react";
import Select from "react-select";

import s from "./exspenseAndIncomeForm.module.scss";

import { options } from "./options";

const ExpenseAndIncomeForm = () => {
  const [descr, setDescr] = useState("");

  const handleChange = (e) => {
    setDescr(e.target.value);
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#C7CCDC" : "#F5F6FB",
      fontWeight: 400,
      borderBottom: "1px solid #eee",
    }),
    control: () => ({
      width: "280px",
      display: "flex",
      justifyContent: "space-between",
      border: "2px solid white",
      borderTop: "none",
      borderBottomLeftRadius: "22px",
      borderBottomRightRadius: "22px",
      padding: "2px 20px",
    }),
    placeholder: () => ({
      color: "#C7CCDC",
    }),
    valueContainer: () => ({
      display: "flex",
      alignItems: "center",
      color: "#C7CCDC",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    singleValue: () => ({
      color: "#52555F",
      fontWeight: 700,
      fontSize: 12,
    }),
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
      <Select
        className={s.select}
        options={options}
        name="category"
        placeholder="Product category"
        styles={customStyles}
        required
      />
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
