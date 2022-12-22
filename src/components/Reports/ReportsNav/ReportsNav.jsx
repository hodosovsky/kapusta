import { Slider } from './Slider/Slider';
import {
  Balance,
  ButtonBack,
  ButtonBackText,
  BalanceText,
  BalanceAmounth,
  Box,
  PreBox,
  ButtonConfirm,
} from './ReportsNav.styled';
import reports from '../../../images/reportsFiles/reports.svg';

export const ReportsNav = () => {
  return (
    <PreBox>
      <ButtonBack>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <Slider/>

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceAmounth>${'Balance'}</BalanceAmounth>
          <ButtonConfirm type='button'>Confirm</ButtonConfirm>
        </Balance>
      </Box>
    </PreBox>
  );
};
