import { createPortal } from "react-dom";
import styles from "./modal.module.scss";
import iconsSprite from "../../images/icons.svg";
import { useEffect } from "react";

const modal = document.getElementById("modal");

export default function Modal({ text, close, onSubmit }) {
    const handleEsc = ({ code }) => {
        if (code === "Escape") {
            close();
        }
    };
    
    useEffect(() => {
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    });
    
  return createPortal(
    <div onClick={() => close()} className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={close} className={styles.close}>
          <svg className={styles.icon}>
            <use xlinkHref={`${iconsSprite}#icon-close`}></use>
          </svg>
        </button>
        <p className={styles.text}>{text}</p>
        <div className={styles.options}>
          <button className={styles.button} onClick={onSubmit}>
            YES
          </button>
          <button className={styles.button} onClick={close}>
            NO
          </button>
        </div>
      </div>
    </div>,
    modal
  );
}
