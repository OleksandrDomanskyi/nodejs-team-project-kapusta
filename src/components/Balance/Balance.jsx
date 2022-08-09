import { useState } from "react";
// import { useSelector, useDispatch, shallowEqual } from "react-redux";
import NumberFormat from "react-number-format";

import s from "./balance.module.scss";

// import {
//   getLoading,
//   getError,
//   getBalance,
// } from "../../redux/balance/balance-selectors";

// import * as operations from "../../redux/balance/balance-operations";

import BalanceModal from "./BalanceModal";

const Balance = () => {
  const [balance, setBalance] = useState("");

  // const id = "62f178d4b3a2e2d1123f868a";

  // const value = useSelector(getBalance, shallowEqual);
  // const loading = useSelector(getLoading, shallowEqual);
  // const error = useSelector(getError, shallowEqual);

  // const dispatch = useDispatch();

  const handleChange = (e) => {
    setBalance(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   dispatch(operations.fetchBalance("62f178d4b3a2e2d1123f868aaaaa"));
  // }, []);

  return (
    <div className={s.balanceWrapper}>
      <div className={s.reportsWrapper}>
        <span className={s.reports}>Reports</span>
      </div>
      <div className={s.formWrapper}>
        <span className={s.balance}>Balanсe:</span>
        <form className={s.form} onSubmit={handleSubmit}>
          <NumberFormat
            className={s.input}
            name="balance"
            type="text"
            value={balance}
            onChange={handleChange}
            thousandSeparator=" "
            decimalSeparator="."
            decimalScale={2}
            fixedDecimalScale={true}
            suffix=" UAH"
            placeholder="00.00 UAH"
            minLength={1}
          />
          <button className={s.btn} type="submit">
            Confirm
          </button>
          {!balance && <BalanceModal />}
        </form>
      </div>
    </div>
  );
};

export default Balance;
