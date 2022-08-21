import { useState } from "react";

import TransactionListItem from "./TransactionListItem/TransactionListItem";
import options from "./listData";

import styles from "./report-transaction-list.module.scss";

const ReportTransactionList = ({ type, setCategoryForChart }) => {
    
    const [active, setActive] = useState("");

    const categoryClick = (event) => {
    setActive(event.target.id);
    }

    const expensesArray = structuredClone(options.expenses);
    const incomeArray = structuredClone(options.income);

    const transactionsType = type === "Expenses" ? expensesArray : incomeArray;

    const elements = transactionsType.map((transactionType) => (
        <TransactionListItem key={transactionType.id} {...transactionType} setCategoryForChart={setCategoryForChart} categoryClick={categoryClick} active={active} />
    ))

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    );
};

export default ReportTransactionList;