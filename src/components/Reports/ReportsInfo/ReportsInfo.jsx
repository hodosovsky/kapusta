import { ReportsList } from './List/ReportsList';
import { ReportsTable } from './Table/ReportsTable';
import {
  List,
  Item,
  ItemText,
  ItemExpenses,
  ItemIncome,
  Nav,
  NavButton,
  NavText,
  Box,
} from './ReportsInfo.styled';
import reports from '../../../images/reportsFiles/reports.svg';

export const ReportsInfo = () => {
  return (
    <div>

      <List>
        <Item>
          <ItemText>Expenses:</ItemText>
          <ItemExpenses>${'Expenses'}</ItemExpenses>
        </Item>
        <Item>
          <ItemText>Income:</ItemText>
          <ItemIncome>${'Income'}</ItemIncome>
        </Item>
      </List>

      <Box>
        <Nav>
          <NavButton>
            <svg width="6" height="12">
              <use href={`${reports}#icon-prev`}></use>
            </svg>
          </NavButton>
          <NavText>${'Expenses'}</NavText>
          <NavButton>
            <svg width="6" height="12">
              <use href={`${reports}#icon-next`}></use>
            </svg>
          </NavButton>
        </Nav>

        <ReportsList></ReportsList>
      </Box>
      <ReportsTable></ReportsTable>
    </div>
  );
};
