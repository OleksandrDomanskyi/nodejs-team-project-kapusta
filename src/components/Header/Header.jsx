import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import logo from "../../images/logo.png";
import iconsSprite from "../../images/icons.svg";
import UserMenu from "./UserMenu";

import {isUserLogin} from "../../redux/auth/auth-selectors"

import Modal from "../Modal";

import { logout } from "../../redux/auth/auth-operations";

import styles from "./header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    dispatch(logout())
  };

  const isLogin = useSelector(isUserLogin)

  const [modalOpen, setModalOpen] = useState(false);
  const logoutBtnHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.userBlock}>
          {isLogin && (
            <>
              <UserMenu />
              <button
                onClick={logoutBtnHandler}
                type="button"
                className={styles.logoutBtn_mobile}
              >
                <svg width="24px" height="24px">
                  <use href={`${iconsSprite}#icon-logout`}></use>
                </svg>
              </button>
              <button
                onClick={logoutBtnHandler}
                type="button"
                className={styles.logoutBtn}
              >
                Exit
              </button>
            </>
          )}
        </div>
          {modalOpen && (
            <Modal
              text={"Do you really want to leave?"}
              onSubmit={() => {
                dispatch(logoutUser);
                setModalOpen(false);
              }}
              close={logoutBtnHandler}
            />
          )}
      </div>
    </header>
  );
};

export default Header;
