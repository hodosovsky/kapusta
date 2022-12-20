import ExpensesPage from 'pages/ExpensesPage';
import IncomePage from 'pages/IncomePage';
import LoginPage from 'pages/LoginPage';
import ReportsPage from 'pages/ReportsPage';
import ThereIsNoSuchPage from 'pages/ThereIsNoSuchPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/log-in" element={<LoginPage />}></Route>
        <Route path="/income" element={<IncomePage />}></Route>
        <Route path="/expenses" element={<ExpensesPage />}></Route>
        <Route path="/reports" element={<ReportsPage />}></Route>
        <Route path="/*" element={<ThereIsNoSuchPage />} />
      </Routes>
    </>
  );
};
