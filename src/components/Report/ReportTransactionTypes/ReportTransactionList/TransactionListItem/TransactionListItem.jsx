import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";

import { getReportsTotal } from "../../../../../redux/reports/reports-selectors";

import styles from "./transaction-list-item.module.scss";

const TransactionListItem = ({ id, icon, label,setCategoryForChart, active, categoryClick }) => {
    
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
        <li key={id} className={categoryTotalMoney === 0 ? styles.hidden : styles.item} onClick={handleClick}>
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
            <div className={active === id ? styles.boxActive : styles.box}>
                <svg className={active === id ? styles.imageActive : styles.image} id={id} onClick={categoryClick} width="56px" height="56px">
                    <use href={icon}></use>
                </svg>
            </div>
            <p className={styles.text}>{label}</p>
        </li>
    );
};

export default TransactionListItem;