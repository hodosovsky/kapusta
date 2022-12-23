import { TransactionTable } from './TransactionListDesk.styled';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
export const TransactionListDesk = () => {
  const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
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
        {arr.map(el => (
          <tr key={Math.random() * 100}>
            <td>02.03.22</td>
            <td>
              Bananas Bananas Bananas Bananas Bananas Bananas Bananas Bananas
            </td>
            <td>Products</td>
            <td>- 50.00 UAH.</td>
            <td>
              <DeleteIcon />
            </td>
          </tr>
        ))}
      </tbody>
    </TransactionTable>
  );
};
