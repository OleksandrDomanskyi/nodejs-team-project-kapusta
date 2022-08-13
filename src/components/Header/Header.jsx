// import NavBarMenu from "./NavBarMenu/NavBarMenu";
import logo from "../../images/logo.png"
import logout from "../../images/logout.png"
import UserMenu from "./UserMenu";

import styles from "./header.module.scss"

const Header = () => {
  const isLogin = true;
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
                      <button type="button" className={styles.logoutBtn_mobile}>
                       <img src={logout} alt="logout"/>
                      </button>
                      <button type="button" className={styles.logoutBtn}>Exit</button>
                    </>
                  )}
              </div>
            </div>
            {/* <NavBarMenu /> */}
        </header>
    );
};

export default Header;