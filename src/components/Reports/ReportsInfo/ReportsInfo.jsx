import { ReportsList } from './List/ReportsList';
import { ReportsTable } from './Table/ReportsTable';
import {
  List,
  Item,
  ItemText,
  ItemExpenses,
  ItemIncome,
  Nav,
  NavText,
  Box,
} from './ReportsInfo.styled';
// import reports from '../../../images/reportsFiles/reports.svg';
import { useSelector } from 'react-redux';
import { selectReports } from 'redux/selectors';
import { useState } from 'react';
import { ButtonsNextPrev } from '../ReportsNav/Slider/ButtonsNextPrev/ButtonsNextPrev';

export const ReportsInfo = () => {
  const { reports } = useSelector(selectReports);
  const [budget, setBudget] = useState('expenses')

const handleClick = () =>{
      if(budget==='expenses'){
        setBudget('income')
        return
      }
      setBudget('expenses')
}
  return (
    <div>
      <List>
        <Item>
          <ItemText>Expenses:</ItemText>
          <ItemExpenses>{reports?.expenses?.expenseTotal ?? 0}.00</ItemExpenses>
        </Item>
        <Item>
          <ItemText>Income:</ItemText>
          <ItemIncome>{reports?.incomes?.incomeTotal ?? 0}.00</ItemIncome>
        </Item>
      </List>

      <Box>
        <Nav className='Privet'>
          <ButtonsNextPrev onButtonClick={handleClick}>
          <NavText>{budget}</NavText>
          </ButtonsNextPrev>
        </Nav>

        <ReportsList onChange={budget}></ReportsList>
      </Box>
      <ReportsTable></ReportsTable>
    </div>
  );
};
