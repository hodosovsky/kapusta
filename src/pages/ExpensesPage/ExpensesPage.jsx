import { TransactionListDesk } from 'components/TransactionListDesk/TransactionListDesk';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectExpenseTransactions } from 'redux/selectors';
import { getExpenses } from 'redux/transactions/operations';

export default function ExpensesPage() {
  const dispatch = useDispatch();
  const allExpenses = useSelector(selectExpenseTransactions);
  const color = 'red';

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  return (
    <div>
      <TransactionListDesk>
        {allExpenses}
        {color}
      </TransactionListDesk>
    </div>
  );
}
