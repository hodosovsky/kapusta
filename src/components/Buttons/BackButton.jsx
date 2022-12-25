import reports from '../../images/reportsFiles/reports.svg';
import { ButtonBack } from './Buttons.styled';

export const BackButton = () => {
  return (
    <ButtonBack>
      <svg width="24" height="24">
        <use href={`${reports}#icon-back`}></use>
      </svg>
    </ButtonBack>
  );
};
