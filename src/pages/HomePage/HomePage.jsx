import React from 'react';
import { Link } from 'react-router-dom';
import ChangeBalance from '../../components/ChangeBalance';
import Form from '../../components/DropDownList/Form/Form';
import { ReactComponent as Reports } from './reports.svg';
import { StyledHomePage } from './Styles';

export default function HomePage() {
  return (
    <div>
      <StyledHomePage>
        <Link to="/reports" className="reportsBtn">
          <span>Reports</span>
          <Reports className="reportsIcon" />
        </Link>
        <ChangeBalance />
        <Form />
        {/* вставити компонент з списком транзакцій */}

        <div className="transactionsBtnWrap">
          <Link to="/expenses" className="transactionsBtn">
            expenses
          </Link>
          <Link to="/income" className="transactionsBtn">
            income
          </Link>
        </div>
      </StyledHomePage>
    </div>
  );
}
