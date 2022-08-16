import React from 'react';
import {Link, useLocation} from 'react-router-dom';



const MainBtn =()=>{
    const location = useLocation()
    return (
      <Link  to={location.state || '/'}>
      <svg >
        <use href={`../../images/arrowBack.svg`}></use>
      </svg>
      <span > Main page</span>
    </Link>
    );
}

export default MainBtn;
