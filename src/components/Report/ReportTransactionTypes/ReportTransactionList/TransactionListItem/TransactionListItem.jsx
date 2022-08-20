import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

import { getReportsTotal } from "../../../../../redux/reports/reports-selectors";

import styles from "./transaction-list-item.module.scss";

const TransactionListItem = ({ id, icon, label,setCategoryForChart }) => {

    const transaction = useSelector(getReportsTotal);

    const categoryMoney = transaction.filter(item => item.category === label);
    let categoryTotalMoney = 0;
    categoryMoney.forEach(element => {
        categoryTotalMoney += element.value
    });

    const handleClick=()=>{
        setCategoryForChart(label)
    }

    return (
        <li key={id} className={styles.item} onClick={handleClick}>
            <span className={styles.text}>
                <NumberFormat
                    value={categoryTotalMoney}
                    displayType={"text"}
                    thousandSeparator={" "}
                    decimalSeparator="."
                    decimalScale={2}
                    fixedDecimalScale={true}
                />
            </span>
            <div className={styles.box}>
                <svg className={styles.image} width="56px" height="56px">
                    <use href={icon}></use>
                </svg>
            </div>
            <p className={styles.text}>{label}</p>
        </li>
    );
};

export default TransactionListItem;