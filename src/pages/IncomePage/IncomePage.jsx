import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIncomeTransactions } from 'redux/selectors';
import { getIncome } from 'redux/transactions/operations';

export default function IncomePage() {
  const dispatch = useDispatch();
  const allIncomes = useSelector(selectIncomeTransactions);
  const color = 'green';

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch]);

  return (
    <div>
      <TransactionListDesk>
        {allIncomes}
        {color}
      </TransactionListDesk>
    </div>
  );
}
