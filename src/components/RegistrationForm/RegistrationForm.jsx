import { useDispatch } from 'react-redux';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { registerAPI } from 'services/apiAuth';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import {
  StyledformRegister,
  StyledpromtText,
  StyledlabelText,
  StyledformInput,
  StyledcontainerButton,
  Styledlabel,
  StyledNavlink,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = await registerAPI({
      email: email.value,
      password: password.value,
    });
    if (data) {
      dispatch(
        logIn({
          email: email.value,
          password: password.value,
        })
      );
    }
  };

  const blurHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };
  const emailHandler = e => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Incorrect email');
      setErrorSymbol('*');
      if (!e.target.value) {
        setEmaiError('This is a required field');
        setErrorSymbol('*');
      }
    } else {
      setEmaiError('');
    }
  };

  const passwordHandler = e => {
    if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      if (!e.target.value) {
        setPasswordError('This is a required field');
      }
    } else {
      setPasswordError('');
    }
  };

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmaiError] = useState('This is a required field');
  const [passwordError, setPasswordError] = useState(
    'This is a required field'
  );
  const [errorSymbol, setErrorSymbol] = useState('*');

  return (
    <StyledformRegister onSubmit={handleSubmit}>
      <StyledpromtText>Fill in the fields to register</StyledpromtText>

      <form action="" autoComplete="on">
        <Styledlabel>
          <StyledlabelText>
            {emailDirty && emailError && (
              <span style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                {errorSymbol}{' '}
              </span>
            )}
            Email:
          </StyledlabelText>
          <StyledformInput
            onBlur={blurHandler}
            onChange={emailHandler}
            type="email"
            name="email"
            placeholder="your@email.com"
            pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
            title="Email may consist of letters, numbers and a mandatory character '@'"
            required
          />
          {emailDirty && emailError && (
            <div style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
              {emailError}{' '}
            </div>
          )}
        </Styledlabel>
        <div>
          <Styledlabel>
            <StyledlabelText>
              {passwordDirty && passwordError && (
                <span style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Password:
            </StyledlabelText>
            <StyledformInput
              onBlur={blurHandler}
              onChange={passwordHandler}
              type="password"
              name="password"
              placeholder="password"
              pattern="^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$"
              title="The password can consist of at least 8 letters, numbers and symbols '!@#$%^&*'"
              required
            />

            {passwordDirty && passwordError && (
              <div style={{ color: '#EB5757', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )}
          </Styledlabel>
        </div>
        <StyledcontainerButton>
          <StyledNavlink to="/login">Log in</StyledNavlink>
          <OrangeButton type="submit">REGISTRATION</OrangeButton>
        </StyledcontainerButton>
      </form>
    </StyledformRegister>
  );
};
