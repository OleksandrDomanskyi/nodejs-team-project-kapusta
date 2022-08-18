import TransactionTypesItem from "./TransactionTypesItem/TransactionTypesItem";

import styles from "./report-transaction-types.module.scss";

const ReportTransactionTypes = () => {

    return (
        <div className={styles.box}>
            <TransactionTypesItem />
        </div>
    );
};

export default ReportTransactionTypes;