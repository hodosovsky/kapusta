export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user.email;

export const selectIsFetcingCurrentUser = store =>
  store.auth.isFetchingCurrentUser;

export const selectAllTransactions = store =>
  store.transactions.allTransactions;

export const selectIncomeTransactions = store =>
  store.transactions.incomes.incomeTransactions;

export const selectExpenseTransactions = store =>
  store.transactions.expences.expenseTransactions;
