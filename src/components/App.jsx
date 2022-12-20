import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import IncomePage from 'pages/IncomePage/IncomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import ThereIsNoSuchPage from 'pages/ThereIsNoSuchPage/ThereIsNoSuchPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';

export const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route path="/log-in" element={<LoginPage />}></Route>
          <Route path="/income" element={<IncomePage />}></Route>
          <Route path="/expenses" element={<ExpensesPage />}></Route>
          <Route path="/reports" element={<ReportsPage />}></Route>
          {/* <Route path="/*" element={<ThereIsNoSuchPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};
