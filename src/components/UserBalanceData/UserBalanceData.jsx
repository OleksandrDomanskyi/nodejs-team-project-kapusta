import { Link } from "react-router-dom";

import s from "./user-balance-data.module.scss";

const UserBalanceData = () => {
  // const isActive = ({ isActive }) =>
  //   isActive ? `${s.link} ${s.active}` : `${s.link}`;

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
              <input className={s.input} type="text" placeholder="00.00 UAH" />
              <button className={s.btn} type="submit">
                Confirm
              </button>
            </form>
            <div className={s.calendar}>calendar</div>
          </div>
          <div className={s.tableWrapper}>
     
          </div>
          <div className={s.linkWrapper}>
            <Link className={s.link} to="/expenses">
              Expenses
            </Link>
            <Link className={s.link} to="/incomes">
              Income
            </Link>
          </div>
        </div>
      </section>
      </div>
      </>
  );
};

export default UserBalanceData;
