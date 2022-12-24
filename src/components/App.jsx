import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import IncomePage from 'pages/IncomePage/IncomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import RegiserPage from 'pages/RegisterPage/RegisterPage';
import ThereIsNoSuchPage from 'pages/ThereIsNoSuchPage/ThereIsNoSuchPage';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
// import { LightModalWindow } from './LightModalWindow/LightModalWindow';
// import { Summary } from './Summary/Summary';
import { Form } from './TestForm/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAccessToken } from 'redux/auth/auth.slice';
import { setAuthHeader } from 'services/apiAuth';
import { refreshUser } from 'redux/auth/operations';
import { selectIsFetcingCurrentUser } from 'redux/selectors';
// import { TransactionsList } from './TransactionsList/TransactionsList';
// import { selectIsLoadingCurrentUser } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();
  const token = JSON.parse(
    localStorage.getItem('persist:auth')
  ).token.replaceAll('"', '');

  const isFetchingUser = useSelector(selectIsFetcingCurrentUser);

  useEffect(() => {
    if (!token || token === 'null') {
      return;
    }
    setAuthHeader(token);
    dispatch(addAccessToken(token));
    dispatch(refreshUser());
  }, [dispatch, token]);

  return (
    !isFetchingUser && (
      <>
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegiserPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/income" element={<IncomePage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="*" element={<ThereIsNoSuchPage />} />
          </Route>
        </Routes>
        {/* <LightModalWindow>Are you sure?</LightModalWindow> */}
        {/* <Summary /> */}
        <Form />
        {/* <TransactionsList /> */}
      </>
    )
  );
};
