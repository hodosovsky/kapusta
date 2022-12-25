import Form from 'components/DropDownList/Form/Form';
import { Summary } from 'components/Summary/Summary';
import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExpenseTransactions } from 'redux/selectors';
import { getExpenses } from 'redux/transactions/operations';
import { StyledFrame, StyledTableAndSummaryDiv } from './ExpensePage.styled';
import { useMatchMedia } from '../../hooks/use-match-media';
import { BackButton } from 'components/Buttons/BackButton';

export default function ExpensesPage() {
  const firstUpdate = useRef(true);

  const dispatch = useDispatch();
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  const allExpenses = useSelector(selectExpenseTransactions);
  const color = 'red';

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      dispatch(getExpenses());
      // do things after first render
    }
  }, [dispatch]);

  return (
    <>
      {isMobile && <BackButton />}
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
