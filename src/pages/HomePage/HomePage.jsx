import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useMatchMedia } from '../../hooks/use-match-media';
import GrayBg from '../../components/GrayBg';
import ReportsBtn from '../../components/Buttons/ReportsBtn';
import ChangeBalance from '../../components/ChangeBalance';
import DateSelection from '../../components/DateSelection';
import { StyledHomePage, KapustaTab, KapustaDesk } from './Styles';
import { TransactionsList } from 'components/TransactionsList/TransactionsList';
import {
  TransactionTabsMobile,
  TransactionTabsDesktop,
} from '../../components/TransactionTabs/TransactionTabs';
import kapusta from '../../images/kapustaTab.svg';
import kapustaDesktop from '../../images/kapustaDesk.svg';
// import { setAuthHeader } from 'services/apiAuth';
// import { addAccessToken } from 'redux/auth/auth.slice';
// import { refreshUser } from 'redux/auth/operations';
// import { useDispatch } from 'react-redux';

export default function HomePage() {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const [startDate, setStartDate] = useState(new Date());
  const location = useLocation();
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
          {isMobile && <ReportsBtn to="/reports" state={{ from: location }} />}
          <ChangeBalance />
          {!isMobile && <ReportsBtn to="/reports" state={{ from: location }} />}
        </div>
        {isMobile && (
          <div className="datePickerMobWrap">
            <DateSelection startDate={startDate} setStartDate={setStartDate} />
          </div>
        )}
        {isMobile && <TransactionTabsMobile />}
        {!isMobile && <TransactionTabsDesktop />}
        {!isMobile && <Outlet />}
        {isMobile && <TransactionsList />}
        {isTablet && <KapustaTab src={kapusta} width="183" height="146" />}
        {isDesktop && (
          <KapustaDesk src={kapustaDesktop} width="1334" height="232" />
        )}
      </StyledHomePage>
    </>
  );
}
