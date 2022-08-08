import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import BgWrapper from "../../components/BgWrapper";
import Balance from "../../components/Balance";
import Calendar from "../../components/Calendar";
import ExpenseAndIncomeTable from "../../components/ExpenseAndIncomeTable";
import ExpenseAndIncomeButtons from "../../components/ExpenseAndIncomeButtons";

import s from "./balance-page.module.scss";

const BalancePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => setStartDate(date);
  return (
    <>
      <BgWrapper>
        <section className={s.section}>
          <div className="container">
            <Balance />
            <Calendar startDate={startDate} onHandleChange={handleChange} />
            <ExpenseAndIncomeTable />
            <ExpenseAndIncomeButtons />
          </div>
        </section>
      </BgWrapper>
    </>
  );
};

export default BalancePage;
