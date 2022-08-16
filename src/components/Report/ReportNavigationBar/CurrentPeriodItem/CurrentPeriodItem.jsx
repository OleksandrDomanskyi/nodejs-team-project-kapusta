import iconsSprite from "../../../../images/icons.svg";

const CurrentPeriodItem = () => {

    return (
        <div>
            <p>Current period:</p>
            <div>
                <button type="button">
                    <svg width="4" height="10">
                        <use href={`${iconsSprite}#icon-arrow-left`}></use>
                    </svg>
                </button>
                <p>
                    <span>month</span>
                    <span>year</span>
                </p>
                <button type="button">
                    <svg width="4" height="10">
                        <use href={`${iconsSprite}#icon-arrow-right`}></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default CurrentPeriodItem;