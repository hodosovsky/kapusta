import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useMatchMedia } from '../../hooks/use-match-media';
import GrayBg from '../../components/GrayBg';
import ReportsBtn from '../../components/Buttons/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance';
import DateSelection from '../../components/DateSelection';
import { StyledHomePage } from './Styles';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {
  TransactionTabsMobile,
  TransactionTabsDesktop,
} from '../../components/TransactionTabs/TransactionTabs';

export default function HomePage() {
  const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <GrayBg />
      <StyledHomePage>
        <div className="flexWrapper">
          {isMobile && <ReportsBtn to="/reports" />}
          <ChangeBalance />
          {!isMobile && <ReportsBtn to="/reports" />}
        </div>
        {isMobile && (
          <DateSelection startDate={startDate} setStartDate={setStartDate} />
        )}
        {isMobile && <TransactionTabsMobile />}
        {!isMobile && <TransactionTabsDesktop />}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionsList />}
      </StyledHomePage>
    </div>
  );
}
