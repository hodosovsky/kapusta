import { useDispatch } from 'react-redux';
import { OrangeButton } from 'components/Buttons/OrangeButton';
import { registerAPI } from 'services/apiAuth';
import { logIn } from 'redux/auth/operations';
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

  return (
    <StyledformRegister onSubmit={handleSubmit}>
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
          <OrangeButton type="submit">REGISTRATION</OrangeButton>
        </StyledcontainerButton>
      </form>
    </StyledformRegister>
  );
};
