import { useState } from "react";

import TransactionTypesItem from "./TransactionTypesItem/TransactionTypesItem";
import ReportTransactionList from "./ReportTransactionList/ReportTransactionList";

import styles from "./report-transaction-types.module.scss";

const ReportTransactionTypes = () => {

    const [type, setType] = useState("Expenses");

    return (
        <div className={styles.box}>
            <TransactionTypesItem type={type} setType={setType} />
            <ReportTransactionList type={type} />
        </div>
    );
};

export default ReportTransactionTypes;