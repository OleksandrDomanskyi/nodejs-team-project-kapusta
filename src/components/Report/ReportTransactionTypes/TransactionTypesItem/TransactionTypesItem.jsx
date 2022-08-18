import iconsSprite from "../../../../images/icons.svg";
import styles from "./transaction-types-item.module.scss";

const TransactionTypesItem = () => {
    return (
        <div className={styles.box}>
            <button className={styles.button} type="button">
                <svg width="4px" height="10px">
                    <use href={`${iconsSprite}#icon-arrow-left`}></use>
                </svg>
            </button>
            <div className={styles.text}>
                <p>Expenses</p>
            </div>
            <button className={styles.button} type="button">
                <svg width="4px" height="10px">
                    <use href={`${iconsSprite}#icon-arrow-right`}></use>
                </svg>
            </button>
        </div>
    );
};

export default TransactionTypesItem;