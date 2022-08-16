

// import PropTypes from "prop-types"

import defaultAvatar from "../../../images/defaultAvatar.jpg"
import styles from "./user-menu.module.scss";

const UserMenu = () => {
    const name = "User Name"
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

// UserMenu.propTypes = {
  
// };