import React from 'react';
import { useLocation } from 'react-router';
import { ReactComponent as Reports } from './reports.svg';
import { StyledReportsBtn } from './Styles';

export default function ReportsBtn() {
  const location = useLocation();

  return (
    <StyledReportsBtn to="/reports" state={{ from: location }}>
      <span>Reports</span>
      <Reports className="reportsIcon" />
    </StyledReportsBtn>
  );
}
