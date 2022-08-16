import GoBack from "./GoBack/GoBack";
import BalanceForm from "../../Balance/BalanceForm/BalanceForm";
import CurrentPeriodItem from "./CurrentPeriodItem/CurrentPeriodItem";

import styles from "./report-navigation-bar.module.scss";

const ReportNavigationBar = () => {

    return (
        <div className={styles.container}>
            <GoBack />
            <BalanceForm />
            <CurrentPeriodItem />
        </div>
    );
};

export default ReportNavigationBar;