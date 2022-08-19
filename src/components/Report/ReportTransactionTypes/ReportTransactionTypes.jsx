import TransactionTypesItem from "./TransactionTypesItem/TransactionTypesItem";
import ReportTransactionList from "./ReportTransactionList/ReportTransactionList";

import styles from "./report-transaction-types.module.scss";

const ReportTransactionTypes = () => {

    return (
        <div className={styles.box}>
            <TransactionTypesItem />
            <ReportTransactionList />
        </div>
    );
};

export default ReportTransactionTypes;