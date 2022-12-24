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
import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/selectors';

export const ReportsNav = () => {
  const balance = useSelector(selectBalance);

  return (
    <PreBox>
      <ButtonBack>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <Slider />

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceAmounth>{balance ?? 0}.00</BalanceAmounth>
          <ButtonConfirm type="button">Confirm</ButtonConfirm>
        </Balance>
      </Box>
    </PreBox>
  );
};
