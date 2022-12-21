import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import RegistrationForm from 'path/to/pages/RegistrationForm';

import {
  StyledformRegister,
  StyledpromtText,
  StyledlabelText,
  StyledformInput,
  StyledcontainerButton,
  Styledlabel,
} from './RegistrationForm.styled';

const StyledNavlink = styled(NavLink)`
  width: 122px;
  height: 44px;
  background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  padding: 0;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: #52555f;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #52555f;
  background-color: #f5f6fb;

  text-decoration: none;
  &.active {
    color: #ffffff;
    background-color: #ff751d;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #52555f;
    background-color: #f5f6fb;
  }
`;

export const RegistrationForm = () => {
  return (
    <StyledformRegister>
      <StyledpromtText>
        You can log in with your Google Account:
      </StyledpromtText>

      <StyledpromtText>
        Or log in using an email and password, after registering:
      </StyledpromtText>
      <form action="" autoComplete="on">
        <Styledlabel>
          <StyledlabelText>
            {/* <span
                style={{ color: 'red', fontSize: 10, paddingTop: 4 }}
              ></span> */}
            Email:
          </StyledlabelText>
          <StyledformInput
            type="email"
            name="email"
            placeholder="your@email.com"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email may consist of letters, numbers and a mandatory character '@'"
            required
          />

          <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}></div>
        </Styledlabel>
        <div>
          <Styledlabel>
            <StyledlabelText>
              <span
                style={{ color: 'red', fontSize: 10, paddingTop: 4 }}
              ></span>
              Password:
            </StyledlabelText>
            <StyledformInput
              type="password"
              name="password"
              placeholder="password"
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
              title="The password can consist of at least 6 letters, numbers and symbols '!@#$%^&*'"
              required
            />

            {/* <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}></div> */}
          </Styledlabel>
        </div>
        <StyledcontainerButton>
          <StyledNavlink to="/login">Log in</StyledNavlink>
          <StyledNavlink to="/register">Registration</StyledNavlink>
        </StyledcontainerButton>
      </form>
    </StyledformRegister>
  );
};
