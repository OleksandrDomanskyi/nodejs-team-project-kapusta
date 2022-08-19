
import styles from "./user-menu.module.scss";

import useEmail from "../../../shared/hooks/useUserEmail";

const UserMenu = () => {
    const email = useEmail();
    const name = email.split('@')[0];
    return (
        <div className={styles.userInfo}>
            <div className={styles.avatar_name}>{name.charAt(0)}</div>
            <div className={styles.user}>{name}</div>
        </div>
  );
};

export default UserMenu;

