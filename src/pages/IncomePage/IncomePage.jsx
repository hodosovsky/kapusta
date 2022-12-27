import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIncomeTransactions,
  selectIsLoggedIn,
  selectBalance,
} from 'redux/selectors';
import { getIncome } from 'redux/transactions/operations';
import { useMatchMedia } from 'hooks/use-match-media';
import { BackButton } from 'components/Buttons/BackButton';
import {
  StyledBg,
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
  const user = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (user) dispatch(getIncome());
  }, [dispatch, user, balance]);

  return (
    <>
      {isMobile && (
        <>
          <StyledBg />
          <BackButton />
        </>
      )}
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
