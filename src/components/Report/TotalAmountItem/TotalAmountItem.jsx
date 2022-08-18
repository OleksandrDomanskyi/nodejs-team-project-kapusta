import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

import { getReportsTotal } from "../../../redux/reports/reports-selectors";

import styles from "./total-amount-item.module.scss";

const TotalAmountItem = () => {

    const transaction = useSelector(getReportsTotal);

    const expensesMonth = transaction.filter(item => item.type === "expenses");
    let totalExpensesValue = 0;
    expensesMonth.forEach(element => {
        totalExpensesValue -= element.value
    });

    const incomeMonth = transaction.filter(item => item.type === "income");
    let totalIncomeValue = 0;
    incomeMonth.forEach(element => {
        totalIncomeValue += element.value
    });

    return (
        <div className={styles.box}>
            <div className={styles.expenses}>
                <span className={styles.text}>Expenses:</span>
                <span className={styles.expensesNumber}>
                    <NumberFormat
                        value={totalExpensesValue}
                        displayType={"text"}
                        thousandSeparator={" "}
                        suffix={" грн."}
                        decimalSeparator="."
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix={" "}
                    />
                </span>
            </div>
            <div className={styles.income}>
                <span className={styles.text}>Income:</span>
                <span className={styles.incomeNumber}>
                    <NumberFormat
                        value={totalIncomeValue}
                        displayType={"text"}
                        thousandSeparator={" "}
                        suffix={" грн."}
                        decimalSeparator="."
                        decimalScale={2}
                        fixedDecimalScale={true}
                        prefix={"+ "}
                    />
                </span>
            </div>
        </div>
    );
};

export default TotalAmountItem;