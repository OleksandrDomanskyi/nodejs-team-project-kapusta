import s from "./bg-wrapper-reports.module.scss";

const BgWrapperReports = ({ children }) => {
  return <div className={s.background}>{children}</div>;
};

export default BgWrapperReports;
