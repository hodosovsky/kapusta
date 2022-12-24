import React from 'react';
import { ReactComponent as Reports } from './reports.svg';
import { StyledReportsBtn } from './Styles';

export default function ReportsBtn() {
  return (
    <StyledReportsBtn to="/reports">
      <span>Reports</span>
      <Reports className="reportsIcon" />
    </StyledReportsBtn>
  );
}
