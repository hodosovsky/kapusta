import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import logoutImg from '../../images/logout.svg';
import {
  StyledAuthNav,
  StyledLoginLabel,
  StyledLoginName,
  StyledLogoutImg,
  StyledVerticalLine,
  StyledExitButton,
} from './AuthNav.styled';

export const AuthNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <StyledAuthNav>
      <StyledLoginLabel>U</StyledLoginLabel>
      <StyledLoginName>User name</StyledLoginName>
      <StyledLogoutImg src={logoutImg} alt="logout" onClick={handleClick} />
      <StyledVerticalLine></StyledVerticalLine>
      <StyledExitButton type="button" onClick={handleClick}>
        Exit
      </StyledExitButton>
    </StyledAuthNav>
  );
};
