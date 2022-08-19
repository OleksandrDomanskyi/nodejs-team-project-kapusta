import id from "bson-objectid";
import iconsSprite from "../../../../images/icons.svg";

const listData = {
    expenses: [
        {
            id: id(),
            value: "Products",
            label: "Products",
            icon: `${iconsSprite}#icon-products`
        },
        {
            id: id(),
            value: "Alcohol",
            label: "Alcohol",
            icon: `${iconsSprite}#icon-alcohol`
        },
        {
            id: id(),
            value: "Entertainment",
            label: "Entertainment",
            icon: `${iconsSprite}#icon-entertainment`
        },
        {
            id: id(),
            value: "Health",
            label: "Health",
            icon: `${iconsSprite}#icon-health`
        },
        {
            id: id(), 
            value: "Transport",
            label: "Transport",
            icon: `${iconsSprite}#icon-transport`
        },
        {
            id: id(),
            value: "Housing",
            label: "Housing",
            icon: `${iconsSprite}#icon-housing`
        },
        {
            id: id(),
            value: "Technique",
            label: "Technique",
            icon: `${iconsSprite}#icon-technique`
        },
        {
            id: id(),
            value: "Communal, communication",
            label: "Communal, communication",
            icon: `${iconsSprite}#icon-communal`
        },
        {
            id: id(),
            value: "Sports, hobbies",
            label: "Sports, hobbies",
            icon: `${iconsSprite}#icon-sports`
        },
        {
            id: id(),
            value: "Education",
            label: "Education",
            icon: `${iconsSprite}#icon-education`
        },
        {
            id: id(),
            value: "Other",
            label: "Other",
            icon: `${iconsSprite}#icon-other`
        },
    ],
    income: [
        {
            id: id(),
            value: "Salary",
            label: "Salary",
            icon: `${iconsSprite}#icon-money`
        },
        {
            id: id(),
            value: "Additional income",
            label: "Additional income",
            icon: `${iconsSprite}#icon-extra-money`
        },
    ],
};

export default listData;