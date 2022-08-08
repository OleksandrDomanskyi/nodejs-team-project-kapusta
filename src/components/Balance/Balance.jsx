import s from './balance.module.scss'

const Balance = () => {
    return ( <div className={s.balanceWrapper}>
        <span className={s.report}>Report</span>
        <span className={s.balance}>Balanсe:</span>
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            placeholder="00.00 UAH"
          />
          <button className={s.btn} type="submit">
            Confirm
          </button>
        </form>
        
      </div> );
}

export default Balance;