import TransactionListItem from "./TransactionListItem/TransactionListItem";
import options from "./listData";

import styles from "./report-transaction-list.module.scss";

const ReportTransactionList = ({type}) => {

    const expensesArray = structuredClone(options.expenses);
    const incomeArray = structuredClone(options.income);

    const transactionsType = type === "Expenses" ? expensesArray : incomeArray;

    const elements = transactionsType.map((transactionType) => (
        <TransactionListItem key={transactionType.id} {...transactionType} />
    ))

    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    );
};

export default ReportTransactionList;