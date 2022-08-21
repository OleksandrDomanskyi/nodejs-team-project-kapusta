import { SpinnerCircular } from "spinners-react";
// import PropTypes from "prop-types";

import styles from "./loader.module.scss";

const Loader = ({ isEnabled }) => {
  return (
    <div className={styles.Loader}>
      <SpinnerCircular
        enabled={isEnabled}
        size={50}
        thickness={100}
        speed={100}
        color="#ff8000"
        secondaryColor="#F2F5FC"
      />
    </div>
  );
};

export default Loader;

// Loader.propTypes = {
//   isEnabled: PropTypes.bool.isRequired,
// };