import { useMediaQuery } from "react-responsive";

import BgWrapper from "../../components/BgWrapper";
import Balance from "../../components/Balance";
import ExpenseAndIncomeTable from "../../components/ExpenseAndIncomeTable";
import ExpenseAndIncomeButtons from "../../components/ExpenseAndIncomeButtons";
import ExpenseAndIncomeForm from "../../components/ExpenseAndIncomeForm";
import Summary from "../../blocks/Summary";

import s from "./balance-page.module.scss";

const BalancePage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });
  return (
    <BgWrapper>
      <section className={s.section}>
        <div className="container">
          {isMobile && (
            <>
              <Balance />
              <ExpenseAndIncomeTable />
              <ExpenseAndIncomeButtons />
            </>
          )}
          {isTablet && (
            <>
              <Balance />
              <div className={s.tableWrapper}>
                <ExpenseAndIncomeForm />
                <ExpenseAndIncomeTable />
                <ExpenseAndIncomeButtons />
              </div>
              <Summary />
            </>
          )}
          {isDesktop && (
            <>
              <Balance />
              <div className={s.tableWrapper}>
                <ExpenseAndIncomeForm />
                <div className={s.tableAndSummaryWrapper}>
                  <ExpenseAndIncomeTable />
                  <Summary />
                </div>
                <ExpenseAndIncomeButtons />
              </div>
            </>
          )}
        </div>
      </section>
    </BgWrapper>
  );
};

export default BalancePage;
