export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user.email;

export const selectToken = store => store.auth.token;

export const selectIsFetcingCurrentUser = store =>
  store.auth.isFetchingCurrentUser;

export const selectAllTransactions = store =>
  store.transactions.allTransactions;

export const selectIncomeTransactions = store =>
  store.transactions.incomes.incomeTransactions;

export const selectExpenseTransactions = store =>
  store.transactions.expences.expenseTransactions;

export const selectIncomeSummary = store =>
  store.transactions.incomes.monthsStats;

export const selectExpensesSummary = store =>
  store.transactions.expences.monthsStats;

export const selectBalance = store => store.transactions.newBalance;

export const selectReports = store => store.reports;

export const selectIncomeTotal = store =>
  store.reports.reports.incomes.incomeData.Total;

export const selectExpensesTotal = store =>
  store.reports.reports.expenses.expenseTotal;

export const selectIsLoading = store => store.transactions.isLoading;

export const selectDataChart = store => store.reportsQuery.filteredData;

export const selectReportsQuery = store => store.reportsQuery.reportsQuery;