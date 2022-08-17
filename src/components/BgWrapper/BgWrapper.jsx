import s from "./bgWrapper.module.scss";

const BgWrapper = ({ children }) => {
  return <div className={s.background}>{children}</div>;
};

export default BgWrapper;
