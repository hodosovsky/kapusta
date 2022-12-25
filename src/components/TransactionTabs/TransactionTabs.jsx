import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { StyledTabsMobile, StyledTabsDesktop } from './Styles';

export const TransactionTabsMobile = () => {

    return (
      <StyledTabsMobile>
        <Link to="/expenses" className="TabMobile">
          expenses
        </Link>
        <Link to="/income" className="TabMobile">
          income
        </Link>
      </StyledTabsMobile>
    );
}

export const TransactionTabsDesktop = () => {
  return (
    <StyledTabsDesktop>
      <NavLink to="expenses" className="TabDesktop active">
        expenses
      </NavLink>
      <NavLink to="income" className="TabDesktop">
        income
      </NavLink>
    </StyledTabsDesktop>
  );
};