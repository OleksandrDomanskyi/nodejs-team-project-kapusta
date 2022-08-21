import iconsSprite from "../../../../images/icons.svg";
import styles from "./transaction-types-item.module.scss";

const TransactionTypesItem = ({type, setType}) => {

    const handleClick = () => {
        type === "Expenses" ? setType("Income") : setType("Expenses")
    };

    return (
        <div className={styles.box}>
            <button
                className={styles.button}
                type="button"
                onClick={handleClick}
            >
                <svg width="10" height="10">
                    <use href={`${iconsSprite}#icon-arrow-left`}></use>
                </svg>
            </button>
            <div className={styles.text}>
                {type}
            </div>
            <button
                className={styles.button}
                type="button"
                onClick={handleClick}
            >
                <svg width="10" height="10">
                    <use href={`${iconsSprite}#icon-arrow-right`}></use>
                </svg>
            </button>
        </div>
    );
};

export default TransactionTypesItem;