import NumberFormat from "react-number-format";

import s from './expenseAndIncomeTable.module.scss'

import {data} from './tableData'

const ExpenseAndIncomeTable = () => {
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
    );
}

export default ExpenseAndIncomeTable;