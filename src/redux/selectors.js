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

export const selectBalance = store => store.transactions.newBalance;

export const selectReports = store => store.reports;

export const selectIncomeTotal = store =>
  store.reports.reports.incomes.incomeData.Total;

export const selectExpensesTotal = store =>
  store.reports.reports.expenses.expenseTotal;
