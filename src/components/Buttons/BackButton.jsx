import { useLocation } from 'react-router';
import reports from '../../images/reportsFiles/reports.svg';
import { ButtonBack } from './Buttons.styled';

export const BackButton = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <ButtonBack to={backLinkHref}>
      <svg width="24" height="24">
        <use href={`${reports}#icon-back`}></use>
      </svg>
    </ButtonBack>
  );
};
