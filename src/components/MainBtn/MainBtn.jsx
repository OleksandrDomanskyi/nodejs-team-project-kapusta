import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import arrowBack from '../../images/arrowBack.svg';
import routes from '../../Routes';

export default function MainBtn (){
    const location = useLocation()
    return (
        <dev>
             {location.pathname === routes.ReportPage && (
          <NavLink exact to={routes.BalancePage}>
            <img src={arrowBack} alt="" />
            <span>Main Page</span>
          </NavLink>
      )}
        </dev>
    );
}