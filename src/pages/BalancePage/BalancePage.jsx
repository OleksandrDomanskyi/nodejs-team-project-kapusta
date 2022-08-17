import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { transactions } from "../../redux/transactions/transactions-selectors";

import BgWrapper from "../../components/BgWrapper";
import Balance from "../../components/Balance";
import ExpenseAndIncomeTable from "../../components/ExpenseAndIncomeTable";
import ExpenseAndIncomeButtons from "../../components/ExpenseAndIncomeButtons";
import ExpenseAndIncomeForm from "../../components/ExpenseAndIncomeForm";
import Summary from "../../blocks/Summary";

import cabbegeTablet from "../../images/cabbageTablet.png";
import cabbageDesktop from "../../images/cabbageDesktop.png";

import s from "./balance-page.module.scss";

// говорим стору сделать запрос за транзакциями

const BalancePage = () => {
  const [transactionType, setTransactionType] = useState("income");
  // const dispatch = useDispatch();
  const getTransactions = useSelector(transactions, shallowEqual);

  const filteredTransactions = getTransactions.filter(
    (item) => item.type === transactionType
  );

  const handleClick = (e) => {
    setTransactionType(e.target.dataset.name);
  };
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
              <Balance type={transactionType} />
              <ExpenseAndIncomeTable transactions={filteredTransactions} />
              <ExpenseAndIncomeButtons
                onClick={handleClick}
                isActive={transactionType}
              />
            </>
          )}
          {isTablet && (
            <>
              <Balance type={transactionType} />
              <div className={s.tableWrapper}>
                <ExpenseAndIncomeForm type={transactionType} />
                <ExpenseAndIncomeTable transactions={filteredTransactions} />
                <ExpenseAndIncomeButtons
                  onClick={handleClick}
                  isActive={transactionType}
                />
              </div>
              <Summary />

              <img
                className={s.cabbegeTablet}
                src={cabbegeTablet}
                alt="cabbeges"
              />
            </>
          )}
          {isDesktop && (
            <>
              <Balance type={transactionType} />
              <div className={s.tableWrapper}>
                <ExpenseAndIncomeForm type={transactionType} />
                <div className={s.tableAndSummaryWrapper}>
                  <ExpenseAndIncomeTable transactions={filteredTransactions} />
                  <Summary />
                </div>
                <ExpenseAndIncomeButtons
                  onClick={handleClick}
                  isActive={transactionType}
                />
              </div>
            </>
          )}
        </div>
        {isDesktop && (
          <img
            className={s.cabbegeDesktop}
            src={cabbageDesktop}
            alt="cabbeges"
          />
        )}
      </section>
    </BgWrapper>
  );
};

export default BalancePage;
