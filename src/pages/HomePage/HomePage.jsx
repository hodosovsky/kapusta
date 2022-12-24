import React from 'react';
import StyledReportsBtn from '../../components/Buttons/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance';
import DateSelection from '../../components/DateSelection';
import { StyledHomePage } from './Styles';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {TransactionTabsMobile, TransactionTabsDesktop} from "../../components/TransactionTabs/TransactionTabs";

export default function HomePage() {
  return (
    <div>
      <StyledHomePage>
        <StyledReportsBtn to="/reports" />
        <ChangeBalance />
        <DateSelection />
        <TransactionTabsMobile />
      </StyledHomePage>
      <TransactionsList />
      <br />
      <TransactionTabsDesktop />
      <br />
    </div>
  );
}
