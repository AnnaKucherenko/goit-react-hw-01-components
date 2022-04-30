import Transaction from './Transaction';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';


function TransactionHistory({ items}) {
  return (
    <table className={style.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
              {items.map(item => (
                  <Transaction
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                    key={item.id}
                  />
              ))}
        </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;


