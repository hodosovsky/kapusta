export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user.email;

export const selectAllTransactions = store =>
  store.transactions.allTransactions;
