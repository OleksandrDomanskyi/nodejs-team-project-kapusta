import s from "./expenseAndIncomeButtons.module.scss";

const ExpenseAndIncomeButtons = ({ isActive, onClick }) => {
  return (
    <div className={s.btnWrapper}>
      <button
        onClick={onClick}
        className={`${isActive === "expenses" ? s.active : s.btn}`}
        data-name="expenses"
      >
        Expenses
      </button>
      <button
        onClick={onClick}
        className={`${isActive !== "expenses" ? s.active : s.btn}`}
        data-name="income"
      >
        Income
      </button>
    </div>
  );
};

export default ExpenseAndIncomeButtons;
