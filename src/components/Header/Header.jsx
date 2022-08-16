import { useDispatch } from "react-redux";

import logo from "../../images/logo.png"
import logoutImg from "../../images/logout.png"
import UserMenu from "./UserMenu";

import { logout } from "../../redux/auth/auth-operations";

import styles from "./header.module.scss"

const Header = ({isLogin = true}) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout())
  };
  // const isLogin = true;
    return (
        <header >
            <div className={styles.headerContainer}>
              <div className={styles.headerLogo}>
                <img src={logo} alt="logo"/>
            </div> 
              <div className={styles.userBlock}>
                  {isLogin && (
                    <>
                      <UserMenu />
                      <button onClick={() => dispatch(logoutUser)} type="button" className={styles.logoutBtn_mobile}>
                        <img src={logoutImg} alt="logout"/>
                      </button>
                      <button onClick={() => dispatch(logoutUser)} type="button" className={styles.logoutBtn}>Exit</button>
                    </>
                  )}
              </div>
            </div>
        </header>
    );
};

export default Header;