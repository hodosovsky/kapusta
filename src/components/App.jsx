import ExpensesPage from 'pages/ExpensesPage/ExpensesPage';
import IncomePage from 'pages/IncomePage/IncomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import RegiserPage from 'pages/RegisterPage/RegisterPage';
import ThereIsNoSuchPage from 'pages/ThereIsNoSuchPage/ThereIsNoSuchPage';
import { Route, Routes } from 'react-router-dom';
import { SharedLayouts } from './SharedLayouts/SharedLayouts';
import { LightModalWindow } from './LightModalWindow/LightModalWindow';
// import { Summary } from './Summary/Summary';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegiserPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="*" element={<ThereIsNoSuchPage />} />
        </Route>
      </Routes>
      <LightModalWindow>Are you sure?</LightModalWindow>
      {/* <Summary /> */}
    </>
  );
};
