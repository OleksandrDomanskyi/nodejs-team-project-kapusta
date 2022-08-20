import GoBack from "./GoBack/GoBack";
import ReportBalanceForm from "./ReportBalanceForm/ReportBalanceForm";
import CurrentPeriodItem from "./CurrentPeriodItem/CurrentPeriodItem";

import styles from "./report-navigation-bar.module.scss";

const ReportNavigationBar = () => {

    return (
        <div className={styles.container}>
            <GoBack />
            <CurrentPeriodItem />
            <ReportBalanceForm />
        </div>
    );
};

export default ReportNavigationBar;