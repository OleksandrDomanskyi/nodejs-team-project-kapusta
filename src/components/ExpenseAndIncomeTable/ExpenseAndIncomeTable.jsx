import NumberFormat from "react-number-format";

import iconsSprite from "../../images/icons.svg";

import s from "./expenseAndIncomeTable.module.scss";

const ExpenseAndIncomeTable = ({ transactions }) => {
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
          {transactions.length > 0 &&
            transactions.map((el) => (
              <tr key={el.id} className={s.line}>
                <td className={s.date}>{el.date}</td>
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
