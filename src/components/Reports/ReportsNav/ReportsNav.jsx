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
import { useLocation } from 'react-router';

export const ReportsNav = () => {
  const balance = useSelector(selectBalance);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <PreBox>
      <ButtonBack to={backLinkHref}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Go back</ButtonBackText>
      </ButtonBack>
      <Box>
        <Slider />

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceAmounth>{balance ?? 0}.00 UAH</BalanceAmounth>
          <ButtonConfirm type="button">Confirm</ButtonConfirm>
        </Balance>
      </Box>
    </PreBox>
  );
};
