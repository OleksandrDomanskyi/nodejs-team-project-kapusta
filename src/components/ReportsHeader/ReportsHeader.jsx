// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { balanceSelectors } from '../../redux/balance/balance-selectors.js';
// import balanceOperations from '../../redux/balance/balance-operations';

// function numberWithCommas(x) {
//     return parseFloat(x)
//       .toFixed(2)
//       .toString()
//       .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ' ');
//   }

   //balance logic must be updated 
  const ReportHeader = () => {
    // const dispatch = useDispatch();
    // const currentExpenses = 0;
    // const currentIncomses = 0;
   
    // useEffect(() => {
    //   dispatch(currentExpenses.updateCurrentExpenses());
    //   dispatch(currentIncomses.updateCurrentIncomes());
    // }, [dispatch]);
  
    return (
      <div className="report-header">
        <div >
          <p >
            Expenses:{' '}
            {/* <span >
              - {numberWithCommas(currentExpenses) ?? 0} грн
            </span> */}
          </p>
        </div>
        <div ></div>
        <div >
          <p >
            Incomes:{' '}
            {/* <span >
              + {numberWithCommas(currentIncomses) ?? 0} грн
            </span> */}
          </p>
        </div>
      </div>
    );
  };
  
  export default ReportHeader;