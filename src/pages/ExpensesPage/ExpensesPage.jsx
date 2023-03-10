import Form from 'components/DropDownList/Form/Form';
import { Summary } from 'components/Summary/Summary';
import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBalance,
  selectExpenseTransactions,
  selectIsLoggedIn,
} from 'redux/selectors';
import { getExpenses } from 'redux/transactions/operations';
import { StyledBg, StyledFrame, StyledTableAndSummaryDiv } from './ExpensePage.styled';
import { useMatchMedia } from '../../hooks/use-match-media';
import { BackButton } from 'components/Buttons/BackButton';

export default function ExpensesPage() {
  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useSelector(selectExpenseTransactions);
  const color = 'red';
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getExpenses());
    // do things after first render
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && <>
        <StyledBg />
        <BackButton />
      </>}
      <StyledFrame>
        <Form />
        <StyledTableAndSummaryDiv>
          <TransactionListDesk>
            {allExpenses}
            {color}
          </TransactionListDesk>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
