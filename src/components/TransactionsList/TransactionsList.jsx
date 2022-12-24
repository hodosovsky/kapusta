import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as DeleteIcon } from '../../images/deleteIcon.svg';
import { selectAllTransactions } from 'redux/selectors';
import {
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  ItemStyled,
  ItemCategoty,
  Sum,
  SumCont,
  StyledList,
} from './TransactionsList.styled';
import { deleteTransaction } from 'redux/transactions/operations';

export const TransactionsList = () => {
  const allTransactions = useSelector(selectAllTransactions);
  const dispatch = useDispatch();

  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return first - second;
  });

  const handleDelete = event => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  return (
    <StyledList className="container">
      {sortedTransactions.map(item => {
        const { _id, description, amount, date, category } = item;
        let color;
        let minus = false;
        if (category === 'З/П' || category === 'Доп. доход') {
          color = 'green';
        } else {
          color = 'red';
          minus = '-';
        }

        return (
          <ItemStyled key={_id}>
            <ItemNameCont>
              <ItemName>{description}</ItemName>
              <ItemDateCont>
                <ItemDate>{date}</ItemDate>
                <ItemCategoty>{category}</ItemCategoty>
              </ItemDateCont>
            </ItemNameCont>
            <SumCont>
              <Sum style={{ color }} className="sum">
                {minus} {amount}.00 UAH.
              </Sum>
              <span id={_id} onClick={handleDelete}>
                <DeleteIcon />
              </span>
            </SumCont>
          </ItemStyled>
        );
      })}
    </StyledList>
  );
};
