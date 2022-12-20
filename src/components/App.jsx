import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import IncomePage from 'pages/IncomePage/IncomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import RegiserPage from 'pages/RegisterPage/RegiserPage';
import ThereIsNoSuchPage from 'pages/ThereIsNoSuchPage/ThereIsNoSuchPage';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegiserPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenses" element={<ExpensesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="*" element={<ThereIsNoSuchPage />} />
      </Routes>
    </>
  );
};
