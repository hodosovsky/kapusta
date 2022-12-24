import { TransactionTable } from './TransactionListDesk.styled';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from 'redux/transactions/operations';

export const TransactionListDesk = ({ children }) => {
  const dispatch = useDispatch();
  const color = children[1];
  let minus = '-';

  if (color === 'green') {
    minus = false;
  }

  const handleDelete = event => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  return (
    <TransactionTable className="container">
      <thead>
        <tr>
          <th>DATE</th>
          <th>DESCRIPTION</th>
          <th>CATEGORY</th>
          <th>SUM</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {children[0].map(el => {
          const { _id, description, amount, date, category } = el;
          return (
            <tr key={_id} style={{ height: 40 }}>
              <td>{date}</td>
              <td>{description}</td>
              <td>{category}</td>
              <td style={{ color }}>
                {minus} {amount}.00 UAH.
              </td>
              <td>
                <span id={_id} onClick={handleDelete}>
                  <DeleteIcon />
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};
