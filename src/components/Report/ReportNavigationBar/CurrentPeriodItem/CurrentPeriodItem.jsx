import iconsSprite from "../../../../images/icons.svg";
import styles from "./current-period-item.module.scss";

const CurrentPeriodItem = () => {

    return (
        <div className={styles.box}>
            <p className={styles.text}>Current period:</p>
            <div className={styles.option}>
                <button className={styles.button} type="button">
                    <svg width="4px" height="10px">
                        <use href={`${iconsSprite}#icon-arrow-left`}></use>
                    </svg>
                </button>
                <p className={styles.date}>
                    <span>month</span>
                    <span className={styles.year}>year</span>
                </p>
                <button className={styles.button} type="button">
                    <svg width="4px" height="10px">
                        <use href={`${iconsSprite}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CurrentPeriodItem;