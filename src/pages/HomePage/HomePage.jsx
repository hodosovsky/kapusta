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
// import { setAuthHeader } from 'services/apiAuth';
// import { addAccessToken } from 'redux/auth/auth.slice';
// import { refreshUser } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';

export default function HomePage() {
  const { isMobile } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  // const dispatch = useDispatch();
  // const token = JSON.parse(
  //   localStorage.getItem('persist:auth')
  // ).token.replaceAll('"', '');

  // useEffect(() => {
  //   if (!token || token === 'null') {
  //     return;
  //   }
  //   setAuthHeader(token);
  //   dispatch(addAccessToken(token));
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <>
      <GrayBg />
      <StyledHomePage>
        <div className="flexWrapper">
          {isMobile && <ReportsBtn to="/reports" />}
          <ChangeBalance />
          {!isMobile && <ReportsBtn to="/reports" />}
        </div>
        {isMobile && (
          <div className="center">
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        {isMobile && <TransactionTabsMobile />}
        {!isMobile && <TransactionTabsDesktop />}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionsList />}
      </StyledHomePage>
    </>
  );
}
