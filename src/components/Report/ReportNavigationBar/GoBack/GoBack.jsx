import { Link, useLocation } from 'react-router-dom';

import iconsSprite from "../../../../images/icons.svg";

const GoBack = () => {

    const location = useLocation()

    return (
        <Link  to={location.state || '/'}>
            <svg width="24px" height="24px">
                <use href={`${iconsSprite}#icon-backspace`}></use>
            </svg>
            <span > Main page</span>
        </Link>
    );
};

export default GoBack;