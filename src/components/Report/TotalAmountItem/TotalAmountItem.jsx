import NumberFormat from "react-number-format";
// import { useSelector } from "react-redux";

// import { getIncomeTotal, getExpenseTotal } from "../../../redux/reports/reports-selectors";

import styles from "./total-amount-item.module.scss";

const TotalAmountItem = () => {

    // const expenseTotal = useSelector(getExpenseTotal);
    // const incomeTotal = useSelector(getIncomeTotal);

    return (
        <div className={styles.box}>
            <div className={styles.expenses}>
                <span className={styles.text}>Expenses:</span>
                <span className={styles.expensesNumber}>
                    <NumberFormat
                        // value={expenseTotal}
                        displayType={'text'}
                        thousandSeparator={' '}
                        suffix={' грн.'}
                        decimalSeparator="."
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix={'- '}
                    />
                </span>
            </div>
            <div className={styles.income}>
                <span className={styles.text}>Income:</span>
                <span className={styles.incomeNumber}>
                    <NumberFormat
                        // value={incomeTotal}
                        displayType={'text'}
                        thousandSeparator={' '}
                        suffix={' грн.'}
                        decimalSeparator="."
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix={'+ '}
                    />
                </span>
            </div>
        </div>
    );
};

export default TotalAmountItem;