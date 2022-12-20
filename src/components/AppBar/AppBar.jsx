import { AuthNav } from 'components/AuthNav/AuthNav';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { StyledHeader } from './AppBar.styled';

export const AppBar = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <AuthNav />
    </StyledHeader>
  );
};
