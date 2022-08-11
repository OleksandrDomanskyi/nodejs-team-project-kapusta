import { useState } from "react";

import BgWrapper from "../../components/BgWrapper";
import Balance from "../../components/Balance";
import ExpenseAndIncomeTable from "../../components/ExpenseAndIncomeTable";
import ExpenseAndIncomeButtons from "../../components/ExpenseAndIncomeButtons";

import s from "./balance-page.module.scss";

const BalancePage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BgWrapper>
      <section className={s.section}>
        <div className="container">
          <Balance />
          <ExpenseAndIncomeTable />
          <ExpenseAndIncomeButtons />
        </div>
      </section>
    </BgWrapper>
  );
};

export default BalancePage;
