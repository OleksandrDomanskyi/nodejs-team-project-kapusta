import { useState } from "react";

import ReportNavigationBar from "./ReportNavigationBar/ReportNavigationBar";
import TotalAmountItem from "./TotalAmountItem/TotalAmountItem";
import ReportTransactionTypes from "./ReportTransactionTypes/ReportTransactionTypes";
import Graph from "./Chart";

import styles from "./report.module.scss";


const Report = () => {

    
const [categoryForChart, setCategoryForChart] = useState("");

    return (
        <section className={styles.section}>
            <ReportNavigationBar />
            <TotalAmountItem />
            <ReportTransactionTypes setCategoryForChart={setCategoryForChart} />
            {categoryForChart && <Graph category={categoryForChart}/>}
        </section>
    );
};

export default Report;