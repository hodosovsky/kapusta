import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import logoutImg from '../../images/logout.svg';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
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
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    isLoggedIn && (
      <StyledAuthNav>
        <StyledLoginLabel>{userEmail[0].toUpperCase()}</StyledLoginLabel>
        <StyledLoginName>{userEmail}</StyledLoginName>
        <StyledLogoutImg src={logoutImg} alt="logout" onClick={handleClick} />
        <StyledVerticalLine></StyledVerticalLine>
        <StyledExitButton type="button" onClick={handleClick}>
          Exit
        </StyledExitButton>
      </StyledAuthNav>
    )
  );
};
