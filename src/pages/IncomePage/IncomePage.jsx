import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React from 'react';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIncomeTransactions } from 'redux/selectors';
import { getIncome } from 'redux/transactions/operations';
import { useMatchMedia } from 'hooks/use-match-media';
import { BackButton } from 'components/Buttons/BackButton';
import {
  StyledFrame,
  StyledTableAndSummaryDiv,
} from 'pages/ExpensesPage/ExpensePage.styled';
import Form from 'components/DropDownList/Form/Form';
import { Summary } from 'components/Summary/Summary';

export default function IncomePage() {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const dispatch = useDispatch();
  const allIncomes = useSelector(selectIncomeTransactions);
  const color = 'green';
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      dispatch(getIncome());
      console.log('im fetching');
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
            {allIncomes}
            {color}
          </TransactionListDesk>
          {isDesktop && <Summary />}
        </StyledTableAndSummaryDiv>
      </StyledFrame>
      {isTablet && <Summary />}
    </>
  );
}
