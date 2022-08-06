import { NavLink } from 'react-router-dom';

import { items } from './items';

const NavBarMenu = () => {

    const elements = items.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to}>
                {text}
            </NavLink>
        </li>
    ))

    return (
        <nav>
            <ul>
                {elements}
            </ul>
        </nav>
    );
};

export default NavBarMenu;