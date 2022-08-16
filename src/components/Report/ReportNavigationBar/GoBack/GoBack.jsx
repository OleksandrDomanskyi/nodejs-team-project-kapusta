import { Link, useLocation } from 'react-router-dom';

import iconsSprite from "../../../../images/icons.svg";
import styles from "./go-back.module.scss";

const GoBack = () => {

    const location = useLocation()

    return (
        <Link className={styles.link} to={location.state || '/'}>
            <svg className={styles.icon} width="18px" height="12px">
                <use href={`${iconsSprite}#icon-backspace`}></use>
            </svg>
            <span className={styles.text}>Main page</span>
        </Link>
    );
};

export default GoBack;