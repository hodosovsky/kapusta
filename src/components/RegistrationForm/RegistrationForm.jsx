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
  return (
    <StyledformRegister>
      <StyledpromtText>To register fill in the fields:</StyledpromtText>

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
