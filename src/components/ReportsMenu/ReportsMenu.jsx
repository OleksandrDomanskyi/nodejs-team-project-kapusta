import { useSelector } from 'react-redux/es/exports';
import authSelectors from '../../redux/auth/auth-selectors';
import MainBtn from './MainBtn/MainBtn';
import ReportsMonth from './ReportsMonth/ReportsMonth';


const ReportControlPanel = () => {
  const balance = useSelector(authSelectors.getBalance);

  return (
    <div >
      <MainBtn/>
      <div >
        <p >
          Баланс: <span >{balance.toFixed(2)} UAH</span>
        </p>
      </div>
      <ReportsMonth />
    </div>
  );
};

export default ReportControlPanel;