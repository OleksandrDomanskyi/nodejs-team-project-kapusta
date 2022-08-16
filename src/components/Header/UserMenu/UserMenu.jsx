import defaultAvatar from "../../../images/defaultAvatar.jpg"
import styles from "./user-menu.module.scss";

import useEmail from "../../../shared/hooks/useUserEmail";

const UserMenu = () => {
    const name = useEmail();
    return (
        <div className={styles.userInfo}>
            <div>
                <img  className={styles.avatar} src={defaultAvatar} alt="avatar" width="32px" height="32px"/>
            </div> 
            <div className={styles.user}>{name}</div>
        </div>
  );
};

export default UserMenu;

