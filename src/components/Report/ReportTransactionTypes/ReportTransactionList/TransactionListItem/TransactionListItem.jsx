import styles from "./transaction-list-item.module.scss";

const TransactionListItem = ({ icon, value }) => {

    return (
        <li className={styles.item}>
            <p className={styles.text}></p>
            <div className={styles.box}>
                <svg className={styles.image} width="56px" height="56px">
                    <use href={icon}></use>
                </svg>
            </div>
            <p className={styles.text}>{value}</p>
        </li>
    );
};

export default TransactionListItem;