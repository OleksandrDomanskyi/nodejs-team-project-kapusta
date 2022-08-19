import TransactionListItem from "./TransactionListItem/TransactionListItem";
import options from "./listData";

import styles from "./report-transaction-list.module.scss";

const ReportTransactionList = () => {
    const expenses = options.expenses;

    const elements = expenses.map((expense) => (
        <TransactionListItem key={expense.id} {...expense} />
    ))

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    );
};

export default ReportTransactionList;