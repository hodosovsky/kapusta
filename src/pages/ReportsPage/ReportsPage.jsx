import React from 'react';
import { ReportsInfo } from 'components/Reports/ReportsInfo/ReportsInfo';
import { ReportsNav } from 'components/Reports/ReportsNav/ReportsNav';
import { BoxBg } from './ReportsPage.styled';

export default function ReportsPage() {
  return (
    <BoxBg>
      <ReportsNav/>
      <ReportsInfo/>
    </BoxBg>
  );
}
