import ReportNavigationBar from "./ReportNavigationBar/ReportNavigationBar";
import TotalAmountItem from "./TotalAmountItem/TotalAmountItem";
import ReportTransactionTypes from "./ReportTransactionTypes/ReportTransactionTypes";

import styles from "./report.module.scss";


const Report = () => {

    return (
        <section className={styles.section}>
            <ReportNavigationBar />
            <TotalAmountItem />
            <ReportTransactionTypes />
        </section>
    );
};

export default Report;