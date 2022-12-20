import logout from '../../images/logout.svg';
import {
  StyledAuthNav,
  StyledLoginLabel,
  StyledLoginName,
  StyledLogoutImg,
  StyledVerticalLine,
  StyledExitButton,
} from './AuthNav.styled';

export const AuthNav = () => {
  const handleClick = () => {};

  return (
    <StyledAuthNav>
      <StyledLoginLabel>U</StyledLoginLabel>
      <StyledLoginName>User name</StyledLoginName>
      <StyledLogoutImg src={logout} alt="logout" />
      <StyledVerticalLine></StyledVerticalLine>
      <StyledExitButton type="button" onClick={handleClick}>
        Exit
      </StyledExitButton>
    </StyledAuthNav>
  );
};
