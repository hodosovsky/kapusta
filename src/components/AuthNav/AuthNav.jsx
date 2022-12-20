import logout from '../../images/logout.svg';
import { StyledAuthNav, StyledLoginName } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledLoginName>U</StyledLoginName>
      <img src={logout} alt="logout" />
    </StyledAuthNav>
  );
};
