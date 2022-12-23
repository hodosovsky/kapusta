export const selectIsLoggedIn = store => store.auth.isLoggedIn;

export const selectUser = store => store.auth.user.email;

export const selectIsFetcingCurrentUser = store =>
  store.auth.isFetchingCurrentUser;
