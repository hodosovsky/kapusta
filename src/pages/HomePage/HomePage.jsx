import React from 'react';
import { useMatchMedia } from '../../hooks/use-match-media';
import ReportsBtn from '../../components/Buttons/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance';
import DateSelection from '../../components/DateSelection';
import { StyledHomePage } from './Styles';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {TransactionTabsMobile, TransactionTabsDesktop} from "../../components/TransactionTabs/TransactionTabs";

export default function HomePage() {
  const { isMobile } = useMatchMedia();

  return (
    <div>
      <StyledHomePage>
        <div className="flexWrapper">
          {isMobile && <ReportsBtn to="/reports" />}
          <ChangeBalance />
          {!isMobile && <ReportsBtn to="/reports" />}
        </div>
        {isMobile && <DateSelection />}
        {isMobile && <TransactionTabsMobile />}
        
      </StyledHomePage>
      <TransactionsList />
      <br />
      {!isMobile && <TransactionTabsDesktop />}
      <br />
    </div>
  );
}
