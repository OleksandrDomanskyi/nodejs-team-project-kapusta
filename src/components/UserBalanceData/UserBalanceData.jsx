import { Link } from "react-router-dom";
import { useState } from "react";
import NumberFormat from "react-number-format";

import Calendar from "../Calendar";

import "react-datepicker/dist/react-datepicker.css";
import s from "./user-balance-data.module.scss";

import { data } from "./tableData";

const UserBalanceData = () => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(data);
  const handleChange = (date) => setStartDate(date);
  return (
    <>
      <div className={s.fakeHeader}></div>
      <div className={s.background}>
        <section className={s.section}>
          <div className="container">
            <div className={s.balanceWrapper}>
              <span className={s.report}>Report</span>
              <span className={s.balance}>Balanсe:</span>
              <form className={s.form}>
                <input
                  className={s.input}
                  type="text"
                  placeholder="00.00 UAH"
                />
                <button className={s.btn} type="submit">
                  Confirm
                </button>
              </form>
              <div className={s.calendarWrapper}>
              <Calendar startDate={startDate} onHandleChange={handleChange} />
              </div>
            </div>
          </div>
            <div className={s.tableWrapper}>
              <table className={s.table}>
                <thead className={s.thead}>
                  <tr className={`${s.title} ${s.line}`}>
                    <th className={s.date}>Дата</th>
                    <th className={s.description}>Опис</th>
                    <th className={s.category}>Категорія</th>
                    <th className={s.summa}>Сума</th>
                    <th className={s.delete}></th>
                  </tr>
                </thead>
                <tbody className={s.tbody}>
                  {data.length &&
                    data.map((el) => (
                      <tr key={el.id} className={s.line}>
                        <td className={s.date}>{el.date}</td>
                        <td className={`${s.cell} ${s.description}`}>
                          <span>{el.description}</span>
                        </td>
                        <td className={s.category}>{el.category}</td>
                        <td className={s.sum}>
                          <NumberFormat
                            value={el.sum}
                            displayType={"text"}
                            thousandSeparator={" "}
                            suffix={" грн."}
                            type="text"
                            decimalSeparator="."
                            decimalScale={2}
                            fixedDecimalScale={true}
                          />
                        </td>
                        <td className={s.delete}>
                          <button>X</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className={s.linkWrapper}>
              <Link className={s.link} to="/expenses">
                Expenses
              </Link>
              <Link className={s.link} to="/incomes">
                Income
              </Link>
            </div>
        </section>
      </div>
    </>
  );
};

export default UserBalanceData;
