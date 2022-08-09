import { Link } from "react-router-dom";

import s from './expenseAndIncomeButtons.module.scss'

const ExpenseAndIncomeButtons = () => {
    return ( <div className={s.linkWrapper}>
        <Link className={s.link} to="/expenses">
          
          Expenses
        </Link>
        <Link className={s.link} to="/incomes">
          Income
        </Link>
      </div> );
}

export default ExpenseAndIncomeButtons;