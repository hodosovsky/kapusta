import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectIncomeSummary, selectExpensesSummary } from 'redux/selectors';
import { monthNameOrkToEng } from 'hooks/useMonthTranslate';
import {
  StyledTable,
  StyledRow,
  StyledMonth,
  StyledTableHead,
  StyledValue,
} from './Summary.styled';

export const Summary = () => {
  const location = useLocation();

  const incomeData = useSelector(selectIncomeSummary);
  const expensesData = useSelector(selectExpensesSummary);
  let data;

  if (location.pathname === '/income') {
    data = Object.entries(incomeData);
  }
  if (location.pathname === '/expenses') {
    data = Object.entries(expensesData);
  }
  console.log('data', data);

  return (
    <StyledTable>
      <StyledTableHead>SUMMARY</StyledTableHead>
      {data.map(el => {
        if (el[1] === 'N/A') {
          return false;
        } else {
          return (
            <StyledRow key={`${el[0]}${el[1]}`}>
              <StyledMonth>{monthNameOrkToEng(el[0])}</StyledMonth>
              <StyledValue>{el[1]}</StyledValue>
            </StyledRow>
          );
        }
      })}
    </StyledTable>
  );
};
