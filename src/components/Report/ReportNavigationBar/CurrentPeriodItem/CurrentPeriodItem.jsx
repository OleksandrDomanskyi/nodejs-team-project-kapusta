import { useDispatch } from "react-redux/es/exports";
import { useState, useEffect } from 'react';

import { getTransactionsPerPeriod } from "../../../../redux/reports/reports-operations";
import { months, dateNow, getMonth } from "./PeriodData";

import iconsSprite from "../../../../images/icons.svg";
import styles from "./current-period-item.module.scss";

const CurrentPeriodItem = () => {

    const dispatch = useDispatch();
    const [month, setMonth] = useState(() => getMonth(dateNow.getMonth()));
    const [year, setYear] = useState(() => dateNow.getFullYear());

    const handleDecrementMonth = () => {
        dateNow.setMonth(dateNow.getMonth() - 1);
        if (month.id === "01") {
            setYear(dateNow.getFullYear());
        }
        return setMonth(getMonth(dateNow.getMonth()));
    };
    const handleIncrementMonth = () => {
        dateNow.setMonth(dateNow.getMonth() + 1);
        if (month.id === "12") {
            setYear(dateNow.getFullYear());
        }
        return setMonth(getMonth(dateNow.getMonth()));
    };

    useEffect(() => {
        const currentMonth = months.filter((item) => item.id === month.id);
        dispatch(
            getTransactionsPerPeriod(
                `${year}-${currentMonth[0].id}`
            )
        );
    }, [dispatch, month, year]);

    return (
        <div className={styles.box}>
            <p className={styles.text}>Current period:</p>
            <div className={styles.option}>
                <button
                    className={styles.button}
                    type="button"
                    onClick={handleDecrementMonth}
                >
                    <svg width="4" height="10">
                        <use href={`${iconsSprite}#icon-arrow-left`}></use>
                    </svg>
                </button>
                <p className={styles.date}>
                    <span>{month.monthTitle}</span>
                    <span className={styles.year}>{year}</span>
                </p>
                <button
                    className={styles.button}
                    type="button"
                    onClick={handleIncrementMonth}
                >
                    <svg width="4px" height="10px">
                        <use href={`${iconsSprite}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CurrentPeriodItem;