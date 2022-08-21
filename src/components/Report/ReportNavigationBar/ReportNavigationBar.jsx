import GoBack from "./GoBack/GoBack";
import ReportBalanceForm from "./ReportBalanceForm/ReportBalanceForm";
import CurrentPeriodItem from "./CurrentPeriodItem/CurrentPeriodItem";

import styles from "./report-navigation-bar.module.scss";

const ReportNavigationBar = () => {

    return (
        <div className={styles.container}>
            <GoBack />
            <div className={styles.box}>
                <CurrentPeriodItem />
                <ReportBalanceForm />
            </div>
        </div>
    );
};

export default ReportNavigationBar;